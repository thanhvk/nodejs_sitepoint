// https://www.sitepoint.com/making-http-requests-in-node-js/
// http://www.cjihrig.com/development/php/hello_form.php (response Hello + name)
// https://github.com/request/request/tree/master/examples
var request = require("request");

request("http://www.sitepoint.com", (err, res, body) => {
	console.log(body);
});