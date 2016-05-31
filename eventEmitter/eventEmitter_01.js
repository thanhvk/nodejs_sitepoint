// https://www.sitepoint.com/nodejs-events-and-eventemitter/

var events = require("events");
var eventEmitter = new events.EventEmitter();

var ringBell = function () {
	console.log("ring ring ring");
}
var ring = function() {
	console.log("ring");
}
var ringeling = function() {
	console.log("ringeling");
}

eventEmitter.on("doorOpen", ringBell);
eventEmitter.on("doorOpen", ring);
eventEmitter.on("doorOpen", ringeling);

eventEmitter.emit("doorOpen");