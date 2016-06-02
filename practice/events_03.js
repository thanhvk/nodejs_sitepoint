var events = require("events");

function Door(color) {
	this.color = color;

	// events.EventEmitter.call(this);

	this.open = function() {
		this.emit("doorOpen");
	}
}

Door.prototype.__proto__ = events.EventEmitter.prototype;

function ring() {
	console.log("ring ring ring");
}

var frontDoor = new Door();
frontDoor.on("doorOpen", ring);

frontDoor.open();