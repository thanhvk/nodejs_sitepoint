var http = require("http");
var fs = require("fs");

var options = {
	host: "localhost"
	, port: 8000
	, path: "/"
	, method: "POST"
}

var req = http.request(options, (res) => {
	console.log(res.statusCode);
});

var readStream = fs.createReadStream(__dirname + "/in.txt");

readStream.pipe(req);

readStream.on("close", () => {
	req.end();
	console.log("I finished sent data to serve");
});