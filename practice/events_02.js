var events = require("events");
var eventEmitter = new events.EventEmitter();

function ring() {
	console.log("ring ring ring");
}

function bell() {
	console.log("bell bell bell");
}

eventEmitter.on("doorOpen", ring);
eventEmitter.on("doorOpen", bell)
eventEmitter.emit("doorOpen");
