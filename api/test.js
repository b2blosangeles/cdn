var Busboy = require(env.root_path + '/package/busboy/node_modules/busboy');
var socket_id = '/#' + req.param('socket_id');
var fs = require('fs');
var busboy = new Busboy({ headers: req.headers });

busboy.on('file', function(fieldname, file, filename, encoding, mimetype) {

      file.pipe(fs.createWriteStream(env.space_path+'/videos/'+fieldname));
      file.on('data', function(data) {
          io.to(socket_id).emit('message', {code:'progress', bytes:data.length});
      });
      
      file.on('end', function() {
            io.to(socket_id).emit('message', 'done!!');
            res.send('Done!');
      });
    });

busboy.on('finish', function() {
       io.to(socket_id).emit('message', 'done--!!');
      res.send('Done!');
});
return req.pipe(busboy);

