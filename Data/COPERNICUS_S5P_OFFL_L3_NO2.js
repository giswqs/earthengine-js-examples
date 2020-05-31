// Visualization for Sentinel 5P NO2 concentrations

var collection = ee.ImageCollection('COPERNICUS/S5P/OFFL/L3_NO2')
  .select('tropospheric_NO2_column_number_density');

var no2_max = 0.0002;
var no2_viz = {
  min: 0,
  max: no2_max,
  opacity: 1.0,
  palette: ["black", "blue", "purple", "cyan", "green", "yellow", "red"]
};

Map.addLayer(collection.mean(), no2_viz, 's5p');
Map.setCenter(89.01, 26.11, 4);
