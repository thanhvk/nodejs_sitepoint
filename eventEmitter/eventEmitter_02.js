var events = require("events");

function Door(colour) {
	this.colour = colour;
	events.EventEmitter.call(this);

	this.open = function() {
		this.emit('open');
	}
}

Door.prototype.__proto__ = events.EventEmitter.prototype;

var frontDoor = new Door("brow");

var ring = function() {
	console.log("ring ring ring");
}

frontDoor.on("open", ring);
// frontDoor.open();

console.log(require('util').inspect(frontDoor.listeners("open"), { showHidden: true, depth: null }));