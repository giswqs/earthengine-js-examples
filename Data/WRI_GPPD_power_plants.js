var dataset = ee.FeatureCollection('WRI/GPPD/power_plants');
var styleParams = {
  color: '#4285F4',
  width: 1,
};
var power_plants = dataset.style(styleParams);
Map.setCenter(25.73, -7.61, 2);
Map.addLayer(power_plants, {}, 'WRI/GPPD/power_plants');
