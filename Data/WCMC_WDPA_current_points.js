var dataset = ee.FeatureCollection('WCMC/WDPA/current/points');
var styleParams = {
  color: '#4285F4',
  width: 1,
};
var protectedAreaPoints = dataset.style(styleParams);
Map.setCenter(110.57, 0.88, 4);
Map.addLayer(protectedAreaPoints, {}, 'WCMC/WDPA/current/points');