var mysql      = require('mysql');
module.exports=function(){
    var connection = mysql.createConnection({
        host     : 'jdbc\\:mysql\\://192.168.1.102\\:3306/user?autoReconnect\\=true&useUnicode\\=true&characterEncoding\\=utf-8&allowMultiQueries\\=true',
        user     : 'root',
        password : '123456'
    });
    connection.connect();
    connection.query('select * from tb_user', function(err, rows, fields) {
        if (err) throw err;
        console.log('The solution is: ', rows[0].solution);
        console.log(rows);
    });
    connection.end();
}