const AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-2" });
const lambda = new AWS.Lambda({
  endpoint: "http://127.0.0.1:3001/"
});

var params = {
  FunctionName: "HelloWorldFunction",
  Payload: new Buffer("{}")
};

lambda.invoke(params, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
