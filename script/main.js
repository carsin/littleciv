var worldArgs;
var zoom = 80;

$(document).ready(function() {

	var loc = window.location.href;
	worldArgs = loc.substr(loc.indexOf("?") + 1, loc.length - 1).split("&");

	mainMap = new Map(10, 10);
	// INIT CELLS IN THEIR ID ORDER FOR ARRAY TO WORK PROPERLY
	plains = new MapCell(0, "Plains");

	$("td").click(function() {
		var xClicked = $(this).data("x");
		var yClicked = $(this).data("y");

		console.log("X: " + xClicked + " Y: " + yClicked);
		
		//mainMap.changeCellId(xClicked, yClicked, 1);
		tileClick(xClicked, yClicked);
	});

	$("#game-view").click(function(e) {
		if (e.target !== this) return;

		deselect(lastX, lastY);
	});

	$("#map-view").click(function(e) {
		if (e.target !== this) return;

		deselect(lastX, lastY);
	});
});

function getValueOf(value) {
	for(var i = 0; i < worldArgs.length; i++) {
		var param = worldArgs[i].split("=");
		if(param[0] == value) return param[1];
	}
	console.error("tried to get unknown parameter");
}
