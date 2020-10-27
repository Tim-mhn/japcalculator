import querystring from "querystring";

exports.handler = async function(event, context) {
    const params = querystring.parse(event.body);

    var message = params.message;
    if (!message) message = "Please enter a message"
    
    return {
      statusCode:200,   
      body: JSON.stringify({ "message": message})
    };
  };
  