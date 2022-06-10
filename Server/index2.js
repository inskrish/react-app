// const express = require("express");
// const app = express();
// const sql = require("mssql");
// const config ={
// server: "SNC-VAL-AILAB5\\SQLEXPRESS",
// port: 3001,
// user: "krishgondaliya",
// password: "9033702483@Abcd",
// database: "project",
// options:{
// enableArithAbort: true
// },
// connectionTimeout: 150000,
// pool:{
// max: 10,
// min: 0,
// idleTimeoutMillis: 30000
// }
// };

// sql.on('error',(err)=>{
//   console.log(err);
// })

var express = require('express');
var app = express();

app.get('/', function (req, res) {
   
    var sql = require("mssql");

    // config for your database
    var config = {
        user: 'krishgondaliya',
        password: '9033702483@Abcd',
        server: 'SNC-VAL-AILAB5\\SQLEXPRESS', 
        database: 'project', 
        "port": 1433, // make sure to change port
        "dialect": "mssql",
        "dialectOptions": {
            "instanceName": "SQLEXPRESS"
        }
    };

    // connect to your database
    sql.connect(config, function (err) {
    
        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();
           
        // query to the database and get the records
        request.query('select * from leaveapp', function (err, recordset) {
            
            if (err) console.log(err)

            // send records as a response
            res.send(recordset);
            
        });
    });
});

var server = app.listen(5000, function () {
    console.log('Server is running..');
});