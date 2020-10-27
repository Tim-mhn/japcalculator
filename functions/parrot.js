exports.handler = async function(event, context) {
    var message = event.body.message;
    // if (!message) message= "Please enter a message !"
    var message = event.body.message
    return {
      statusCode:200,
      body: event
    };
  };
  