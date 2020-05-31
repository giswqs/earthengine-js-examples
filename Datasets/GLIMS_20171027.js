var dataset = ee.FeatureCollection('GLIMS/20171027');
var visParams = {
  palette: ['gray', 'cyan', 'blue'],
  min: 0.0,
  max: 10.0,
  opacity: 0.8,
};
var image = dataset.reduceToImage(['area'], ee.Reducer.first());
Map.setCenter(-35.618, 66.743, 7);
Map.addLayer(image, visParams, 'GLIMS/20171027');
