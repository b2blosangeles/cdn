//(function(pkg, res) {
	pkg.db.git_log.find({}, { multi: true }).sort({ time: -1 }).exec(function (err, docs) {
		if (!err) {
			res.send(env)
		} else {
			res.send(err)
		}
		
	});
//})(pkg, res);
