require('module-alias/register');
let express = require('express');
let router = express.Router();
let businessrulesConn = require('@businessRulesService');
let datavalidator = require('@vals/dataexists');
let structureValidator = require('@lib/validatestructure');
let loginSQL = require('./loginSQL');
let serviceConn = require("@lib/serviceConn");
let bodyconverter = require("@conv/bodyConverter");

// var crypto = require('crypto');
//
var CryptoJS = require("crypto-js");
//
// var password = req.body.USER_PASSWORD;
// // Encrypt
// var ciphertext = CryptoJS.AES.encrypt(JSON.stringify(data), 'secret key 123').toString();
// console.log(ciphertext);
//
// // Decrypt
// var bytes  = CryptoJS.AES.decrypt(ciphertext, 'secret key 123');
// var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

// console.log(decryptedData);
const bcrypt = require('bcrypt');


router.post('/login', (req , res) =>{

 //  let hash = loginSQL.login.statement.USER_PASSWORD;
 //  // 7d
 // // dycryption
 //  const match = bcrypt.compare(req.body.USER_PASSWORD, hash , (error , result) => {
 //    if (result == true) {
 //        console.log("true");
 //          serviceConn(req, res, loginSQL.login.statement, {'USER_PASSWORD' : req.body.USER_PASSWORD}, loginSQL.login.requireCommit);
 //        }
 //        else
 //        {
 //           console.log('false');
 //           res.status(400).json(error)
 //      };
 //  });

 var crypto = require('crypto');
        var iv = new Buffer('0000000000000000');
        var key = 'A@TSecurity24360';

        var encrypt = function(data) {
            var cc = crypto.createCipher('aes-128-ecb', new Buffer(key));
            return Buffer.concat([cc.update(data, 'utf8'), cc.final()]).toString('base64');
        };

        var decrypt = function(data) {
            var cc = crypto.createDecipher('aes-128-ecb', new Buffer(key));
            return Buffer.concat([cc.update(data, 'base64'), cc.final()]).toString('utf8');
        };


        var data = '123'
        var cipher = encrypt(data);
        var decipher = decrypt('Zogrkzms0TltgjRJADpjWA==');
        console.log(cipher);
        console.log(decipher);
});
//----------------------
router.post('/insertLogin',(req,res)=>{
        bcrypt.genSalt(10, function(err, salt) {
          bcrypt.hash(req.body.USER_PASSWORD, salt, function(err, hash) {
            console.log (hash);
            bodyconverter.bodyconverter(req,res,req.body,loginSQL.insertLogin.returns).then(convertedbody=>{
              serviceConn(req,res,loginSQL.insertLogin.statement,convertedbody,loginSQL.insertLogin.requireCommit);
            }).catch(error => { res.status(400).json(error); });

          });
        });
        //--------------------------------------------------------------------------------------------------
        // bodyconverter.bodyconverter(req,res,req.body,loginSQL.insertLogin.returns).then(convertedbody=>{
        //     bcrypt.hash(convertedbody.USER_PASSWORD, salt, function(err, hash) {
        //        console.log (hash);
        //        serviceConn(req,res,loginSQL.insertLogin.statement,hash,loginSQL.insertLogin.requireCommit);
        //     });
        //    }).catch(error => { res.status(400).json(error); });
        //-----------------------------------------------------------------------------------------------------
});



  // let auth = {
  //   "USER_NAME" : req.body.USER_NAME,
  //   "USER_PASSWORD" : req.body.USER_PASSWORD
  // };
  // // bcrypt.compare(auth, loginSQL.login.statement.user_password, function (err, result) {
  //     if (result == true) {
  //       console.log("Succs");
  //
  //     } else {
  //
  //      console.log('error');}
  //    });
    //... fetch user from a db etc.
    // let hash = loginSQL.login.statement.USER_PASSWORD;
    // const match = bcrypt.compare(req.body.USER_PASSWORD, hash).then(function (error , result) {
    //     console.log("sucess");
    //     serviceConn(req, res, loginSQL.login.statement, {"USER_PASSWORD" :req.body.USER_PASSWORD}, loginSQL.login.requireCommit);
    // }).catch(error => { res.status(400).json(error); });
    //
    // let hash = "65F9869C8873398D";
    // const match = bcrypt.compare(req.body.USER_PASSWORD, hash , (error , result) => {
    //   if (result == true) {
    //       console.log("falsss");
    //         serviceConn(req, res, loginSQL.login.statement, [], loginSQL.login.requireCommit);
    //       }
    //        else {
    //       res.status(400).json(error)};
    //
    // });









// "EMPLOYEE_ID": req.body.EMPLOYEE_ID ,
// "SUBSIDIARY_ID": req.body.SUBSIDIARY_ID,
// "USER_NAME": req.body.USER_NAME,

// router.post('/loginAOT',datavalidator,
// structureValidator.validateloginstructure,
//     (req, res) => {
//         let authorization = {
//             "USERNAME" : req.body.USERNAME,
//             "PASSWORD" : req.body.PASSWORD
//         };
//
//         businessrulesConn(req, res, loginSQL.authuserpass.statement, authorization, loginSQL.authuserpass.requireCommit).then(requestdata => {
//             res.status(200).json(requestdata);
//         }).catch(error => { res.status(400).json(error); });
//     });


// (req, res) => {
//       let authorization = {
//           "USER_NAME" : req.body.USER_NAME,
//           "USER_PASSWORD" : req.body.USER_PASSWORD
//       };
//       console.log(req.body.USER_PASSWORD);
//
//       var encryption = CryptoJS.AES.encrypt(JSON.stringify(req.body.USER_PASSWORD), '65F9869C8873398D').toString();
//       console.log(encryption);
//
//       businessrulesConn(req, res, loginSQL.login.statement, authorization, loginSQL.login.requireCommit).then(requestdata => {
//       if(requestdata.USER_PASSWORD === encryption) {
//         res.status(200).json(requestdata);
//         // // Decrypt
//         // var bytes  = CryptoJS.AES.decrypt(ciphertext, 'secret key 123');
//         // var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
//         //
//         // console.log(decryptedData);
//
//       }
//
//       }).catch(error => { res.status(400).json(error); });
//
//
//       // Decryption
//       // var numberOfBytes  = CryptoJS.AES.decrypt(req.body.USER_PASSWORD, 'secret key 123');
//       // var decryptedData = JSON.parse(numberOfBytes.toString(CryptoJS.enc.Utf8));
//       // console.log(decryptedData);
//
//
//       // businessrulesConn(req, res, loginSQL.login.statement, authorization, loginSQL.login.requireCommit).then(requestdata => {
//       //
//       //     res.status(200).json(requestdata);
//       // }).catch(error => { res.status(400).json(error); });
module.exports = router;
