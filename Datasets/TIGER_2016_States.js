var dataset = ee.FeatureCollection('TIGER/2016/States');
var visParams = {
  palette: ['purple', 'blue', 'green', 'yellow', 'orange', 'red'],
  min: 500000000.0,
  max: 5e+11,
  opacity: 0.8,
};
var image = dataset.reduceToImage(['ALAND'], ee.Reducer.first());
Map.setCenter(-99.844, 37.649, 5);
Map.addLayer(image, visParams, 'TIGER/2016/States');
