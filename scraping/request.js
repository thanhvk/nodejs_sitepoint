var request = require("request");

request({
	uri: "http://www.sitepoint.com"
}, (err, res, body) => {
	console.log(body);
});