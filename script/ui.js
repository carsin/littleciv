var lastX;
var lastY;

function tileClick(x, y) {
	deselect(lastX, lastY);
	$("#map td[data-x='" + x + "'][data-y='" + y + "']").addClass("selected");
	var tileType = mapCells[mainMap.getCellId(x, y)];
	var infoDiv = $("<div id='info'>");
	infoDiv.append($("<ul><li>" + tileType.name +"</li>"));
	infoDiv.css("top", y * zoom - 50);
	infoDiv.css("left", x * zoom + 30);
	$("#game-view").prepend(infoDiv);

	lastX = x;
	lastY = y;
}

function deselect(lastX, lastY) {
	$("#map td[data-x='" + lastX + "'][data-y='" + lastY + "']").removeClass("selected");
	$("#info").remove();
}