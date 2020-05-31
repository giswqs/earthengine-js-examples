var dataset = ee.ImageCollection('MODIS/051/MCD12Q1')
                  .filter(ee.Filter.date('2013-01-01', '2013-05-01'));
var igbpLandCover = dataset.select('Land_Cover_Type_1');
var igbpLandCoverVis = {
  min: 0.0,
  max: 16.0,
  palette: [
    '1c0dff', '05450a', '086a10', '54a708', '78d203', '009900', 'c6b044',
    'dcd159', 'dade48', 'fbff13', 'b6ff05', '27ff87', 'c24f44', 'a5a5a5',
    'ff6d4c', '69fff8', 'f9ffa4'
  ],
};
Map.setCenter(6.746, 46.529, 2);
Map.addLayer(igbpLandCover, igbpLandCoverVis, 'IGBP Land Cover');
