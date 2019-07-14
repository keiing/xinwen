const express = require("express");
const multiparty = require("connect-multiparty");
const fs = require("fs");
var router = express.Router();
var multipartyMiddleware = multiparty();
var async = require("./async");
//判断是否处于登录状态
router.post("/islonguser", (req, res) => {
  console.log(req.session.uid)
  if (req.session.uid) {
    res.send({
      code: 200,
    })

  } else {
    res.send({
      code: 301,
      msg: "请重新登录"
    })
  }
})
//上传头像
router.post("/userava", multipartyMiddleware, (req, res) => {
  var uid = req.session.uid
  console.log(uid);
  // console.log(req.body) //请求返回主体
  // console.log(req.files) //文件属性,包含文件的所有信息
  var path = req.files.file.path; //图片路径
  var imgPathUrl = path
    .split("\\")
    .slice(1)
    .join("/");
  // var url = "http://127.0.0.1:3000/" + imgPathUrl;
  var url = imgPathUrl;
  // //可以不写
  fs.readFile("public\\" + imgPathUrl, (err, dataBuffer) => {
    if (err) throw err;
    //   //在写到文件制定路径
    fs.writeFile("../public/user", dataBuffer, function (err) {
      if (err) res.send(err);
      else res.send({
        code: 200,
        msg: "上传成功",
        data: imgPathUrl
      });
      var sql = "update xw_user set xw_img=? WHERE xw_uid=?";
      console.log(url)
      async (sql, [url, uid]);
    });
  });

});
//注销
router.post("/loginout", (req, res) => {
  req.session.uid = null;
  res.send({
    code: 200,
    msg: "注销成功"
  });
});
// 接受用户登录请求
router.post("/login", (req, res) => {
  var querys = req.body;
  if (!querys.email)
    return res.send({
      code: 401,
      msg: "邮箱不能为空"
    });
  if (!querys.upass)
    return res.send({
      code: 402,
      msg: "密码不能为空"
    });
  var sql = "SELECT xw_uid,xw_uname,xw_phone,xw_img,xw_age FROM xw_user";
  sql += " WHERE xw_email = ? AND xw_upass = md5(?)";
  async (sql, [querys.email, querys.upass])
    .then(result => {
      if (result.length == 0) {
        return res.send({
          code: 301,
          msg: "邮箱或密码错误"
        });
      } else {
        req.session.uid = result[0].xw_uid;
        return res.send({
          code: 200,
          msg: "登录成功",
          data: result
        });
      }
    })
    .catch(err => console.log(err));
});
module.exports = router;