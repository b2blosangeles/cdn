var exec = require('child_process').exec;
(function(res) {
  exec('truncate /var/log/qalet_cron.log --size 0', function(error, stdout, stderr) {
    res.send('done');
  });
})(res);
