// import querystring from "querystring";

exports.handler = async function(event, context) {
    const defaultMessage = "Please enter a message";

    if (!event.body) return {
        statusCode:200,   
        body: JSON.stringify({ "message": defaultMessage})
    };

    const body = JSON.parse(event.body);

    var message = body.message;
    if (!message) message = defaultMessage;
    
    return {
      statusCode:200,   
      body: JSON.stringify({ "message": message ?})
    };
  };
  