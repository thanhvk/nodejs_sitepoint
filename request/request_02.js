var fs = require("fs");
var request = require("request");

request("http://www.sitepoint.com").pipe(fs.createWriteStream("jspro.html"));