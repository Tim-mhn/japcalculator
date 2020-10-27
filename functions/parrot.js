exports.handler = async function(event, context) {
    const message = event.queryStringParameters.message;
    return {
      statusCode: message ? 200 : 400,
      body: message ? JSON.stringify({ message:  message }) : null,
    };
  };
  