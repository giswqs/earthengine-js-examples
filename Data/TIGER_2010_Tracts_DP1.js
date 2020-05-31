var dataset = ee.FeatureCollection('TIGER/2010/Tracts_DP1');
var visParams = {
  min: 0,
  max: 10,
  opacity: 0.8,
};
Map.setCenter(-103.882, 43.036, 8);
var image = dataset.reduceToImage(['shape_area'], ee.Reducer.first());
Map.addLayer(image, visParams, 'TIGER/2010/Tracts_DP1');
