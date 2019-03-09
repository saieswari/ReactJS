var express = require('express');
var app = express();
var cors= require('cors');
app.use(cors())
var bodyParser = require('body-parser'); app.use(bodyParser.json()); app.use(bodyParser.urlencoded({ extended: true }));

    var sql = require("mssql");

    // config for your database
    var config = {
        user: 'testusers',
        password: 'integra123',
        server: 'integra-net4', 
        database: 'TEST' ,
        port:1433
        
    };

    // connect to your database
        sql.connect(config, function (err) {
    
        if (err){console.log(err)};

      
/*********************************************Employee List Api*************************************************/
/************************************** POST METHOD Employee List API*******************************************/
        app.post('/', function(req, res) {
            console.log("success");
        });

        app.post("/employee", function(req , res){
        console.log(req.body)
            var request1 = new sql.Request();
            var query="INSERT INTO [IAS].[Employeelist] (Code,Name,EmailID,MobileNo,Department,Designation,RoleID,DOJ,Gender,Location,isActive) VALUES('" +req.body.Code+"','" +req.body.Name+"','" +req.body.Email+"','" +req.body.Mobile+"','" +req.body.Department+"','" +req.body.Designation+"','" +req.body.Role+"','" +req.body.DOJ+"','" +req.body.Gender+"','" +req.body.Location+"','" +req.body.isActive+"')";
            request1.query (query);
            //executeQuery (res, query);
         });
         /************************************** POST METHOD Employee List API****************************************/
/************************************** PUT METHOD Employee List API*************************************************/
         
        app.put("/",function(req,res){
            console.log("Successfull")
        });
        app.put("/updateemployee/:id", function(req , res){
            var request1 = new sql.Request();
            request1.query ("UPDATE [IAS].[Employeelist] SET Code='"+req.body.Code+"', Name='"+req.body.Name+"',EmailID='"+req.body.Email+"',MobileNo='"+req.body.Mobile+"',Department='"+req.body.Department+"',Designation='"+req.body.Designation+"',RoleID='"+req.body.Role+"',DOJ='"+req.body.DOJ+"',Gender='"+req.body.Gender+"',Location='"+req.body.Location+"',isActive='"+req.body.isActive+"' WHERE Code= '"+ req.params.id+"'");
            
        });
/**************************************END OF PUT METHOD Employee List API*************************************************/
/************************************** GET Employee List API*************************************************/       
        app.get('/', function (req, res) {
            res.send("Connected successfully")
        });
        app.get('/subdetails', function (req, res, next) {
            var request1 = new sql.Request();
            request1.query("select Name,Category from Subdetails ORDER BY Category ASC", function (err, result) {
                if (err) { return next(err);}
                else{
                    return res.json({subdetails:result.recordsets['0']})
                }
                 
            }); 
        });
        app.get('/employeelist', function (req, res, next) {
            var request1 = new sql.Request();
            request1.query("select Code,Name,Department,Designation,Location from IAS.Employeelist where isActive='true'", function (err, result) {
                if (err) { return next(err);}
                else{
                    return res.json({data:result.recordsets['0']})
                }
                 
            }); 
        }); 

        app.get('/employeelist/:id', function (req, res, next) {
            var request1 = new sql.Request();
            request1.query("select * from IAS.Employeelist where Code='"+req.params.id+"'", function (err, result) {
                if (err) { return next(err);}
                else{
                    return res.json({SingleData:result.recordsets['0']})
                }
                 
            }); 
        }); 
/**************************************END OF GET Employee List API*************************************************/
/*****************************************END OF Employee List Api************************************************/
});

var server = app.listen(5000, function () {
    console.log('Server is running..');
});