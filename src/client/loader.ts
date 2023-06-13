
var domLoaded = false
export function launchLoader(){
        // Your function code goes here
      
    document.addEventListener("DOMContentLoaded", function () {
        // Remove the loading screen
        var loadingContainer = document.getElementById("loadingScreen");
        loadingContainer.style.display = "none";
    });

}