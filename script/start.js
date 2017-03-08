var currentScene;
var smallSize = 50;
var mediumSize = 100;
var largeSize = 200

function setScene(sceneName) {
    var scene = $("#" + sceneName);
    if(!scene.hasClass("scene")) return;
    if(currentScene != undefined) currentScene.hide();
    currentScene = scene;
    currentScene.show();
}

setScene("start");

$("#start-button").click(function() {
    var size;
    if($("#small").is(":checked")) size = smallSize;
    else if($("#medium").is(":checked")) size = mediumSize;
    else if($("#large").is(":checked")) size = largeSize;
    var newLoc = window.location.href.substr(0, window.location.href.lastIndexOf("/")) + "/index.html";
    window.location.href = newLoc + "?name=" + $("#world-name").val() + "&size=" + size;
});
