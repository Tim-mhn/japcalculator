exports.handler = async function(event, context) {
    console.log(event);
    var message = event.body.message;
    // if (!message) message= "Please enter a message !"
    
    return {
      statusCode:200,
      body: JSON.stringify({ message:  "test" })
    };
  };
  