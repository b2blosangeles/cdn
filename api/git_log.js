//(function(pkg, res) {
var git_log =  new pkg.Nedb({ filename: env.root_path + '_db/git_log.db', autoload: true });
	git_log.find({}, { multi: true }).sort({ time: -1 }).exec(function (err, docs) {
		if (!err) {
			res.send(docs)
		} else {
			res.send(err)
		}
		
	});
//})(pkg, res);
