const AWS = require("aws-sdk");
AWS.config({ region: "us-east-2" });

const dynamodb = new AWS.DynamoDB.DocumentClient();

const tableName = process.env.TABLE_NAME;

exports.handler = async event => {
  let userid = event.pathParameters.userid;
  let data = await dynamodb
    .get({
      TableName: tableName,
      Key: {
        userid: userid
      }
    })
    .promise();

  if (data.Item) {
    return {
      statusCode: 200,
      body: JSON.stringify(data.Item)
    };
  } else {
    throw new Error("User not found");
  }
};
