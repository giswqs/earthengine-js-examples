var dataset = ee.ImageCollection('NASA/GLDAS/V001/NOAH/G025/T3H')
                  .filter(ee.Filter.date('2016-12-01', '2016-12-31'));
var averageSurfaceTemperatureK = dataset.select('AvgSurfTsfc');
var averageSurfaceTemperatureKVis = {
  min: 250.0,
  max: 300.0,
  palette: ['1303ff', '42fff6', 'f3ff40', 'ff5d0f'],
};
Map.setCenter(71.72, 52.48, 0);
Map.addLayer(
    averageSurfaceTemperatureK, averageSurfaceTemperatureKVis,
    'Average Surface Temperature [K]');
