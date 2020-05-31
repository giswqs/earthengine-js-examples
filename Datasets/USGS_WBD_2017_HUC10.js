var dataset = ee.FeatureCollection('USGS/WBD/2017/HUC10');
var styleParams = {
  fillColor: '2E85BB',
  color: '2E5D7E',
  width: 1.0,
};
var watersheds = dataset.style(styleParams);
Map.setCenter(-96.8, 40.43, 9);
Map.addLayer(watersheds, {}, 'USGS/WBD/2017/HUC10');
