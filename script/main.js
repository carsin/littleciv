var worldArgs;

$(document).ready(function() {

	var loc = window.location.href;
	worldArgs = loc.substr(loc.indexOf("?") + 1, loc.length - 1).split("&");

	mainMap = new Map(getValueOf("size"), getValueOf("size"));
	mainMap.init();

	$("td").click(function() {
		var xClicked = $(this).data("x");
		var yClicked = $(this).data("y");

		console.log("X: " + xClicked + " Y: " + yClicked);

		this.style.background = "green";
	});
});

function getValueOf(value) {
	for(var i = 0; i < worldArgs.length; i++) {
		var param = worldArgs[i].split("=");
		if(param[0] == value) return param[1];
	}
	console.error("tried to get unknown parameter");
}
