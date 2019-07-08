const pool = require("../pool");
//module.exports导出;
module.exports = function (sql, paramas) {
    return new Promise((resolve, reject) => {
        pool.query(sql, paramas, (error, result) => {
            if (error) reject(error);
            else resolve(result);
        });
    });
}