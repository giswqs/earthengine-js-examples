var dataset = ee.ImageCollection('AAFC/ACI');
var crop2017 = dataset
    .filter(ee.Filter.date('2017-01-01', '2017-12-31'))
    .first();
Map.setCenter(-103.8881, 53.0371, 10);
Map.addLayer(crop2017);
