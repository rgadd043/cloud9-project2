
var request = require('request');

var queryUrl = "http://api-public.guidebox.com/v2/movies/135934?api_key=a4966dc9db26e3695465a5340bb66b205267cdc2";

request(queryUrl, function(error, response, body) {
  var info = JSON.parse(body);
  for (var i = 0; i < info.purchase_web_sources.length; i++) {
    if (typeof(info.purchase_web_sources[i].formats[0].price) != 'undefined')
    { console.log("Error with price.") }
      else if (!error && response.statusCode === 200)
        { console.log("Web Sources: " + info.purchase_web_sources[i].display_name + " | Link: " + info.purchase_web_sources[i].link + " | Price: " + info.purchase_web_sources[i].formats[0].price);
        console.log("--------");}
          else { console.log("Didn't work")}
        }
      });





// request(queryUrl, function(error, response, body) {
//   var info = JSON.parse(body);
//   for (var i = 0; i < info.purchase_web_sources.length; i++) {
//     console.log("Web Sources: " + info.purchase_web_sources[i].display_name + " | Link: " + info.purchase_web_sources[i].link + " | Price: " + info.purchase_web_sources[i].formats[0].price);
//   }
// });
