var dataset = ee.ImageCollection('USGS/NLCD');
var landcover = dataset.select('landcover');
var landcoverVis = {
  min: 11.0,
  max: 95.0,
  palette: [
    '5475A8', 'ffffff', 'E8D1D1', 'E29E8C', 'ff0000', 'B50000', 'D2CDC0',
    '85C77E', '38814E', 'D4E7B0', 'AF963C', 'DCCA8F', 'FDE9AA', 'D1D182',
    'A3CC51', '82BA9E', 'FBF65D', 'CA9146', 'C8E6F8', '64B3D5'
  ],
};
Map.setCenter(-115.356, 38.686, 5);
Map.addLayer(landcover, landcoverVis, 'Landcover');