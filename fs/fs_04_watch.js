var fs = require("fs");
var fileName = "foo.txt";

// fs.watch(fileName, {
// 	persisten: true
// }, function(event, fileName) {
// 	console.log(event + " event occurred on " + fileName);
// });

fs.watch(fileName, function(event, fileName) {
	console.log(event + " event occurred on " + fileName);
});

// Not see diff