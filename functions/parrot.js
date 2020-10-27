exports.handler = async function(event, context) {
    var message = event.body.message;
    // if (!message) message= "Please enter a message !"

    return {
      statusCode: message ? 200 : 400,
      body: message ? JSON.stringify({ message:  message }) : null,
    };
  };
  