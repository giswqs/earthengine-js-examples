// Visualization for Sentinel 5P NO2 concentrations

var collection = ee.ImageCollection('COPERNICUS/S5P/NRTI/L3_NO2')
  .select('NO2_column_number_density')
  .filterDate('2018-10-10', '2018-10-13');

var val_max = 0.0002;
var val_min = 0;
var band_viz = {
  min: val_min,
  max: val_max,
  opacity: 1.0,
  palette: ["black", "blue", "purple", "cyan", "green", "yellow", "red"]
};

Map.addLayer(collection.mean(), band_viz, 'no2');
Map.setCenter(65.27, 24.11, 4);
