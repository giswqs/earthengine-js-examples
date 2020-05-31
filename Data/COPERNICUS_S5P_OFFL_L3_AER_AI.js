var collection = ee.ImageCollection('COPERNICUS/S5P/OFFL/L3_AER_AI')
  .select('absorbing_aerosol_index')
  .filterDate('2018-10-15', '2018-10-20');

var val_max = 2.0;
var val_min = -1;

var band_viz = {
  min: val_min,
  max: val_max,
  opacity: 1.0,
  palette: ["black", "blue", "purple", "cyan", "green", "yellow", "red"]
};

Map.addLayer(collection.mean(), band_viz, 's5p');
Map.setCenter(17.06, 23.1, 4);
