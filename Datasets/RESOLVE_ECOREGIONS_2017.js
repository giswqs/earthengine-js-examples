var dataset = ee.FeatureCollection('RESOLVE/ECOREGIONS/2017');
var visParams = {
  palette: [
    '0080D4', ' D88000', ' 7A32C1', ' A2007F', ' ffc0e8', ' f5ff64', ' b5ffb4',
    ' beeaff', ' ffc0e8', ' 8e8dff', ' A2FF7F', ' 36807F', ' E5E8E6', ' cyan',
    ' blue', ' orange', ' yellow', ' gray'
  ],
  min: 0.0,
  max: 500.0,
  opacity: 0.8,
};
var image = dataset.reduceToImage(['SHAPE_AREA'], ee.Reducer.first());
Map.setCenter(35.11, 4.518, 5);
Map.addLayer(image, visParams, 'RESOLVE/ECOREGIONS/2017');
