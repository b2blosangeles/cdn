  var fs = require('fs');
  var socket_id = '/#' + req.param('socket_id');
  fs.readdir(env.space_path + '/videos', function(err, data) {
    var ret = [];
    for (var i=0; i < data.length; i++) {
       if (data[i].match(/\.mp4$/i)) {
        ret[ret.length] = data[i];
      }
    }
    res.send(ret);
     io.to(socket_id).emit('message', {js:function() {alert('done')}});
  });
