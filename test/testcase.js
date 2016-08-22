

var Mocha = require(path.join(__dirname, '../../', 'package/mocha/node_modules/mocha'));

var mocha = new Mocha;
mocha.addFile((env.space_path)+'/tt.js');
mocha.reporter('json');

var write = process.stdout.write;
var output = '';
process.stdout.write = function(str) {
  output += str;
};

mocha.run(function(failures) {
  process.stdout.write = write;
  res.send(JSON.parse(output))
});

