var lastX;
var lastY;

function tileClick(x, y) {
	deselect(lastX, lastY);
	$("#map td[data-x='" + x + "'][data-y='" + y + "']").addClass("selected");

	//var infoDiv = $("<div>");
	//infoDiv.append($("game-view"));

	lastX = x;
	lastY = y;
}

function deselect(lastX, lastY) {
	$("#map td[data-x='" + lastX + "'][data-y='" + lastY + "']").removeClass("selected");
}