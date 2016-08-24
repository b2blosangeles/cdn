(function(pkg, res) {
	pkg.db.git_log.find({}).sort({ created: -1 }).exec(function (err, docs) {
		if (!err) {
			res.send(docs)
		} else {
			res.send(err)
		}
		
	});
})(pkg, res);
