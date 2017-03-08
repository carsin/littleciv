var worldArgs;

$(document).ready(function() {

	var loc = window.location.href;
	worldArgs = loc.substr(loc.indexOf("?") + 1, loc.length - 1).split("&");

	mainMap = new Map(getValueOf("size"), getValueOf("size"));
	mainMap.init();
	// INIT CELLS IN THEIR ID ORDER FOR ARRAY TO WORK PROPERLY
	plains = new MapCell(0);

	$("td").click(function() {
		var xClicked = $(this).data("x");
		var yClicked = $(this).data("y");

		console.log("X: " + xClicked + " Y: " + yClicked);

		this.style.background = "green";
		mainMap.changeCellId(xClicked, yClicked, 1);
	});
	mainMap.changeCellId(0, 0, 1);
});

function getValueOf(value) {
	for(var i = 0; i < worldArgs.length; i++) {
		var param = worldArgs[i].split("=");
		if(param[0] == value) return param[1];
	}
	console.error("tried to get unknown parameter");
}
