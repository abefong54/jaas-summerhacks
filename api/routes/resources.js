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

// Use the query operation to get a class by its name
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

// Use the query operation to get a class by its id
async function getClassAnalyticsDataByID(classID) {
  try {
      // DEFINE TABLE FOR QUERY 
      console.log("Querying for classes for class id #" +classID);

      // SET UP DYNAMO DB QUERY
      var params = {
          TableName : "video",
          KeyConditionExpression: "#id = :id",
          ExpressionAttributeNames: {
            "#id":"id",
          },
          ExpressionAttributeValues: {
            ":id":  {
              N: classID
            }
          }
      };

      // CONNECT TO DB
      var classData = await dynamodb.query(params, function(err, data) {
          if (err) {
              console.error("Unable to query. Error:", JSON.stringify(err, null, 2));
              return [];
          } else {
              return data.Items[0];
          }
      }).promise();

      return classData.Items[0];

  } catch (error) {
      console.error(error);
      return error;
  }
}

// classes[itemdata['id']] = {
//   'class_name': itemdata.class_name,
//   'lecture_name': itemdata.lecture_name,
//   'lecture_day': itemdata.lecture_day
// }
// }

// Use the query operation to get a notes by class id
async function getClassNotesByClassID(classID) {
  try {
    // DEFINE TABLE FOR QUERY 
    var params = {
      TableName: "notes"
    };

    // CONNECT TO TABLE
    var result = await dynamoDocumentClient.scan(params).promise()
    var notes = {}

    // CREATE RETURN OBJECT
    result.Items.forEach(function(noteFromDB) {
        if (noteFromDB['class_id'] == classID) { 
            notes[noteFromDB['id']] = { 
              'note': noteFromDB.note, 
              'date': noteFromDB.date, 
            }
        }
        console.log(noteFromDB);
      
    });
    
    return notes;

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


// GET VIDEO ANALYTICS DATA
// /dashboard/analytics/${props.match.params.classID}
router.get("/analytics/class-analytics", async function(req, res, next) {

    var data = {
        "video": {},
        "notebook": []
    };
    // console.log(req.query.classID);
    data.video = await getClassAnalyticsDataByID(req.query.classID);
    data.notebook = await getClassNotesByClassID(req.query.classID);

    console.log("back here:");
    console.log(data);
    res.send(data);
});


module.exports = router;