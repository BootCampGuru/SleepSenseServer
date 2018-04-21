var express = require('express');
var router = express.Router();
var connection = require('../database/dbconnection');

/* POST sessions. */

router.post('/', function (req, res, next) {
  

  var sql = "INSERT INTO usersession (session, sessioninfo) VALUES ('" + req.body.session + "', '" + req.body.sessioninfo + "')";
  connection.query(sql, function (err, result) {
    if (err)
    {
     console.log(err);
     res.status(404).send();
 	}
    
    console.log("1 record inserted");
     res.status(200).send();
  });




    // connection.create({
    //         session : req.body.session,
    //         sessioninfo : req.body.sessioninfo
    //     }, 
    //     function (err, user) {
    //         if (err) return res.status(500).send("There was a problem adding the information to the database.");
    //         res.status(200).send(user);
    //     });
});



module.exports = router;