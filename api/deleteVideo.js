var fn = env.space_path + '/videos/' + req.param('video_id');
var fs = require('fs');
fs.unlink(fn,function(err){
       res.send({});
   });
