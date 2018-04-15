var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  var dataFile = req.app.get('appData');//points to whole json file
  var pagePhotos = [];
  var pageHighlights = dataFile.data.highlights;//present in json
//since speaker is array so we iterate through it
  dataFile.data.highlights.forEach(function(item) {
    pagePhotos = pagePhotos.concat(item.image);
  });

  res.render('index', {
    pageTitle: 'Home',
    artwork: pagePhotos,
    highlights: pageHighlights,
    pageID: 'home'
  });

});

module.exports = router;
