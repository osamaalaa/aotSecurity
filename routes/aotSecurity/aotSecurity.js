require('module-alias/register');
let express = require('express');
let router = express.Router();
let serviceConn = require("@lib/serviceConn");
let bodyconverter = require("@conv/bodyConverter");
let statements = require("@aotSecurity/aotSecuritySQL");
let checkdataexists = require("@vals/dataexists");




router.get('/getallUserPriv', (req, res) =>{
  serviceConn(req, res,
              statements.getallUserPriv.statement,
              {'USER_NAME': req.body.USER_NAME , 'USER_PASSWORD': req.body.USER_PASSWORD},
              statements.getallUserPriv.requireCommit
            );
});




module.exports= router ;
