var dataset = ee.ImageCollection('MODIS/051/MOD44B')
                  .filter(ee.Filter.date('2014-01-01', '2014-05-01'));
var percentTreeCover = dataset.select('Percent_Tree_Cover');
var percentTreeCoverVis = {
  min: 0.0,
  max: 100.0,
  palette: ['bbe029', '0a9501', '074b03'],
};
Map.setCenter(6.746, 46.529, 2);
Map.addLayer(percentTreeCover, percentTreeCoverVis, 'Percent Tree Cover');
