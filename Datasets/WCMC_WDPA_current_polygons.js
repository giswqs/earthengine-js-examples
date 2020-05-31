var dataset = ee.FeatureCollection('WCMC/WDPA/current/polygons');
var visParams = {
  palette: ['2ed033', '5aff05', '67b9ff', '5844ff', '0a7618', '2c05ff'],
  min: 0.0,
  max: 1550000.0,
  opacity: 0.8,
};
var image = dataset.reduceToImage(['REP_AREA'], ee.Reducer.first());
Map.setCenter(41.104, -17.724, 6);
Map.addLayer(image, visParams, 'WCMC/WDPA/current/polygons');
