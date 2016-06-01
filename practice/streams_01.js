var http = require("http");
var fs = require("fs");

var server = http.createServer((req, res) => {
	var data = fs.readFile(__dirname + "/data.txt", (err, data) => {
		res.end(data);
	})
});

server.listen(8000);
console.log("Sever listen at 8000");