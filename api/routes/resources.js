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

var dynamodbService = new AWS.DynamoDB({apiVersion: '2012-08-10'});

var dynamoDocumentClient = new AWS.DynamoDB.DocumentClient();


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


// function getClassSet(err, data) {
//   //RETURN A SET OF CLASSNAMES
//     if (err) {

//         console.error("Unable to scan the table. Error JSON:", JSON.stringify(err, null, 2));
    
//       } else {

//       var classSet = new Set()
//       console.log("Scan succeeded.");

//       data.Items.forEach(function(itemdata) {
//           console.log("class name : " + itemdata["class_name"]);
//           classSet.add(JSON.stringify(itemdata["class_name"]));
//       })

//       // continue scanning if we have more items
//       if (typeof data.LastEvaluatedKey != "undefined") {
//           console.log("Scanning for more...");
//           params.ExclusiveStartKey = data.LastEvaluatedKey;
//           docClient.scan(params, onScan);
//       }
//       return classSet;
//     }
// }


// Scan table for all items using the Document Client
async function scanForResultsDdbDc()  {
  try {

      // DEFINE TABLE FOR QUERY 
      var params = {
        TableName: "video"
      };

      // CONNECT TO TABLE
      var result = await dynamoDocumentClient.scan(params).promise()
      var classSet = new Set()

      // CREATE RETURN OBJECT
      result.Items.forEach(function(itemdata) {
          classSet.add(itemdata["class_name"]);
      })

      return classSet;

  } catch (error) {
      console.error(error);
      return error;
  }
}





router.get("/dashboard", async function(req, res, next) {
    var response = [];
    //GETTING CLASS NAMES FROM ON SCAN FN TO GET FN
    var dbResponse = await scanForResultsDdbDc();
    dbResponse.forEach(function(val) {
        response.push(val);
    });

    res.send(response);
});


module.exports = router;