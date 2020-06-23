var express = require("express");
var router = express.Router();
var AWS = require("aws-sdk");
var uuid = require('uuid');
const config = require('../config.json');

const aws_access_key_id =  config.development.aws_access_key_id;
const aws_secret_access_key = config.development.aws_secret_access_key;
var creds = new AWS.Credentials({
  accessKeyId:  aws_access_key_id, secretAccessKey: aws_secret_access_key
});
AWS.config.update({region:config.development.region,credentials:creds});

/* var dynamodb = new AWS.DynamoDB({apiVersion: '2012-08-10'}); */
var docClient = new AWS.DynamoDB.DocumentClient();


/* var params = {
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
}; */

var params = {
  TableName: "video"
  

};


function getClassSet(err, data) {
 //RETURN A SET OF CLASSNAMES
  if (err) {
      console.error("Unable to scan the table. Error JSON:", JSON.stringify(err, null, 2));
  } else {        
      console.log("Scan succeeded.");
      data.Items.forEach(function(itemdata) {
         console.log("Item :",JSON.stringify(itemdata["class_name"]));


      });
      return 100;
       
      // continue scanning if we have more items
      if (typeof data.LastEvaluatedKey != "undefined") {
          console.log("Scanning for more...");
          params.ExclusiveStartKey = data.LastEvaluatedKey;
          docClient.scan(params, onScan);
      }
  }
}


console.log('done');
router.get("/dashboard", function(req, res, next) {
    var response = {};
    //GETTING CLASS NAMES FROM ON SCAN FN TO GET FN
    
    //let classes = docClient.scan(params, getClassSet);
    return docClient.scan(params, getClassSet);
    response['classes'] = classes;


    res.send(response);
});


module.exports = router;