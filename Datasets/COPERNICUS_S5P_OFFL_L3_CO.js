var collection = ee.ImageCollection("COPERNICUS/S5P/OFFL/L3_CO")
  .select('CO_column_number_density')
  .filterDate('2018-10-15', '2018-10-20');

var val_max = 0.05;
var val_min = 0;
var band_viz = {
  min: val_min,
  max: val_max,
  opacity: 1.0,
  palette: ["black", "blue", "purple", "cyan", "green", "yellow", "red"]
};

Map.addLayer(collection.mean(), band_viz, 's5p');
Map.setCenter(-25.01, -4.28, 4);

