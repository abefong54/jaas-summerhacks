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

var dynamoDocumentClient = new AWS.DynamoDB.DocumentClient();


// Scan table for all items using the Document Client
async function getClasslistSet()  {
  try {

      // DEFINE TABLE FOR QUERY 
      var params = {
        TableName: "video"
      };

      // CONNECT TO TABLE
      var result = await dynamoDocumentClient.scan(params).promise()
      var classSet = new Set()
      var emotions = {};

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


// TODO - RETURN PROPERLY
async function getVideoListByClassName(className){
  try {
      var params = {
          KeyConditionExpression: 'class_name = :class_name',
          ExpressionAttributeValues: {
              ':class_name': className
          },
          TableName: "video"
      };
      var result = await dynamoDocumentClient.query(params).promise()
      console.log(JSON.stringify(result))
  } catch (error) {
      console.error(error);
  }
}



// GET CLASS LISTS FOR DROPDOWN
router.get("/dashboard/dropdown", async function(req, res, next) {
    var response = [];
    //GETTING CLASS NAMES FROM ON SCAN FN TO GET FN
    var dbResponse = await getClasslistSet();
    dbResponse.forEach(function(val) {
        response.push(val);
    });
    res.send(response);
});

// GET VIDEO LIST FOR TABLE
router.get("/dashboard/class-videos", async function(req, res, next) {
    var id = req.query.classname; // $_GET["id"]
    console.log('Heres the payload:' + id);

    var response = ["Cool"];
    // //GETTING CLASS NAMES FROM ON SCAN FN TO GET FN
    // var classname = req.body;

    // //  update get video list data to only get videos for class name in request
    // var dbResponse = await getVideoListData(classname);
    // // dbResponse.forEach(function(val) {
    //     response.push(val);
    // });

    res.send({"message": response});
});


module.exports = router;