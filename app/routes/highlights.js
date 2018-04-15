var express = require('express');
var router = express.Router();

router.get('/highlights', function(req, res) {
  var dataFile = req.app.get('appData');
  var pagePhotos = [];
  var pageHighlights = dataFile.data.highlights;

  dataFile.data.highlights.forEach(function(item) {
    pagePhotos = pagePhotos.concat(item.image);
  });

  res.render('highlights', {
    pageTitle: 'Highlights',
    artwork: pagePhotos,
    highlights: pageHighlights,
    pageID: 'highlightList'
  });
});

router.get('/highlights/:highlightsid', function(req, res) {
  var dataFile = req.app.get('appData');
  var pagePhotos = [];
  var pageHighlights = [];

  dataFile.data.highlights.forEach(function(item) {
    if (item.id == req.params.highlightsid) {
      pageHighlights.push(item);
      pagePhotos = pagePhotos.concat(item.image);
    }
  });

  res.render('highlights', {
    pageTitle: 'Highlights Info',
    artwork: pagePhotos,
    highlights: pageHighlights,
    pageID: 'highlightDetail'
  });
});

module.exports = router;
