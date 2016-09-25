var Busboy = require(env.root_path + '/package/busboy/node_modules/busboy');
var socket_id = '/#' + req.param('socket_id');
var fs = require(fs);
var busboy = new Busboy({ headers: req.headers });
res.send(env);
return ture;
busboy.on('file', function(fieldname, file, filename, encoding, mimetype) {

      // file.pipe(fs.createWriteStream('niuC.mp4'));

      file.on('data', function(data) {
          //io.to(socket_id).emit('messages', 'File [' + fieldname + '] got ' + data.length + ' bytes');
          io.to(socket_id).emit('message', {code:'progress', bytes:data.length});
      });
      file.on('end', function() {
        res.send('File [' + fieldname + '] Finished');
      });
    });
    /*
    busboy.on('field', function(fieldname, val, fieldnameTruncated, valTruncated, encoding, mimetype) {
      console.log('Field [' + fieldname + ']: value: ' + inspect(val));
    });
*/
    busboy.on('finish', function() {
    //  console.log('Done parsing form!');
     // res.writeHead(200, { Connection: 'close', Location: '/' });
      res.end();
    });
    return req.pipe(busboy);

//io.to(socket_id).emit('message', {code:'progress', n:socket_id});
//res.send(socket_id);
