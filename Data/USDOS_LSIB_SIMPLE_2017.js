var dataset = ee.FeatureCollection('USDOS/LSIB_SIMPLE/2017');
var styleParams = {
  fillColor: 'b5ffb4',
  color: '00909F',
  width: 3.0,
};
var countries = dataset.style(styleParams);
Map.addLayer(countries, {}, 'USDOS/LSIB_SIMPLE/2017');