
var domLoaded = false
import * as client from './client'
var loadingContainer = document.getElementById("loadingScreen");

export function launchLoader(){
        // Your function code goes here
      
    document.addEventListener("DOMContentLoaded", function () {
        // Remove the loading screen
        loadingContainer.style.display = "none";
        client.launchMenu();
        console.log("menuLaunched")
    });

}

export function launchSecondLoader(){

    loadingContainer.style.display = "block";



}

export function removeSecondLoader(){

    loadingContainer.style.display = "none";

}
