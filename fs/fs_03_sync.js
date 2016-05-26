var fs = require("fs");
var fileName = "foos.txt";
var exists = fs.existsSync(fileName);

if (exists) {
	var data = fs.readFileSync(fileName, "utf8");
	console.log(data);
} else {
	console.log("File not exists!");
}

