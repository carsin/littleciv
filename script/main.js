$(document).ready(function() {
	mainMap = new Map(10, 10);
	// INIT CELLS IN THEIR ID ORDER FOR ARRAY TO WORK PROPERLY
	plains = new MapCell(0);

	$("td").click(function() {
		var xClicked = $(this).data("x");
		var yClicked = $(this).data("y");

		console.log("X: " + xClicked + " Y: " + yClicked);
		
		mainMap.changeCellId(xClicked, yClicked, 1);
	});

	mainMap.changeCellId(0, 0, 1);

});