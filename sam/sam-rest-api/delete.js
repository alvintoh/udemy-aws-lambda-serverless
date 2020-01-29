const AWS = require("aws-sdk");
AWS.config({ region: "us-east-2" });

const dynamodb = new AWS.DynamoDB.DocumentClient();

const tableName = process.env.TABLE_NAME;

exports.handler = async event => {
  let userid = event.pathParameters.userid;

  let data = await dynamodb
    .delete({
      TableName: tableName,
      Key: {
        userid: userid
      }
    })
    .promise();

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "User deleted successfully"
    })
  };
};
