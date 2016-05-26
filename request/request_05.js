var request = require("request");
var jar = request.jar();
var cookie = request.cookie("name=John");
var uri = "http://www.cjihrig.com/development/php/hello_cookies.php";

jar.setCookie(cookie, uri);

console.log(jar);

request({
	uri: uri,
	method: "GET",
	jar: jar
}, (err, res, body) => {
	console.log(body);
	console.log(jar);
});

