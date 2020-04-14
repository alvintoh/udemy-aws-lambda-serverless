"use strict";

module.exports.add = async (event) => {
  let { num1, num2 } = event;
  return num1 + num2;

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
