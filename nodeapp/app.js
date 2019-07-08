//模块
const express = require("express");
const session = require("express-session");
const cors = require("cors");
const bodyParser = require("body-parser");
const multiparty = require("connect-multiparty");

//路由
const indexRouter = require("./routes/index.js");
const userRouter = require("./routes/user.js");
const JournalismRouter = require("./routes/journalism.js");
var loginRouter = require("./routes/login.js");
//创建web服务器
var server = express();
//存放图片路径
server.use(multiparty({
  uploadDir: './public/img'
}))

server.use(
  //cors方法解决跨域
  cors({
//    origin: [
//      "http://127.0.0.1:5500",
//      "http://127.0.0.1:8080",
//      "http://localhost:5500",
//      "http://localhost:8000"
//    ],
    credentials: true
  })
);
server.listen(3000);

//添加session功能
server.use(
  session({
    secret: "128位字符串",
    cookie: {
      maxAge: 60 * 1000 * 60
    }, //过时时长
    resave: true,
    saveUninitialized: true
  })
);

server.use(express.static("public"));
//要在路有的前边使用中间件检查->body—parser
server.use(
  bodyParser.urlencoded({
    extended: false
  })
);
//server.get("/catalog",(req,res)=>{
//	var pno=req.query.pno;
//	var ps=req.query.pageSize;
//	if(!pno){pno=1}
//	if(!ps){ps=4}
//	var offset=(pno-1)*ps;
//	ps=parseInt(ps);
//	var sql="SELECT * FROM xw_index_catalog";
//		sql+=" LIMIT ?,?";
//		pool.query(sql,[offset,ps],(err,result)=>{
//			if(err)console.log(err);
//			res.send({code:1,msg:"登录成功",data:result});
//		})
//})
//首页index
//访问 http://127.0.0.1:3000/login
//登录组件
server.use("/", loginRouter)
server.use("/index", indexRouter);
//挂载路由器,挂载到/user 路由访问/user
server.use("/user", userRouter); //用户路由
server.use("/jour", JournalismRouter);
//挂载路由器,挂载到/product