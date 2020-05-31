var dataset = ee.FeatureCollection('USGS/WBD/2017/HUC08');
var styleParams = {
  fillColor: '2E8593',
  color: '587193',
  width: 2.0,
};
var subbasins = dataset.style(styleParams);
Map.setCenter(-96.8, 40.43, 8);
Map.addLayer(subbasins, {}, 'USGS/WBD/2017/HUC08');
