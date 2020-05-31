var dataset = ee.ImageCollection('NASA/GPM_L3/IMERG_V05')
                  .filter(ee.Filter.date('2017-08-05', '2017-08-06'));
var precipitation = dataset.select('precipitationCal');
var precipitationVis = {
  min: 1.0,
  max: 9.0,
};
Map.setCenter(-90.7, 26.12, 2);
Map.addLayer(precipitation, precipitationVis, 'Precipitation');
