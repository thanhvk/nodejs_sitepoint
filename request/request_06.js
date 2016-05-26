var request = require("request");
var uri = "http://youtube.com"

request(uri, (err, res, body) => {
	if (err)
		return console.log(err.msg);

	console.log(body);
});