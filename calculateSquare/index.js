const AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-2" });

var lambda = new AWS.Lambda();

exports.handler = async event => {
  let number = event.number;
  let payload = JSON.stringify({
    operation: "multiply",
    input: {
      operand1: number,
      operand2: number
    }
  });
  let params = {
    FunctionName: "calculator",
    InvocationType: "RequestResponse",
    Payload: payload
  };

  let data = await lambda.invoke(params).promise();

  let result = JSON.parse(data.Payload);

  return result.body;
};
