var wms_layers = [];


        var lyr_YandexSatellite_0 = new ol.layer.Tile({
            'title': 'Yandex Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_1940_1 = new ol.layer.Image({
        opacity: 1,
        
    title: '1940<br />\
    <img src="styles/legend/1940_1_0.png" /> <= 1200<br />\
    <img src="styles/legend/1940_1_1.png" /> 1200 - 1400<br />\
    <img src="styles/legend/1940_1_2.png" /> 1400 - 1600<br />\
    <img src="styles/legend/1940_1_3.png" /> 1600 - 1800<br />\
    <img src="styles/legend/1940_1_4.png" /> 1800 - 2000<br />\
    <img src="styles/legend/1940_1_5.png" /> 2000 - 2200<br />\
    <img src="styles/legend/1940_1_6.png" /> > 2200<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/1940_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [5765000.000000, 7581000.000000, 6621000.000000, 8779000.000000]
        })
    });
var lyr_19401965_2 = new ol.layer.Image({
        opacity: 1,
        
    title: '1940-1965<br />\
    <img src="styles/legend/19401965_2_0.png" /> <= 1200<br />\
    <img src="styles/legend/19401965_2_1.png" /> 1200 - 1400<br />\
    <img src="styles/legend/19401965_2_2.png" /> 1400 - 1600<br />\
    <img src="styles/legend/19401965_2_3.png" /> 1600 - 1800<br />\
    <img src="styles/legend/19401965_2_4.png" /> 1800 - 2000<br />\
    <img src="styles/legend/19401965_2_5.png" /> 2000 - 2200<br />\
    <img src="styles/legend/19401965_2_6.png" /> > 2200<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/19401965_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [5765000.000000, 7581000.000000, 6621000.000000, 8779000.000000]
        })
    });
var lyr_20002025_3 = new ol.layer.Image({
        opacity: 1,
        
    title: '2000-2025<br />\
    <img src="styles/legend/20002025_3_0.png" /> <= 1200<br />\
    <img src="styles/legend/20002025_3_1.png" /> 1200 - 1400<br />\
    <img src="styles/legend/20002025_3_2.png" /> 1400 - 1600<br />\
    <img src="styles/legend/20002025_3_3.png" /> 1600 - 1800<br />\
    <img src="styles/legend/20002025_3_4.png" /> 1800 - 2000<br />\
    <img src="styles/legend/20002025_3_5.png" /> 2000 - 2200<br />\
    <img src="styles/legend/20002025_3_6.png" /> > 2200<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/20002025_3.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [5765000.000000, 7581000.000000, 6621000.000000, 8779000.000000]
        })
    });
var lyr_2025_4 = new ol.layer.Image({
        opacity: 1,
        
    title: '2025<br />\
    <img src="styles/legend/2025_4_0.png" /> <= 1200<br />\
    <img src="styles/legend/2025_4_1.png" /> 1200 - 1400<br />\
    <img src="styles/legend/2025_4_2.png" /> 1400 - 1600<br />\
    <img src="styles/legend/2025_4_3.png" /> 1600 - 1800<br />\
    <img src="styles/legend/2025_4_4.png" /> 1800 - 2000<br />\
    <img src="styles/legend/2025_4_5.png" /> 2000 - 2200<br />\
    <img src="styles/legend/2025_4_6.png" /> > 2200<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/2025_4.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [5765000.000000, 7581000.000000, 6621000.000000, 8779000.000000]
        })
    });
var lyr_b_coefficient_5 = new ol.layer.Image({
        opacity: 1,
        
    title: 'b_coefficient<br />\
    <img src="styles/legend/b_coefficient_5_0.png" /> <= 2<br />\
    <img src="styles/legend/b_coefficient_5_1.png" /> 2 - 2<br />\
    <img src="styles/legend/b_coefficient_5_2.png" /> 2 - 2<br />\
    <img src="styles/legend/b_coefficient_5_3.png" /> 2 - 3<br />\
    <img src="styles/legend/b_coefficient_5_4.png" /> 3 - 3<br />\
    <img src="styles/legend/b_coefficient_5_5.png" /> 3 - 3<br />\
    <img src="styles/legend/b_coefficient_5_6.png" /> 3 - 3<br />\
    <img src="styles/legend/b_coefficient_5_7.png" /> > 3<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/b_coefficient_5.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [5765000.000000, 7581000.000000, 6621000.000000, 8779000.000000]
        })
    });
var format_Perm_Krai_6 = new ol.format.GeoJSON();
var features_Perm_Krai_6 = format_Perm_Krai_6.readFeatures(json_Perm_Krai_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Perm_Krai_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Perm_Krai_6.addFeatures(features_Perm_Krai_6);
var lyr_Perm_Krai_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Perm_Krai_6, 
                style: style_Perm_Krai_6,
                popuplayertitle: 'Perm_Krai',
                interactive: false,
                title: '<img src="styles/legend/Perm_Krai_6.png" /> Perm_Krai'
            });
var format_place_city_Perm_Krai_7 = new ol.format.GeoJSON();
var features_place_city_Perm_Krai_7 = format_place_city_Perm_Krai_7.readFeatures(json_place_city_Perm_Krai_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_place_city_Perm_Krai_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_place_city_Perm_Krai_7.addFeatures(features_place_city_Perm_Krai_7);
var lyr_place_city_Perm_Krai_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_place_city_Perm_Krai_7, 
                style: style_place_city_Perm_Krai_7,
                popuplayertitle: 'place_city_Perm_Krai',
                interactive: false,
                title: '<img src="styles/legend/place_city_Perm_Krai_7.png" /> place_city_Perm_Krai'
            });
var format_place_towm_Perm_Krai_8 = new ol.format.GeoJSON();
var features_place_towm_Perm_Krai_8 = format_place_towm_Perm_Krai_8.readFeatures(json_place_towm_Perm_Krai_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_place_towm_Perm_Krai_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_place_towm_Perm_Krai_8.addFeatures(features_place_towm_Perm_Krai_8);
var lyr_place_towm_Perm_Krai_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_place_towm_Perm_Krai_8, 
                style: style_place_towm_Perm_Krai_8,
                popuplayertitle: 'place_towm_Perm_Krai',
                interactive: false,
                title: '<img src="styles/legend/place_towm_Perm_Krai_8.png" /> place_towm_Perm_Krai'
            });
var group_city = new ol.layer.Group({
                                layers: [lyr_place_city_Perm_Krai_7,lyr_place_towm_Perm_Krai_8,],
                                fold: 'open',
                                title: 'city'});

lyr_YandexSatellite_0.setVisible(true);lyr_1940_1.setVisible(true);lyr_19401965_2.setVisible(true);lyr_20002025_3.setVisible(true);lyr_2025_4.setVisible(true);lyr_b_coefficient_5.setVisible(true);lyr_Perm_Krai_6.setVisible(true);lyr_place_city_Perm_Krai_7.setVisible(true);lyr_place_towm_Perm_Krai_8.setVisible(true);
var layersList = [lyr_YandexSatellite_0,lyr_1940_1,lyr_19401965_2,lyr_20002025_3,lyr_2025_4,lyr_b_coefficient_5,lyr_Perm_Krai_6,group_city];
lyr_Perm_Krai_6.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'name': 'name', 'postal_cod': 'postal_cod', 'place': 'place', 'official_s': 'official_s', 'name_right': 'name_right', 'name_left': 'name_left', 'addr_regio': 'addr_regio', 'wikipedia': 'wikipedia', 'wikimedia_': 'wikimedia_', 'wikidata': 'wikidata', 'type': 'type', 'timezone': 'timezone', 'ref': 'ref', 'population': 'population', 'populati_1': 'populati_1', 'oktmo_user': 'oktmo_user', 'name_zh-Ha': 'name_zh-Ha', 'name_zh-_1': 'name_zh-_1', 'name_zh': 'name_zh', 'name_tt': 'name_tt', 'name_tk': 'name_tk', 'name_sv': 'name_sv', 'name_sk': 'name_sk', 'name_ru': 'name_ru', 'name_ro': 'name_ro', 'name_pl': 'name_pl', 'name_lt': 'name_lt', 'name_ja': 'name_ja', 'name_hu': 'name_hu', 'name_hr': 'name_hr', 'name_fr': 'name_fr', 'name_es': 'name_es', 'name_en': 'name_en', 'name_de': 'name_de', 'name_cs': 'name_cs', 'name_ca': 'name_ca', 'name_ar': 'name_ar', 'int_ref': 'int_ref', 'image': 'image', 'gost_7.67-': 'gost_7.67-', 'boundary': 'boundary', 'admin_leve': 'admin_leve', 'addr_count': 'addr_count', 'ISO3166-2': 'ISO3166-2', });
lyr_place_city_Perm_Krai_7.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'place': 'place', 'ford': 'ford', 'oktmo_user': 'oktmo_user', 'loc_name': 'loc_name', 'website': 'website', 'name_ru_wo': 'name_ru_wo', 'wikipedia': 'wikipedia', 'wikimedia_': 'wikimedia_', 'wikidata': 'wikidata', 'start_date': 'start_date', 'sqkm': 'sqkm', 'source_pop': 'source_pop', 'source_nam': 'source_nam', 'population': 'population', 'populati_1': 'populati_1', 'old_name': 'old_name', 'official_s': 'official_s', 'name_zh-Ha': 'name_zh-Ha', 'name_zh-_1': 'name_zh-_1', 'name_zh': 'name_zh', 'name_xmf': 'name_xmf', 'name_wuu': 'name_wuu', 'name_wo': 'name_wo', 'name_war': 'name_war', 'name_vo': 'name_vo', 'name_vi': 'name_vi', 'name_vep': 'name_vep', 'name_uz': 'name_uz', 'name_ur': 'name_ur', 'name_uk': 'name_uk', 'name_udm': 'name_udm', 'name_tw': 'name_tw', 'name_tum': 'name_tum', 'name_tt': 'name_tt', 'name_tr': 'name_tr', 'name_tly': 'name_tly', 'name_tl': 'name_tl', 'name_tk': 'name_tk', 'name_th': 'name_th', 'name_tg': 'name_tg', 'name_ta': 'name_ta', 'name_sw': 'name_sw', 'name_sv': 'name_sv', 'name_sr-La': 'name_sr-La', 'name_sr': 'name_sr', 'name_sl': 'name_sl', 'name_sk': 'name_sk', 'name_sh': 'name_sh', 'name_sco': 'name_sco', 'name_scn': 'name_scn', 'name_ru': 'name_ru', 'name_ro': 'name_ro', 'name_pt': 'name_pt', 'name_ps': 'name_ps', 'name_pnb': 'name_pnb', 'name_pms': 'name_pms', 'name_pl': 'name_pl', 'name_os': 'name_os', 'name_oc': 'name_oc', 'name_no': 'name_no', 'name_nn': 'name_nn', 'name_nl': 'name_nl', 'name_nb': 'name_nb', 'name_myv': 'name_myv', 'name_ms': 'name_ms', 'name_mr': 'name_mr', 'name_mn': 'name_mn', 'name_mk': 'name_mk', 'name_min': 'name_min', 'name_mhr': 'name_mhr', 'name_lv': 'name_lv', 'name_lt': 'name_lt', 'name_lmo': 'name_lmo', 'name_lld': 'name_lld', 'name_li': 'name_li', 'name_lez': 'name_lez', 'name_lb': 'name_lb', 'name_la': 'name_la', 'name_ky': 'name_ky', 'name_kv': 'name_kv', 'name_ku': 'name_ku', 'name_koi': 'name_koi', 'name_ko': 'name_ko', 'name_kn': 'name_kn', 'name_ka': 'name_ka', 'name_ja': 'name_ja', 'name_it': 'name_it', 'name_is': 'name_is', 'name_io': 'name_io', 'name_ie': 'name_ie', 'name_id': 'name_id', 'name_ia': 'name_ia', 'name_hyw': 'name_hyw', 'name_hy': 'name_hy', 'name_hu': 'name_hu', 'name_hsb': 'name_hsb', 'name_hr': 'name_hr', 'name_hi': 'name_hi', 'name_he': 'name_he', 'name_ha': 'name_ha', 'name_gl': 'name_gl', 'name_ga': 'name_ga', 'name_fy': 'name_fy', 'name_frr': 'name_frr', 'name_fr': 'name_fr', 'name_fi': 'name_fi', 'name_fa': 'name_fa', 'name_eu': 'name_eu', 'name_et': 'name_et', 'name_es': 'name_es', 'name_eo': 'name_eo', 'name_en': 'name_en', 'name_el': 'name_el', 'name_de': 'name_de', 'name_da': 'name_da', 'name_cy': 'name_cy', 'name_cv': 'name_cv', 'name_cu': 'name_cu', 'name_cs': 'name_cs', 'name_crh': 'name_crh', 'name_ceb': 'name_ceb', 'name_ce': 'name_ce', 'name_ca': 'name_ca', 'name_bxr': 'name_bxr', 'name_bs': 'name_bs', 'name_br': 'name_br', 'name_bn': 'name_bn', 'name_bg': 'name_bg', 'name_be-ta': 'name_be-ta', 'name_be': 'name_be', 'name_ba': 'name_ba', 'name_azb': 'name_azb', 'name_az': 'name_az', 'name_avk': 'name_avk', 'name_ast': 'name_ast', 'name_ar': 'name_ar', 'name_am': 'name_am', 'name_alt': 'name_alt', 'name_af': 'name_af', 'name': 'name', 'image': 'image', 'flag': 'flag', 'ele': 'ele', 'contact_we': 'contact_we', 'contact_vk': 'contact_vk', 'contact_te': 'contact_te', 'contact_ph': 'contact_ph', 'contact_ok': 'contact_ok', 'contact_em': 'contact_em', 'capital': 'capital', 'admin_leve': 'admin_leve', 'addr_regio': 'addr_regio', 'addr_count': 'addr_count', });
lyr_place_towm_Perm_Krai_8.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'place': 'place', 'visibility': 'visibility', 'lit': 'lit', 'advertisin': 'advertisin', 'man_made': 'man_made', 'fire_opera': 'fire_opera', 'capacity': 'capacity', 'barrier': 'barrier', 'traffic_si': 'traffic_si', 'amenity': 'amenity', 'highway': 'highway', 'old_name_r': 'old_name_r', 'old_name_e': 'old_name_e', 'name_olo': 'name_olo', 'name_mhr': 'name_mhr', 'name_ky': 'name_ky', 'name_kk': 'name_kk', 'alt_name_e': 'alt_name_e', 'alt_name': 'alt_name', 'name_bn': 'name_bn', 'official_n': 'official_n', 'name_sk': 'name_sk', 'name_sv': 'name_sv', 'name_kv': 'name_kv', 'name_ur': 'name_ur', 'name_pa': 'name_pa', 'name_ka': 'name_ka', 'name_io': 'name_io', 'website': 'website', 'old_name': 'old_name', 'descriptio': 'descriptio', 'name_hy': 'name_hy', 'name_war': 'name_war', 'name_vep': 'name_vep', 'name_pnb': 'name_pnb', 'name_min': 'name_min', 'name_mdf': 'name_mdf', 'name_lld': 'name_lld', 'name_koi': 'name_koi', 'name_hsb': 'name_hsb', 'name_crh': 'name_crh', 'name_ceb': 'name_ceb', 'name_azb': 'name_azb', 'contact_we': 'contact_we', 'name_uk': 'name_uk', 'name_sr': 'name_sr', 'name_lv': 'name_lv', 'name_tt': 'name_tt', 'name_ru_wo': 'name_ru_wo', 'name_ro': 'name_ro', 'name_pt': 'name_pt', 'name_la': 'name_la', 'name_ko': 'name_ko', 'name_fy': 'name_fy', 'name_el': 'name_el', 'name_cv': 'name_cv', 'name_ba': 'name_ba', 'name_ce': 'name_ce', 'addr_postc': 'addr_postc', 'addr_distr': 'addr_distr', 'oktmo_user': 'oktmo_user', 'name_zh': 'name_zh', 'name_vi': 'name_vi', 'name_tr': 'name_tr', 'name_tl': 'name_tl', 'name_tg': 'name_tg', 'name_pl': 'name_pl', 'name_os': 'name_os', 'name_no': 'name_no', 'name_nn': 'name_nn', 'name_nl': 'name_nl', 'name_nb': 'name_nb', 'name_lt': 'name_lt', 'name_it': 'name_it', 'name_hu': 'name_hu', 'name_fr': 'name_fr', 'name_fi': 'name_fi', 'name_fa': 'name_fa', 'name_et': 'name_et', 'name_es': 'name_es', 'name_eo': 'name_eo', 'name_da': 'name_da', 'name_cs': 'name_cs', 'name_ca': 'name_ca', 'name_bg': 'name_bg', 'name_be': 'name_be', 'name_az': 'name_az', 'name_ar': 'name_ar', 'addr_regio': 'addr_regio', 'addr_count': 'addr_count', 'wikipedia': 'wikipedia', 'wikidata': 'wikidata', 'start_date': 'start_date', 'postal_cod': 'postal_cod', 'population': 'population', 'populati_1': 'populati_1', 'official_s': 'official_s', 'name_ru': 'name_ru', 'name_ja': 'name_ja', 'name_hr': 'name_hr', 'name_en': 'name_en', 'name_de': 'name_de', 'name': 'name', 'int_name': 'int_name', });
lyr_Perm_Krai_6.set('fieldImages', {'fid': '', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'name': 'TextEdit', 'postal_cod': '', 'place': 'TextEdit', 'official_s': '', 'name_right': '', 'name_left': '', 'addr_regio': '', 'wikipedia': 'TextEdit', 'wikimedia_': '', 'wikidata': 'TextEdit', 'type': 'TextEdit', 'timezone': 'TextEdit', 'ref': 'TextEdit', 'population': 'TextEdit', 'populati_1': '', 'oktmo_user': '', 'name_zh-Ha': '', 'name_zh-_1': '', 'name_zh': '', 'name_tt': '', 'name_tk': '', 'name_sv': '', 'name_sk': '', 'name_ru': '', 'name_ro': '', 'name_pl': '', 'name_lt': '', 'name_ja': '', 'name_hu': '', 'name_hr': '', 'name_fr': '', 'name_es': '', 'name_en': '', 'name_de': '', 'name_cs': '', 'name_ca': '', 'name_ar': '', 'int_ref': 'TextEdit', 'image': 'TextEdit', 'gost_7.67-': '', 'boundary': 'TextEdit', 'admin_leve': '', 'addr_count': '', 'ISO3166-2': 'TextEdit', });
lyr_place_city_Perm_Krai_7.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'place': 'TextEdit', 'ford': 'TextEdit', 'oktmo_user': 'TextEdit', 'loc_name': 'TextEdit', 'website': 'TextEdit', 'name_ru_wo': 'TextEdit', 'wikipedia': 'TextEdit', 'wikimedia_': 'TextEdit', 'wikidata': 'TextEdit', 'start_date': 'TextEdit', 'sqkm': 'TextEdit', 'source_pop': 'TextEdit', 'source_nam': 'TextEdit', 'population': 'TextEdit', 'populati_1': 'TextEdit', 'old_name': 'TextEdit', 'official_s': 'TextEdit', 'name_zh-Ha': 'TextEdit', 'name_zh-_1': 'TextEdit', 'name_zh': 'TextEdit', 'name_xmf': 'TextEdit', 'name_wuu': 'TextEdit', 'name_wo': 'TextEdit', 'name_war': 'TextEdit', 'name_vo': 'TextEdit', 'name_vi': 'TextEdit', 'name_vep': 'TextEdit', 'name_uz': 'TextEdit', 'name_ur': 'TextEdit', 'name_uk': 'TextEdit', 'name_udm': 'TextEdit', 'name_tw': 'TextEdit', 'name_tum': 'TextEdit', 'name_tt': 'TextEdit', 'name_tr': 'TextEdit', 'name_tly': 'TextEdit', 'name_tl': 'TextEdit', 'name_tk': 'TextEdit', 'name_th': 'TextEdit', 'name_tg': 'TextEdit', 'name_ta': 'TextEdit', 'name_sw': 'TextEdit', 'name_sv': 'TextEdit', 'name_sr-La': 'TextEdit', 'name_sr': 'TextEdit', 'name_sl': 'TextEdit', 'name_sk': 'TextEdit', 'name_sh': 'TextEdit', 'name_sco': 'TextEdit', 'name_scn': 'TextEdit', 'name_ru': 'TextEdit', 'name_ro': 'TextEdit', 'name_pt': 'TextEdit', 'name_ps': 'TextEdit', 'name_pnb': 'TextEdit', 'name_pms': 'TextEdit', 'name_pl': 'TextEdit', 'name_os': 'TextEdit', 'name_oc': 'TextEdit', 'name_no': 'TextEdit', 'name_nn': 'TextEdit', 'name_nl': 'TextEdit', 'name_nb': 'TextEdit', 'name_myv': 'TextEdit', 'name_ms': 'TextEdit', 'name_mr': 'TextEdit', 'name_mn': 'TextEdit', 'name_mk': 'TextEdit', 'name_min': 'TextEdit', 'name_mhr': 'TextEdit', 'name_lv': 'TextEdit', 'name_lt': 'TextEdit', 'name_lmo': 'TextEdit', 'name_lld': 'TextEdit', 'name_li': 'TextEdit', 'name_lez': 'TextEdit', 'name_lb': 'TextEdit', 'name_la': 'TextEdit', 'name_ky': 'TextEdit', 'name_kv': 'TextEdit', 'name_ku': 'TextEdit', 'name_koi': 'TextEdit', 'name_ko': 'TextEdit', 'name_kn': 'TextEdit', 'name_ka': 'TextEdit', 'name_ja': 'TextEdit', 'name_it': 'TextEdit', 'name_is': 'TextEdit', 'name_io': 'TextEdit', 'name_ie': 'TextEdit', 'name_id': 'TextEdit', 'name_ia': 'TextEdit', 'name_hyw': 'TextEdit', 'name_hy': 'TextEdit', 'name_hu': 'TextEdit', 'name_hsb': 'TextEdit', 'name_hr': 'TextEdit', 'name_hi': 'TextEdit', 'name_he': 'TextEdit', 'name_ha': 'TextEdit', 'name_gl': 'TextEdit', 'name_ga': 'TextEdit', 'name_fy': 'TextEdit', 'name_frr': 'TextEdit', 'name_fr': 'TextEdit', 'name_fi': 'TextEdit', 'name_fa': 'TextEdit', 'name_eu': 'TextEdit', 'name_et': 'TextEdit', 'name_es': 'TextEdit', 'name_eo': 'TextEdit', 'name_en': 'TextEdit', 'name_el': 'TextEdit', 'name_de': 'TextEdit', 'name_da': 'TextEdit', 'name_cy': 'TextEdit', 'name_cv': 'TextEdit', 'name_cu': 'TextEdit', 'name_cs': 'TextEdit', 'name_crh': 'TextEdit', 'name_ceb': 'TextEdit', 'name_ce': 'TextEdit', 'name_ca': 'TextEdit', 'name_bxr': 'TextEdit', 'name_bs': 'TextEdit', 'name_br': 'TextEdit', 'name_bn': 'TextEdit', 'name_bg': 'TextEdit', 'name_be-ta': 'TextEdit', 'name_be': 'TextEdit', 'name_ba': 'TextEdit', 'name_azb': 'TextEdit', 'name_az': 'TextEdit', 'name_avk': 'TextEdit', 'name_ast': 'TextEdit', 'name_ar': 'TextEdit', 'name_am': 'TextEdit', 'name_alt': 'TextEdit', 'name_af': 'TextEdit', 'name': 'TextEdit', 'image': 'TextEdit', 'flag': 'TextEdit', 'ele': 'TextEdit', 'contact_we': 'TextEdit', 'contact_vk': 'TextEdit', 'contact_te': 'TextEdit', 'contact_ph': 'TextEdit', 'contact_ok': 'TextEdit', 'contact_em': 'TextEdit', 'capital': 'TextEdit', 'admin_leve': 'TextEdit', 'addr_regio': 'TextEdit', 'addr_count': 'TextEdit', });
lyr_place_towm_Perm_Krai_8.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'place': 'TextEdit', 'visibility': '', 'lit': '', 'advertisin': '', 'man_made': '', 'fire_opera': '', 'capacity': '', 'barrier': '', 'traffic_si': '', 'amenity': '', 'highway': '', 'old_name_r': '', 'old_name_e': '', 'name_olo': '', 'name_mhr': 'TextEdit', 'name_ky': 'TextEdit', 'name_kk': '', 'alt_name_e': '', 'alt_name': '', 'name_bn': 'TextEdit', 'official_n': '', 'name_sk': 'TextEdit', 'name_sv': 'TextEdit', 'name_kv': 'TextEdit', 'name_ur': 'TextEdit', 'name_pa': '', 'name_ka': 'TextEdit', 'name_io': 'TextEdit', 'website': 'TextEdit', 'old_name': 'TextEdit', 'descriptio': '', 'name_hy': 'TextEdit', 'name_war': 'TextEdit', 'name_vep': 'TextEdit', 'name_pnb': 'TextEdit', 'name_min': 'TextEdit', 'name_mdf': '', 'name_lld': 'TextEdit', 'name_koi': 'TextEdit', 'name_hsb': 'TextEdit', 'name_crh': 'TextEdit', 'name_ceb': 'TextEdit', 'name_azb': 'TextEdit', 'contact_we': 'TextEdit', 'name_uk': 'TextEdit', 'name_sr': 'TextEdit', 'name_lv': 'TextEdit', 'name_tt': 'TextEdit', 'name_ru_wo': 'TextEdit', 'name_ro': 'TextEdit', 'name_pt': 'TextEdit', 'name_la': 'TextEdit', 'name_ko': 'TextEdit', 'name_fy': 'TextEdit', 'name_el': 'TextEdit', 'name_cv': 'TextEdit', 'name_ba': 'TextEdit', 'name_ce': 'TextEdit', 'addr_postc': '', 'addr_distr': '', 'oktmo_user': 'TextEdit', 'name_zh': 'TextEdit', 'name_vi': 'TextEdit', 'name_tr': 'TextEdit', 'name_tl': 'TextEdit', 'name_tg': 'TextEdit', 'name_pl': 'TextEdit', 'name_os': 'TextEdit', 'name_no': 'TextEdit', 'name_nn': 'TextEdit', 'name_nl': 'TextEdit', 'name_nb': 'TextEdit', 'name_lt': 'TextEdit', 'name_it': 'TextEdit', 'name_hu': 'TextEdit', 'name_fr': 'TextEdit', 'name_fi': 'TextEdit', 'name_fa': 'TextEdit', 'name_et': 'TextEdit', 'name_es': 'TextEdit', 'name_eo': 'TextEdit', 'name_da': 'TextEdit', 'name_cs': 'TextEdit', 'name_ca': 'TextEdit', 'name_bg': 'TextEdit', 'name_be': 'TextEdit', 'name_az': 'TextEdit', 'name_ar': 'TextEdit', 'addr_regio': 'TextEdit', 'addr_count': 'TextEdit', 'wikipedia': 'TextEdit', 'wikidata': 'TextEdit', 'start_date': 'TextEdit', 'postal_cod': '', 'population': 'TextEdit', 'populati_1': 'TextEdit', 'official_s': 'TextEdit', 'name_ru': 'TextEdit', 'name_ja': 'TextEdit', 'name_hr': 'TextEdit', 'name_en': 'TextEdit', 'name_de': 'TextEdit', 'name': 'TextEdit', 'int_name': '', });
lyr_Perm_Krai_6.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'name': 'no label', 'postal_cod': 'no label', 'place': 'no label', 'official_s': 'no label', 'name_right': 'no label', 'name_left': 'no label', 'addr_regio': 'no label', 'wikipedia': 'no label', 'wikimedia_': 'no label', 'wikidata': 'no label', 'type': 'no label', 'timezone': 'no label', 'ref': 'no label', 'population': 'no label', 'populati_1': 'no label', 'oktmo_user': 'no label', 'name_zh-Ha': 'no label', 'name_zh-_1': 'no label', 'name_zh': 'no label', 'name_tt': 'no label', 'name_tk': 'no label', 'name_sv': 'no label', 'name_sk': 'no label', 'name_ru': 'no label', 'name_ro': 'no label', 'name_pl': 'no label', 'name_lt': 'no label', 'name_ja': 'no label', 'name_hu': 'no label', 'name_hr': 'no label', 'name_fr': 'no label', 'name_es': 'no label', 'name_en': 'no label', 'name_de': 'no label', 'name_cs': 'no label', 'name_ca': 'no label', 'name_ar': 'no label', 'int_ref': 'no label', 'image': 'no label', 'gost_7.67-': 'no label', 'boundary': 'no label', 'admin_leve': 'no label', 'addr_count': 'no label', 'ISO3166-2': 'no label', });
lyr_place_city_Perm_Krai_7.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'place': 'no label', 'ford': 'no label', 'oktmo_user': 'no label', 'loc_name': 'no label', 'website': 'no label', 'name_ru_wo': 'no label', 'wikipedia': 'no label', 'wikimedia_': 'no label', 'wikidata': 'no label', 'start_date': 'no label', 'sqkm': 'no label', 'source_pop': 'no label', 'source_nam': 'no label', 'population': 'no label', 'populati_1': 'no label', 'old_name': 'no label', 'official_s': 'no label', 'name_zh-Ha': 'no label', 'name_zh-_1': 'no label', 'name_zh': 'no label', 'name_xmf': 'no label', 'name_wuu': 'no label', 'name_wo': 'no label', 'name_war': 'no label', 'name_vo': 'no label', 'name_vi': 'no label', 'name_vep': 'no label', 'name_uz': 'no label', 'name_ur': 'no label', 'name_uk': 'no label', 'name_udm': 'no label', 'name_tw': 'no label', 'name_tum': 'no label', 'name_tt': 'no label', 'name_tr': 'no label', 'name_tly': 'no label', 'name_tl': 'no label', 'name_tk': 'no label', 'name_th': 'no label', 'name_tg': 'no label', 'name_ta': 'no label', 'name_sw': 'no label', 'name_sv': 'no label', 'name_sr-La': 'no label', 'name_sr': 'no label', 'name_sl': 'no label', 'name_sk': 'no label', 'name_sh': 'no label', 'name_sco': 'no label', 'name_scn': 'no label', 'name_ru': 'no label', 'name_ro': 'no label', 'name_pt': 'no label', 'name_ps': 'no label', 'name_pnb': 'no label', 'name_pms': 'no label', 'name_pl': 'no label', 'name_os': 'no label', 'name_oc': 'no label', 'name_no': 'no label', 'name_nn': 'no label', 'name_nl': 'no label', 'name_nb': 'no label', 'name_myv': 'no label', 'name_ms': 'no label', 'name_mr': 'no label', 'name_mn': 'no label', 'name_mk': 'no label', 'name_min': 'no label', 'name_mhr': 'no label', 'name_lv': 'no label', 'name_lt': 'no label', 'name_lmo': 'no label', 'name_lld': 'no label', 'name_li': 'no label', 'name_lez': 'no label', 'name_lb': 'no label', 'name_la': 'no label', 'name_ky': 'no label', 'name_kv': 'no label', 'name_ku': 'no label', 'name_koi': 'no label', 'name_ko': 'no label', 'name_kn': 'no label', 'name_ka': 'no label', 'name_ja': 'no label', 'name_it': 'no label', 'name_is': 'no label', 'name_io': 'no label', 'name_ie': 'no label', 'name_id': 'no label', 'name_ia': 'no label', 'name_hyw': 'no label', 'name_hy': 'no label', 'name_hu': 'no label', 'name_hsb': 'no label', 'name_hr': 'no label', 'name_hi': 'no label', 'name_he': 'no label', 'name_ha': 'no label', 'name_gl': 'no label', 'name_ga': 'no label', 'name_fy': 'no label', 'name_frr': 'no label', 'name_fr': 'no label', 'name_fi': 'no label', 'name_fa': 'no label', 'name_eu': 'no label', 'name_et': 'no label', 'name_es': 'no label', 'name_eo': 'no label', 'name_en': 'no label', 'name_el': 'no label', 'name_de': 'no label', 'name_da': 'no label', 'name_cy': 'no label', 'name_cv': 'no label', 'name_cu': 'no label', 'name_cs': 'no label', 'name_crh': 'no label', 'name_ceb': 'no label', 'name_ce': 'no label', 'name_ca': 'no label', 'name_bxr': 'no label', 'name_bs': 'no label', 'name_br': 'no label', 'name_bn': 'no label', 'name_bg': 'no label', 'name_be-ta': 'no label', 'name_be': 'no label', 'name_ba': 'no label', 'name_azb': 'no label', 'name_az': 'no label', 'name_avk': 'no label', 'name_ast': 'no label', 'name_ar': 'no label', 'name_am': 'no label', 'name_alt': 'no label', 'name_af': 'no label', 'name': 'no label', 'image': 'no label', 'flag': 'no label', 'ele': 'no label', 'contact_we': 'no label', 'contact_vk': 'no label', 'contact_te': 'no label', 'contact_ph': 'no label', 'contact_ok': 'no label', 'contact_em': 'no label', 'capital': 'no label', 'admin_leve': 'no label', 'addr_regio': 'no label', 'addr_count': 'no label', });
lyr_place_towm_Perm_Krai_8.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'place': 'no label', 'visibility': 'no label', 'lit': 'no label', 'advertisin': 'no label', 'man_made': 'no label', 'fire_opera': 'no label', 'capacity': 'no label', 'barrier': 'no label', 'traffic_si': 'no label', 'amenity': 'no label', 'highway': 'no label', 'old_name_r': 'no label', 'old_name_e': 'no label', 'name_olo': 'no label', 'name_mhr': 'no label', 'name_ky': 'no label', 'name_kk': 'no label', 'alt_name_e': 'no label', 'alt_name': 'no label', 'name_bn': 'no label', 'official_n': 'no label', 'name_sk': 'no label', 'name_sv': 'no label', 'name_kv': 'no label', 'name_ur': 'no label', 'name_pa': 'no label', 'name_ka': 'no label', 'name_io': 'no label', 'website': 'no label', 'old_name': 'no label', 'descriptio': 'no label', 'name_hy': 'no label', 'name_war': 'no label', 'name_vep': 'no label', 'name_pnb': 'no label', 'name_min': 'no label', 'name_mdf': 'no label', 'name_lld': 'no label', 'name_koi': 'no label', 'name_hsb': 'no label', 'name_crh': 'no label', 'name_ceb': 'no label', 'name_azb': 'no label', 'contact_we': 'no label', 'name_uk': 'no label', 'name_sr': 'no label', 'name_lv': 'no label', 'name_tt': 'no label', 'name_ru_wo': 'no label', 'name_ro': 'no label', 'name_pt': 'no label', 'name_la': 'no label', 'name_ko': 'no label', 'name_fy': 'no label', 'name_el': 'no label', 'name_cv': 'no label', 'name_ba': 'no label', 'name_ce': 'no label', 'addr_postc': 'no label', 'addr_distr': 'no label', 'oktmo_user': 'no label', 'name_zh': 'no label', 'name_vi': 'no label', 'name_tr': 'no label', 'name_tl': 'no label', 'name_tg': 'no label', 'name_pl': 'no label', 'name_os': 'no label', 'name_no': 'no label', 'name_nn': 'no label', 'name_nl': 'no label', 'name_nb': 'no label', 'name_lt': 'no label', 'name_it': 'no label', 'name_hu': 'no label', 'name_fr': 'no label', 'name_fi': 'no label', 'name_fa': 'no label', 'name_et': 'no label', 'name_es': 'no label', 'name_eo': 'no label', 'name_da': 'no label', 'name_cs': 'no label', 'name_ca': 'no label', 'name_bg': 'no label', 'name_be': 'no label', 'name_az': 'no label', 'name_ar': 'no label', 'addr_regio': 'no label', 'addr_count': 'no label', 'wikipedia': 'no label', 'wikidata': 'no label', 'start_date': 'no label', 'postal_cod': 'no label', 'population': 'no label', 'populati_1': 'no label', 'official_s': 'no label', 'name_ru': 'no label', 'name_ja': 'no label', 'name_hr': 'no label', 'name_en': 'no label', 'name_de': 'no label', 'name': 'no label', 'int_name': 'no label', });
lyr_place_towm_Perm_Krai_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});