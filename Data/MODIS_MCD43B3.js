var dataset = ee.ImageCollection('MODIS/MCD43B3')
                  .filter(ee.Filter.date('2014-01-01', '2014-05-01'));
var blackSkyAlbedo = dataset.select('Albedo_BSA_Band1');
var blackSkyAlbedoVis = {
  min: 0.0,
  max: 400.0,
};
Map.setCenter(6.746, 46.529, 6);
Map.addLayer(blackSkyAlbedo, blackSkyAlbedoVis, 'Black-Sky Albedo');
