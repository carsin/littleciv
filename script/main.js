$(document).ready(function() {
	mainMap = new Map(10, 10);
	mainMap.init();

	$("td").click(function() {
		var xClicked = $(this).data("x");
		var yClicked = $(this).data("y");

		console.log("X: " + xClicked + " Y: " + yClicked);
		
		this.style.background = "green";
	});
});