var currentScene;

function setScene(sceneName) {
    var scene = $("#" + sceneName);
    if(!scene.hasClass("scene")) return;
    if(currentScene != undefined) currentScene.hide();
    currentScene = scene;
    currentScene.show();
}

setScene("start");
