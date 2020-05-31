var dataset = ee.ImageCollection('OSU/GIMP/ICE_VELOCITY_OPT')
                  .filter(ee.Filter.date('2016-01-01', '2016-09-15'));
var iceVelocityVis = {
  min: [0.0, 0.0, 0.0],
  max: [-1000.0, 0.0, 1000.0],
  bands: ['velocity_x', 'velocity_x', 'velocity_x'],
};
Map.setCenter(-66.82, 76.151, 7);
Map.addLayer(dataset, iceVelocityVis, 'Ice Velocity');
