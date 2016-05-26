var fs = require("fs");
var fileName = "foo.txt";
var newName = "bar.txt";

fs.stat(fileName, (err, stats) => {
	if (err) 
		return console.log("File not exists!");

	if (stats.isFile()) {
		// fs.readFile(fileName, "utf8", (err, data) => {
		// 	if (err)
		// 		return console.log(err.msg);

		// 	fs.writeFile(newName, data, (err) => {
		// 		if (err) 
		// 			return console.log(err.msg);

		// 		console.log("Write file: " + newName + " success!")
		// 	})
		// });

		fs.createReadStream(fileName)
			.pipe(fs.createWriteStream(newName));

		fs.unlink(fileName, () => {
			console.log("done");
		});
	}
});