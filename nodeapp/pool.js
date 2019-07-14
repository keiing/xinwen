const mysql = require('mysql');
//使用mysql创造连接池对象
var pool = mysql.createPool({
	host: '127.0.0.1',//lks2v4mr.2391.dnstoo.com
	port: '3306',//5503
	user: 'root',//webczp_f
	password: '',//q789654123654789
	database: 'xw',//webczp
	connectionLimit: 60
});
//导出连接池对象
module.exports = pool;