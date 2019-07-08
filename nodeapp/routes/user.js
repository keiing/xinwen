const express = require('express');
const pool = require('../pool.js')
//创建路由器对象
var router = express.Router();
//添加路由
//可以选择在html里面进行判断是否为空
router.get('/userlist', function (req, res) {
	var obj = req.query;
	pno = obj.pno;
	count = obj.count;
	pno = parseInt(pno);
	count = parseInt(count);
	if (!pno) {
		pno = 1;
	}
	if (!count) {
		count = 5;
	}
	//计算每页的开始
	var start = (pno - 1) * count;
	//执行SQL语句，查询分页数据
	pool.query('SELECT * FROM xw_user LIMIT ?,?', [start, count], (err, result) => {
		if (err) throw err;
		res.send(result);
	})
});
//删除该用户
router.get('/delete', function (req, res) {
	if (!req.query.uid) {
		res.send("uid不存在");
	}
	pool.query('delete FROM xw_user where uid=?', [req.query.uid], function (err, result) {
		if (err) throw err;
		if (result.affectedRows > 0) {
			//返回值为1删除成功
			res.send('1');
		} else {
			res.send('0');
		}
	})
});
//需要一个返回结果
router.get('/select', function (req, res) {
	pool.query('select * from xw_user where uid=?', [req.query.uid], function (err, result) {
		if (err) throw err;
		res.send(result);
	})
})
//修改该用户信息
router.post('/update', function (req, res) {
	var obj = req.body
	if (!obj.uname) {
		res.send('用户名不能为空');
		return;
	}
	if (!obj.upwd) {
		res.send('密码不能为空');
		return;
	}
	if (!obj.email) {
		res.send('邮箱不能为空');
		return;
	}
	if (!obj.phone) {
		res.send('手机不能为空');
		return;
	}
	pool.query('update xw_user set uname=?,upwd=?,email=?,phone=?,avatar=?,user_name=?,gender=? where uid=?',
		[obj.uname, obj.upwd, obj.email, obj.phone, obj.avatar, obj.user_name, obj.gender, obj.uid],
		function (err, result) {
			if (err) throw err;
			res.send('alert("修改成功");location.href="http://localhost:8080/userlist.html";');

		})
})
//验证是否存在该用户名.
router.get('/zhuceyan', function (req, res) {
	if (!req.query.uname) {
		res.send('用户名不能为空');
		return;
	}
	pool.query('select * from xw_user where uname=?', [req.query.uname], function (err, result) {
		if (err) throw err;
		if (result.length > 0) {
			res.send('该用户名已存在');
		} else {
			res.send('可以使用');
		}
	})
})
//验证是否存在该手机好
router.get('/shouji', function (req, res) {
	var obj = req.query.phone;
	if (!obj) {
		return;
	}
	pool.query('select * from xw_user where phone=?', [obj], function (err, result) {
		if (err) throw err;
		if (result.length > 0) {
			res.send('该手机号已经存在')
		} else {
			res.send('可以使用')
		}
	})
})
router.post('/zhuce', function (req, res) {
	var obj = req.body;
	if (!obj.uname) {
		return;
	}
	if (!obj.upwd) {
		return;
	}
	if (!obj.email) {
		return;
	}
	if (!obj.phone) {
		return;
	}
	pool.query('insert into xw_user set uname=?,upwd=?,email=?,phone=?', [obj.uname, obj.upwd, obj.email, obj.phone], function (err, result) {
		if (err) throw err;
		if (result.affectedRows > 0) {
			res.send('1');
		} else {
			res.send('0');
		}
	})
})

//导出路由
module.exports = router;