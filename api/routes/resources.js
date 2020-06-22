var express = require("express");
var router = express.Router();
var AWS = require("aws-sdk");
var uuid = require('uuid');
const config = require('../config.json');

const aws_access_key_id =  config.development.aws_access_key_id;
const aws_secret_access_key = config.development.aws_secret_access_key;
AWS.config.update({region:config.development.region});

var dynamodb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

var params = {
    RequestItems: {
     "video": {
       Keys: [
          {
         "class_name": {
             S:'Biology'
          }
        }
       ], 
       ProjectionExpression: "class_name"
      }
    }
};

dynamodb.batchGetItem(params, function (err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response
});

router.get("/dashboard", function(req, res, next) {
    var response = {};
    let classes = ["BIO 2112", "MATH 2332", "CHEM 4003", "CS 3443"];
    response['classes'] = classes;


    res.send(response);
});

module.exports = router;