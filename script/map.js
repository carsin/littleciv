var width = 12;
var height = 12;

function genMap() {
    var str;
    for(var y = 0; y < height; y++) {
        str += "<tr>";
        for(var x = 0; x < width; x++) {
            str += "<td data-x='" + x + "' data-y='" + y + "'></td>";
        }
        str += "</tr>";
    }
    $("#map").html(str);

}

genMap();
