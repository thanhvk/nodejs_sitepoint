var request = require("request");
var cheerio = require("cheerio");

request({
	uri: "https://www.sitepoint.com"
}, (err, res, body) => {
	var $ = cheerio.load(body);

	$(".article_title > a").each(function() {
		var link = $(this);
		var text = link.text();
		var href = link.attr("href");

		console.log(text + " -> " + href);
	});
});