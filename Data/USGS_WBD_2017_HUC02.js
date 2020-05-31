var dataset = ee.FeatureCollection('USGS/WBD/2017/HUC02');
var styleParams = {
  fillColor: '000070',
  color: '0000be',
  width: 3.0,
};
var regions = dataset.style(styleParams);
Map.setCenter(-96.8, 40.43, 4);
Map.addLayer(regions, {}, 'USGS/WBD/2017/HUC02');
