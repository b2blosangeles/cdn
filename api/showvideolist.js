  var fs = require('fs');
  fs.readdir(env.space_path + '/videos', function(err, data) {

    res.send(data);

  });
