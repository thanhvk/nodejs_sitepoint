// https://www.sitepoint.com/introduction-to-streams/

var http = require("http");
var fs = require("fs");

var server = http.createServer((req, res) => {
	fs.readFile(__dirname + "/data.txt", (err, data) => {
		res.end(data);
	});
});

server.listen(8000);
console.log("Server listen at 8000");