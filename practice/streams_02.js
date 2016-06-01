var http = require("http");
var fs = require("fs");
var stream = fs.createReadStream(__dirname + "/data.txt");

var server = http.createServer((req, res) => {
	stream.pipe(res);
});

server.listen(8000);
console.log("Server listen at 8000 port");