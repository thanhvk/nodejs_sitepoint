var fs = require("fs");

fs.exists("foo.txt", function(exists) {
	if (!exists) {
		return console.log("File not exits");
	}

	fs.readFile("foo.txt", "utf8", function(error, data) {
		console.log(data);
	});
});
