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
   return new Promise((resolve, reject) => {
     
      const options = {
          host: 'api.telegram.org',
          path: '/bot672568768:AAEjxcuQ73tA5-fcNzQaVEr9WqFD5C2VvZY/sendMessage?chat_id=farruxtestchannel&text=[MY_MESSAGE_TEXT]',
          port: 443,
          method: 'GET'
      };

      const req = https.request(options, (res) => {
        resolve('Success');
      });

      req.on('error', (e) => {
        reject(e.message);
      });

      // send the request
      req.write('');
      req.end();
  });
  }

  // Now you are ready to access this API from anywhere in your Gatsby app! For example, in any event handler or lifecycle method, insert:
  // fetch("/.netlify/functions/hello")
  //    .then(response => response.json())
  //    .then(console.log)
  // For more info see: https://www.gatsbyjs.org/blog/2018-12-17-turning-the-static-dynamic/#static-dynamic-is-a-spectrum