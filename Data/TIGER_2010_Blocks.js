var dataset = ee.FeatureCollection('TIGER/2010/Blocks');
var visParams = {
  min: 0.0,
  max: 19352.0,
  opacity: 0.8,
};
var image = dataset.reduceToImage(['pop10'], ee.Reducer.first());
Map.setCenter(-73.99172, 40.74101, 13);
Map.addLayer(image, visParams, 'TIGER/2010/Blocks');
