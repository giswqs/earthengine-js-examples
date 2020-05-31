var dataset = ee.FeatureCollection('GLIMS/2016');
var visParams = {
  palette: ['gray', 'cyan', 'blue'],
  min: 0.0,
  max: 10.0,
  opacity: 0.8,
};
var image = dataset.reduceToImage(['area'], ee.Reducer.first());
Map.setCenter(-26.763, 73.214, 6);
Map.addLayer(image, visParams, 'GLIMS/2016');
