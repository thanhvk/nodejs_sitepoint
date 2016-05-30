var request = require("request");
var cheerio = require("cheerio");

request({
	uri: "http://www.sitepoint.com"
}, (err, res, body) => {
	if (err) 
		return console.log(err);

	var $ = cheerio.load(body);
	var articles = $(".article_title > a");

	for (var i = 0; i < articles.length; i++) {
		console.log($(articles[i]).text(), "\n");
		console.log($(articles).attr("href"), "\n\n");
	}
});