var dataset = ee.FeatureCollection('TIGER/2016/Counties');
var visParams = {
  palette: ['purple', 'blue', 'green', 'yellow', 'orange', 'red'],
  min: 9000000000.0,
  max: 50000000000.0,
  opacity: 0.8,
};
var image = dataset.reduceToImage(['ALAND'], ee.Reducer.first());
Map.setCenter(-99.844, 37.649, 5);
Map.addLayer(image, visParams, 'TIGER/2016/Counties');
