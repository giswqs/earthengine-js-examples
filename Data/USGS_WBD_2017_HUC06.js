var dataset = ee.FeatureCollection('USGS/WBD/2017/HUC06');
var styleParams = {
  fillColor: '588593',
  color: '587193',
  width: 3.0,
};
var basins = dataset.style(styleParams);
Map.setCenter(-96.8, 40.43, 7);
Map.addLayer(basins, {}, 'USGS/WBD/2017/HUC06');
