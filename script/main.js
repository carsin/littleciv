var worldArgs;
var mouse = {
	down: false,
	x: 0,
	y: 0,
	lastX: 0,
	lastY: 0,
	scrolling: false,
	map: {
		down: false
	}
}
var defaultMapSize = 100;
var moved;
var lastTop;
var lastLeft;

$(document).ready(function() {

	var loc = window.location.href;
	worldArgs = loc.substr(loc.indexOf("?") + 1, loc.length - 1).split("&");
	console.l
	if (getValueOf("size", true) !== undefined) mainMap = new Map(getValueOf("size"), getValueOf("size"));
	else mainMap = new Map(defaultMapSize, defaultMapSize)

	mainMap.init();
	// INIT CELLS IN THEIR ID ORDER FOR ARRAY TO WORK PROPERLY
	plains = new MapCell(0);

	$("td").mouseup(function() {
		if(!moved) {
			var xClicked = $(this).data("x");
			var yClicked = $(this).data("y");

			console.log("X: " + xClicked + " Y: " + yClicked);

			this.style.background = "green";
			if(!mouse.map.down) mainMap.changeCellId(xClicked, yClicked, 1);
		}
		moved = false;
	});
	mainMap.changeCellId(0, 0, 1);

	$("#map").mousedown(function(e) {
		mouse.map.down = true;
	});
	$("#map").mouseup(function(e) {
		mouse.map.down = false;
	});
	$("#map").mousemove(function(e) {
		if(mouse.map.down) moved = true;
	});
	$("#map").draggable();
});

function getValueOf(value, suppressWarnings) {
	for(var i = 0; i < worldArgs.length; i++) {
		var param = worldArgs[i].split("=");
		if(param[0] == value) return param[1];
	}
	if(!suppressWarnings) console.error("tried to get unknown parameter");
	return undefined;
}
