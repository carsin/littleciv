var currentScene;

function setScene(sceneName) {
    var scene = $("#" + sceneName);
    if(!scene.hasClass("scene")) return;
    if(currentScene != undefined) currentScene.hide();
    currentScene = scene;
    currentScene.show();
}

setScene("start");

$("#start-button").click(function() {
    var newLoc = window.location.href.substr(0, window.location.href.lastIndexOf("/")) + "/index.html";
    window.location.href = newLoc + "?name=" + $("#world-name").val() + "&size=50";
});
