const mysql = require('mysql');
//使用mysql创造连接池对象
var pool = mysql.createPool({
	host: 'lks2v4mr.2391.dnstoo.com',
	port: '5503',
	user: 'webczp_f',
	password: 'q789654123654789',
	database: 'webczp',
	connectionLimit: 60
});
//导出连接池对象
module.exports = pool;