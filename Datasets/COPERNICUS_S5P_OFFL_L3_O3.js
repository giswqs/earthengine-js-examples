var collection = ee.ImageCollection('COPERNICUS/S5P/OFFL/L3_O3')
  .select('O3_column_number_density')
  .filterDate('2018-10-15', '2018-10-20');

var val_max = .15;
var val_min = .12;
var band_viz = {
  min: val_min,
  max: val_max,
  opacity: 1.0,
  palette: ["black", "blue", "purple", "cyan", "green", "yellow", "red"]
};

Map.addLayer(collection.mean(), band_viz, 'ozone');
Map.setCenter(0.0, 0.0, 2);
