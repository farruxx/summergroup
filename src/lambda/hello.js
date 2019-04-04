const https = require('https');
// For more info, check https://www.netlify.com/docs/functions/#javascript-lambda-functions
export function handler(event, context, callback) {
  // console.log("queryStringParameters", event.queryStringParameters)
  // callback(null, {
  //   // return null to show no errors
  //   statusCode: 200, // http status code
  //   body: JSON.stringify({
  //     msg: "Hello, World! " + Math.round(Math.random() * 10),
  //   }),
  // })
  const options = {
    host: 'api.telegram.org',
    path: '/bot672568768:AAEjxcuQ73tA5-fcNzQaVEr9WqFD5C2VvZY/sendMessage?chat_id=farruxtestchannel&text=[MY_MESSAGE_TEXT]',
    method: 'GET'
  };
  var body = ''
  const req = https.request(options, (res) => {
    var body = '';
    res.on('data', function (chunk) {
      body += chunk;
    });
    res.on('end', function () {
      console.log(body);
      callback(body);
    });
  });

  req.on('error', (e) => {
    callback(e.message);
  });

  // send the request
  req.write('');
  req.end();
}

  // Now you are ready to access this API from anywhere in your Gatsby app! For example, in any event handler or lifecycle method, insert:
  // fetch("/.netlify/functions/hello")
  //    .then(response => response.json())
  //    .then(console.log)
  // For more info see: https://www.gatsbyjs.org/blog/2018-12-17-turning-the-static-dynamic/#static-dynamic-is-a-spectrum