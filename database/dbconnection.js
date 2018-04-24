var mysql=require('mysql');


 var connection=mysql.createConnection({
 
host:'lmag6s0zwmcswp5w.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
 user:'hq7pb5pfmwesjhu3',
 password:'h7uyg1ah9o4yhnzx',
 database:'d905s42lv3a82zqu'
 
});

 
 module.exports = connection;