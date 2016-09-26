  var fs = require('fs');
  fs.readdir(env.space_path + '/videos', function(err, data) {
    var ret = [];
    for (var i=0; i < data.length; i++) {
       if (data[i].match(/\.mp4$/i)) {
        ret[ret.length] = data[i];
      }
    }
    res.send(ret);

  });
