var mysql=require('mysql');


 var connection=mysql.createConnection({
 
host:'localhost',
 user:'root',
 password:'sagat99',
 database:'SnoreAway'
 
});

 
 module.exports = connection;