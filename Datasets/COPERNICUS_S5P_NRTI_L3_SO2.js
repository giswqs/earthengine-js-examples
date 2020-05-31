var collection = ee.ImageCollection('COPERNICUS/S5P/NRTI/L3_O3')
  .select('SO2_column_number_density')
  .filterDate('2018-10-01', '2018-12-01');

var val_min = 0.0;
var val_max = 0.0005;
var band_viz = {
  min: val_min,
  max: val_max,
  opacity: 1.0,
  palette: ["black", "blue", "purple", "cyan", "green", "yellow", "red"]
};

Map.addLayer(collection.mean(), band_viz, 'so2');
Map.setCenter(0.0, 0.0, 2);
