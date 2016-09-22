var express = require('express');
var app = express();

var fs = require('fs'),
    util = require('util');

app.get(/video\/(.+)$/i, function (req, res) {

 // var path = 'bbb_sunflower_2160p_60fps_normal.mp4';
  
  var path = req.params[0];

  fs.stat(path, function(err, data) {
    if (err) 
      res.send('it does not exist');
    else {
      var total = data.size;
      if (req.headers['range']) {
        var range = req.headers.range;
        var parts = range.replace(/bytes=/, "").split("-");
        var partialstart = parts[0];
        var partialend = parts[1];

        var start = parseInt(partialstart, 10);
        var end = partialend ? parseInt(partialend, 10) : total-1;
        var chunksize = (end-start)+1;
        console.log('RANGE: ' + start + ' - ' + end + ' = ' + chunksize);

        var file = fs.createReadStream(path, {start: start, end: end});
        res.writeHead(206, { 'Content-Range': 'bytes ' + start + '-' + end + '/' + total, 'Accept-Ranges': 'bytes', 'Content-Length': chunksize, 'Content-Type': 'video/mp4' });
        file.pipe(res);
      } else {
        console.log('ALL: ' + total);
        res.writeHead(200, { 'Content-Length': total, 'Content-Type': 'video/mp4' });
        fs.createReadStream(path).pipe(res);
      }

    }
  });

});

app.get(/\/$/i, function (req, res) {

  fs.readdir(__dirname, function(err, data) {

    res.send(data);

  });


});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
