var http = require("http");
var fs = require("fs");

var server = http.createServer((req, res) => {
	var stream = fs.createReadStream(__dirname + "/data.txt")
	stream.pipe(res);
});

server.listen(8000);
console.log("Server listen at 8000");