/* ============================================================
   Пользовательская панель слоёв для веб-карты (qgis2web).
   Заменяет штатный ol-layerswitcher:
     - растровые слои переключаются по одному (radio-переключатель),
     - единый ползунок прозрачности для активного слоя,
     - легенда активного слоя показывается под его названием,
     - базовые слои (подложка, граница, города) всегда включены
       и в панели не фигурируют.
   Панель и кнопка — в ПРАВОМ верхнем углу,
   кнопка "На главную" (index.html) — в левом нижнем углу.
   Подключать ПОСЛЕ resources/qgis2web.js:
       <script src="custom_panel.js"></script>
   ============================================================ */
(function () {
    'use strict';

    /* ---------- Настройки ---------- */
    // Какой слой активен по умолчанию: 0..4 (см. список ниже)
    var DEFAULT_ACTIVE = 2; // «Среднее 2000–2025»
    var DEFAULT_OPACITY = 100; // %, прозрачность по умолчанию

    // Индекс слоя «Наклон тренда (b)» в массиве rasters (0-based)
    var B_COEF_INDEX = 4;
    // Подписи легенды для слоя b_coefficient (замена «2 - 2» и т.п.)
    var B_LABELS = [
        '≤1,75',
        '1,75–2,00',
        '2,00–2,25',
        '2,25–2,50',
        '2,50–2,75',
        '2,75–3,00',
        '3,00–3,25',
        '≥3,25'
    ];

    /* ---------- 1. Стили: скрываем штатный переключатель, задаём вид панели ---------- */
    var style = document.createElement('style');
    style.textContent = [
        '.layer-switcher{display:none!important}',
        '#lp-btn{position:absolute;top:10px;right:10px;z-index:2000;background:#fff;' +
            'border:1px solid #c9c9c9;border-radius:6px;box-shadow:0 1px 6px rgba(0,0,0,.25);' +
            'padding:8px 14px;font:14px/1.2 Arial,Helvetica,sans-serif;color:#333;cursor:pointer;' +
            'display:flex;align-items:center;gap:8px;user-select:none}',
        '#lp-btn:hover{background:#f2f2f2}',
        '#lp-panel{position:absolute;top:52px;right:10px;z-index:2000;width:260px;' +
            'max-height:calc(100% - 76px);background:#fff;border:1px solid #c9c9c9;border-radius:8px;' +
            'box-shadow:0 2px 12px rgba(0,0,0,.3);font:13px/1.45 Arial,Helvetica,sans-serif;color:#333;' +
            'display:none;flex-direction:column;overflow:hidden}',
        '#lp-panel.lp-open{display:flex}',
        '.lp-header{padding:10px 12px;border-bottom:1px solid #e5e5e5;display:flex;' +
            'justify-content:space-between;align-items:center;font-weight:bold;flex:0 0 auto}',
        '.lp-close{cursor:pointer;padding:0 4px;font-size:15px;color:#888}',
        '.lp-close:hover{color:#333}',
        '.lp-items{overflow-y:auto;padding:4px 0;flex:0 1 auto}',
        '.lp-item{display:flex;align-items:center;gap:9px;padding:8px 12px;cursor:pointer}',
        '.lp-item:hover{background:#f5f5f5}',
        '.lp-item input{margin:0;flex:0 0 auto}',
        '.lp-legend{display:none;padding:0 12px 10px 37px;font-size:12px;color:#444}',
        '.lp-legend.lp-show{display:block}',
        '.lp-legend img{vertical-align:middle;margin-right:3px}',
        '.lp-legend .lp-row{margin:2px 0;white-space:nowrap}',
        '.lp-opacity{padding:10px 12px 12px;border-top:1px solid #e5e5e5;flex:0 0 auto}',
        '.lp-opacity label{display:block;margin-bottom:6px}',
        '#lp-range{width:100%;margin:0}',
        '#lp-home{position:absolute;bottom:10px;left:10px;z-index:2000;width:40px;height:40px;' +
            'background:#fff;border:1px solid #c9c9c9;border-radius:6px;' +
            'box-shadow:0 1px 6px rgba(0,0,0,.25);display:flex;align-items:center;justify-content:center;' +
            'cursor:pointer;color:#444!important;font-size:18px;text-decoration:none}',
        '#lp-home:hover{background:#f2f2f2}'
    ].join('\n');
    document.head.appendChild(style);

    /* ---------- 2. Базовые слои всегда видимы и не участвуют в переключении ---------- */
    var baseLayers = [
        lyr_YandexSatellite_0,      // подложка
        lyr_Perm_Krai_6,            // граница края
        lyr_place_city_Perm_Krai_7, // крупные города
        lyr_place_towm_Perm_Krai_8  // малые города
    ];
    baseLayers.forEach(function (l) { l.setVisible(true); });

    /* ---------- 3. Растровые слои: переключаются по одному ---------- */
    var rasters = [
        { layer: lyr_1940_1,          name: 'Тренд: 1940 год' },
        { layer: lyr_19401965_2,      name: 'Среднее 1940–1965' },
        { layer: lyr_20002025_3,      name: 'Среднее 2000–2025' },
        { layer: lyr_2025_4,          name: 'Тренд: 2025 год' },
        { layer: lyr_b_coefficient_5, name: 'Наклон тренда (b)' }
    ];

    // Чистый текст строки легенды (без тегов и без картинок)
    function rowText(part) {
        var txt = part.replace(/<img[^>]*>/gi, '');   // убираем картинки
        txt = txt.replace(/<[^>]*>/g, '');            // убираем прочие теги
        txt = txt.replace(/\\/g, '').trim();          // слеши от qgis2web
        return txt;
    }

    // Легенда слоя берётся из его title (qgis2web хранит её в HTML).
    // Первая строка (имя слоя) отбрасывается, пустые строки не показываются.
    // Для слоя b_coefficient подписи подменяются на человекочитаемые.
    function legendHtml(layer, idx) {
        var t = layer.get('title') || '';
        var parts = t.split('<br');
        if (parts.length < 2) { return ''; }
        parts = parts.slice(1);

        // Своя легенда для слоя наклона
        if (idx === B_COEF_INDEX) {
            var imgs = [];
            parts.forEach(function (p) {
                var m = p.match(/<img[^>]*>/i);
                if (m) { imgs.push(m[0]); }
            });
            if (imgs.length === B_LABELS.length) {
                return imgs.map(function (img, i) {
                    return '<div class="lp-row">' + img + '&nbsp;' + B_LABELS[i] + '</div>';
                }).join('');
            }
            // если число квадратиков вдруг иное — падаем в общий путь ниже
        }

        var out = [];
        parts.forEach(function (p) {
            if (rowText(p).length === 0) { return; } // пустые строки пропускаем
            var row = p.replace(/\\/g, '').replace(/^\s+/, '');
            out.push('<div class="lp-row">' + row + '</div>');
        });
        return out.join('');
    }

    /* ---------- 4. Собираем панель ---------- */
    var mapDiv = document.getElementById('map');

    var btn = document.createElement('div');
    btn.id = 'lp-btn';
    btn.title = 'Показать/скрыть панель слоёв';
    btn.innerHTML = '&#9776;&nbsp;Слои';
    mapDiv.appendChild(btn);

    var active = DEFAULT_ACTIVE;
    var panelHtml = '<div class="lp-header"><span>Слои данных</span>' +
        '<span class="lp-close" title="Закрыть">&#10005;</span></div>' +
        '<div class="lp-items">';
    rasters.forEach(function (r, i) {
        panelHtml += '<label class="lp-item"><input type="radio" name="lp-layer"' +
            (i === active ? ' checked' : '') + '><span>' + r.name + '</span></label>';
        panelHtml += '<div class="lp-legend" data-legend="' + i + '">' + legendHtml(r.layer, i) + '</div>';
    });
    panelHtml += '</div>' +
        '<div class="lp-opacity">' +
        '<label>Прозрачность: <span id="lp-opval">100%</span></label>' +
        '<input type="range" id="lp-range" min="0" max="100" step="1" value="' + DEFAULT_OPACITY + '">' +
        '</div>';

    var panel = document.createElement('div');
    panel.id = 'lp-panel';
    panel.innerHTML = panelHtml;
    mapDiv.appendChild(panel);

    // Кнопка «На главную» — левый нижний угол
    var home = document.createElement('a');
    home.id = 'lp-home';
    home.href = 'index.html';
    home.title = 'На главную страницу';
    home.innerHTML = '<i class="fas fa-home" aria-hidden="true"></i>';
    mapDiv.appendChild(home);

    var radios = panel.querySelectorAll('input[type="radio"]');
    var legends = panel.querySelectorAll('.lp-legend');
    var range = document.getElementById('lp-range');
    var opval = document.getElementById('lp-opval');

    function applyOpacity() {
        var v = range.value / 100;
        rasters[active].layer.setOpacity(v);
        opval.textContent = range.value + '%';
    }

    function setActive(i) {
        active = i;
        rasters.forEach(function (r, j) { r.layer.setVisible(j === i); });
        legends.forEach(function (el, j) {
            el.classList.toggle('lp-show', j === i);
        });
        applyOpacity();
    }

    radios.forEach(function (radio, i) {
        radio.addEventListener('change', function () {
            if (radio.checked) { setActive(i); }
        });
    });

    range.addEventListener('input', applyOpacity);

    btn.addEventListener('click', function () {
        panel.classList.toggle('lp-open');
    });
    panel.querySelector('.lp-close').addEventListener('click', function () {
        panel.classList.remove('lp-open');
    });

    /* ---------- 5. Начальное состояние: только один растровый слой виден ---------- */
    rasters.forEach(function (r, j) { r.layer.setVisible(j === active); });
    applyOpacity();
})();
