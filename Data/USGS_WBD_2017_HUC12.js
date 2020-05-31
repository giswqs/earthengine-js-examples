var dataset = ee.FeatureCollection('USGS/WBD/2017/HUC12');
var styleParams = {
  fillColor: '2E85BB',
  color: '2E5D7E',
  width: 0.1,
};
var subwatersheds = dataset.style(styleParams);
Map.setCenter(-96.8, 40.43, 10);
Map.addLayer(subwatersheds, {}, 'USGS/WBD/2017/HUC12');
