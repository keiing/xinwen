const express = require('express');
const pool = require('../pool.js');
var async = require("./async.js");
const lisent = {
	"Access-Control-Allow-Origin": "http://127.0.0.1:5500",
	"Content-Type": "application/json;charset=utf-8"
};
var router = express.Router();
// /*1 查看数据*/
router.get('/', function (req, res) {
	var translate = req.query.translate;
	var sql = (`select * from xw_index where translate like "%tj%" ORDER BY Release_time DESC`);
	async (sql, translate).then(result => res.send(result)).catch(err => console.log(err))
})
//获得详情页
router.get("/detail", function (req, res) {
	var pid = req.query.pid;
	var outindex = {};
	outindex.result3 = [];
	var sql = "select*from xw_index where pid=?";
	async (sql, [pid]).then(result => {
		outindex.result1 = result;
		async ("select*from xw_index_details where pid=?", [pid]).then(result => {
			outindex.result2 = result;
			// var obj = Object.assign(result[0], outindex.result1);
			// console.log(obj);
			if (result[0].xw_delcomment.length > 0) {
				return result[0].xw_delcomment
			}
		}).then((id) => {
			if (id != undefined) {
				id = id.split(",")
				id.forEach((val, i, arr) => {
					return arr[i] = `select * from xw_delcomment where xw_did=${val}`
				})
				return id;
			}
		}).then((id) => {
			if (id != undefined) {
				for (let i = 0; i < id.length; i++) {
					async (id[i]).then(result => {
						outindex.result3.push((result[0]));
					}).then(() => {
						if (i == id.length - 1) {
							res.send({
								code: 200,
								msg: "响应成功",
								data: outindex
							});
						}
					})
				}
			}
			return;
		}).catch(err => {
			console.log(err)
		});
	})
})
router.get("/selecttitle", function (req, res) {
	if (!req.query.title) {
		return;
	}
	var obj = req.query.title;
	var sql = `select * from xw_index where title like '%${obj}%'`;
	async (sql, obj).then(result => res.send(result)).catch(err => console.log(err))
})
//获得首页
router.get("/indexjs", function (req, res) {
	var index = req.query.indexvalue;
	var sql = `select * from xw_index where translate like '%${index}%' order by Release_time DESC`;
	async (sql, index).then(result => {
		res.send(result)
	}).catch(err => console.log(err))

})
module.exports = router;