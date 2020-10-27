// import querystring from "querystring";

exports.handler = async function(event, context) {
    const body = JSON.parse(event.body);

    var message = body.message;
    if (!message) message = "Please enter a message"
    
    return {
      statusCode:200,   
      body: JSON.stringify({ "message": message})
    };
  };
  