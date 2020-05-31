var dataset = ee.FeatureCollection('USGS/WBD/2017/HUC04');
var styleParams = {
  fillColor: '5885E3',
  color: '0000be',
  width: 3.0,
};
var subregions = dataset.style(styleParams);
Map.setCenter(-110.904, 36.677, 7);
Map.addLayer(subregions, {}, 'USGS/WBD/2017/HUC04');
