var http = require("http");
var fs = require("fs");
var writeStream = fs.createWriteStream(__dirname + "/out.txt");

var server = http.createServer((req, res) => {
	req.on("data", (data) => {
		writeStream.write(data);
	})

	req.on("end", () => {
		writeStream.end();
		res.statusCode = 200;
		res.end("Ok");
	});
});

server.listen(8000);
console.log("Server listen at 8000");