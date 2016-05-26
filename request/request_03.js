var request = require("request");

request({
	uri: "http://www.sitepoint.com",
	method: "GET",
	timeout: 1000,
	followRedirect: true,
	maxRedirects: 10
}, (err, res, body) => {
	console.log(body);
});