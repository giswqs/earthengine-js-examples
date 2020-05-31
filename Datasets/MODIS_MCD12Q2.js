var dataset = ee.ImageCollection('MODIS/MCD12Q2')
                  .filter(ee.Filter.date('2014-01-01', '2014-05-01'));
var vegetationMaturity2014 = dataset.select('Onset_Greenness_Maximum1');
var vegetationMaturity2014Vis = {
  min: 0.0,
  max: 32766.0,
  palette: ['0f17ff', 'b11406', 'f1ff23'],
};
Map.setCenter(6.746, 46.529, 2);
Map.addLayer(
    vegetationMaturity2014, vegetationMaturity2014Vis,
    'Vegetation Maturity 2014');
