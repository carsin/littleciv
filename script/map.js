var mapCells = [];

function Map(width, height) {
	this.height = height;
	this.width = width;

	//TODO: Add to cookies

	this.init = function() {
		genMap(this.width, this.height);
	};

	this.getCellId = function(x, y) {
		return $("#map td[data-x='" + x + "'][data-y='" + y + "']").attr("data-cellid");
	};

	this.changeCellId = function(x, y, id) {
		$("#map td[data-x='" + x + "'][data-y='" + y + "']").attr("data-cellid", id);
	};

	this.init();

}

function genMap(width, height) {
	var str;

	for(var y = 0; y < height; y++) {
		str += "<tr>";
    	for(var x = 0; x < width; x++) {
      		str += '<td data-x="' + x + '" data-y="' + y + '" data-cellid="0"></td>';
    	}
    	str += "</tr>";
	}
	$("#map").append(str);
}

function MapCell(id) {
	this.id = id;

	this.init = function() {
		mapCells.push(this);
	};

	this.init();
}