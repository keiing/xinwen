const express = require('express');
const pool = require('../pool.js');
var router = express.Router();
router.post('/xinwen', function (req, res) {
	var obj = req.body;

	if (!obj.title) {
		return;
	}

	if (!obj.category) {
		return;
	}

	if (!obj.Release_time) {
		return;
	}
	pool.query('insert into xw_journalism set title=?,Author=?,Souce=?,Tags=?,subtitle=?,category=?,details=?,Release_time=?,SEOTags=?', [obj.title, obj.Author, obj.Souce, obj.Tags, obj.subtitle, obj.category, obj.details, obj.Release_time, obj.SEOTags], function (err, result) {
		if (err) throw err;
		if (result.affectedRows > 0) {
			res.send("1");
		} else {
			res.send("0");
		}
	})
})

router.get('/select', function (req, res) {
	pool.query('select*from xw_journalism', function (err, result) {
		if (err) throw err;
		res.send(result);
	})
})
router.get('/delete', function (req, res) {
	pool.query('delete from xw_journalism where lid=?', [req.query.lid], function (err, result) {
		if (err) throw err;
		if (result.affectedRows > 0) {
			res.send('1');
		} else {
			res.send('0');
		}
	})
})

router.get('/selecti', function (req, res) {
	pool.query('select*from xw_journalism where lid=?', [req.query.lid], function (err, result) {
		if (err) throw err;
		res.send(result);
	})
})

router.post('/update', function (req, res) {
	var obj = req.body;
	if (!obj.title) {
		return;
	}
	if (!obj.category) {
		return;
	}
	if (!obj.Release_time) {
		return;
	}
	pool.query('update xw_journalism set title=?,Author=?,Souce=?,Tags=?,subtitle=?,category=?,details=?,Release_time=?,SEOTags=? where lid=?', [obj.title, obj.Author, obj.Souce, obj.Tags, obj.subtitle, obj.category, obj.details, obj.Release_time, obj.SEOTags, obj.lid], function (err, result) {
		if (err) throw err;
		if (result.affectedRows > 0) {
			res.send('1');
		} else {
			res.send('0');
		}
	})
})
module.exports = router;