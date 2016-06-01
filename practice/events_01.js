var events = require("events");
var emitEmitter = new events.EventEmitter();

function ring() {
	console.log("ring ring ring");
}

emitEmitter.on("openDoor", ring);
emitEmitter.emit("openDoor");