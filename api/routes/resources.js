var express = require("express");
var router = express.Router();
var AWS = require("aws-sdk");
const config = require('../config.json');

const aws_access_key_id =  config.development.aws_access_key_id;
const aws_secret_access_key = config.development.aws_secret_access_key;

var creds = new AWS.Credentials({
  accessKeyId:  aws_access_key_id, secretAccessKey: aws_secret_access_key
});
AWS.config.update({region:config.development.region,credentials:creds});

var dynamoDocumentClient = new AWS.DynamoDB.DocumentClient();
var dynamodb = new AWS.DynamoDB({apiVersion: "2012-08-10"});


// Scan table for all items using the Document Client
async function getClasslist()  {
  try {
      // DEFINE TABLE FOR QUERY 
      var params = {
        TableName: "video"
      };

      // CONNECT TO TABLE
      var result = await dynamoDocumentClient.scan(params).promise()
      var classes = {}

      // CREATE RETURN OBJECT
      result.Items.forEach(function(itemdata) {
        classes[itemdata['class_name']] = itemdata['id'];
      })

      return classes;

  } catch (error) {
      console.error(error);
      return error;
  }
}

// Use the query operation to get a class by it's id
async function getClassByName(className){
  try {
      // DEFINE TABLE FOR QUERY 
      var params = {
        TableName: "video"
      };

      // CONNECT TO TABLE
      var result = await dynamoDocumentClient.scan(params).promise()
      var classes = {}

      // CREATE RETURN OBJECT
      result.Items.forEach(function(itemdata) {
        if (itemdata['class_name'] == className) {
          classes[itemdata['id']] = {
            'class_name': itemdata.class_name,
            'lecture_name': itemdata.lecture_name,
            'lecture_day': itemdata.lecture_day
          }
        }
      })
      
      return classes;

  } catch (error) {
      console.error(error);
      return error;
  }
}



// GET CLASS LISTS FOR DROPDOWN
router.get("/dashboard/dropdown", async function(req, res, next) {
    var response = await getClasslist();
    res.send(response);
});

// GET VIDEO LIST FOR TABLE
router.get("/dashboard/class-videos", async function(req, res, next) {
    var data = await getClassByName(req.query.classname);
    res.send(data);
});


module.exports = router;