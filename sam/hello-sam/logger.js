exports.handler = async event => {
  let eventJson = JSON.stringify(event);
  console.log(eventJson);
  return {
    statusCode: 200,
    body: eventJson
  };
};
