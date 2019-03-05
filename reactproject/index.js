var express = require('express');
var app = express();
var cors= require('cors');
app.use(cors())

app.get('/', function (req, res) {
   
    var sql = require("mssql");

    // config for your database
    var config = {
        user: 'sa',
        password: '1234',
        server: 'localhost', 
        database: 'master' ,
        port:1433
        
    };

    // connect to your database
    sql.connect(config, function (err) {
    
        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();
           
        // query to the database and get the records
        app.get('/login', function (req, res, next) {
            var request1 = new sql.Request();
            request1.query('select * from Employee', function (err, result) {
                if (err) { return next(err);}
                else{
                    return res.json({data:result.recordsets})
                }
                 
            }); 
        }); 
        // request.query('select * from Employee', function (err, recordset) {
            
        //     if (err){console.log(err)}else{ res.json(recordset);
        //         console.log('response'+recordset)} 

        //     // send records as a response

           
            
        // });
    });
});

var server = app.listen(5000, function () {
    console.log('Server is running..');
});