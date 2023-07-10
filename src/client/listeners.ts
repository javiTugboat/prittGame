import * as character from './character'
import * as appControl from './client'
import * as collisions from './collisions'
import * as listeners from './listeners'
import * as loader from './loader'

import gsap from "gsap"

const button = document.getElementById('btn');

const restartDiv = document.getElementById('restartDiv');
const startDiv = document.getElementById('startDiv');


const startGif = <HTMLInputElement>document.getElementById('startGif');

const character1 = document.getElementById('character1');
const menu2 = document.getElementById('menu2' );
const menu1 = document.getElementById('menu1' );

const button1 = document.getElementById('button1');
var attribute;

const enterCodeScreen = document.getElementById('enterCodeScreen' );
const codeScreen1 = document.getElementById('codeScreen1' );
const codeScreen2 = document.getElementById('codeScreen2' );
const codeScreen3 = document.getElementById('codeScreen3' );
const codeScreen4 = document.getElementById('codeScreen4' );
const closeButt = document.getElementById('closeButt' );
const applyButt = document.getElementById('applyButt' );


export function addListeners(){
    gsap.set(enterCodeScreen,  { autoAlpha:0,scale:0.95 });

    var elements = document.getElementsByClassName("charButtons");


    button.addEventListener('click',move);

  
    restartDiv.addEventListener('click',moveAgain);

    // character1.addEventListener('click',startGame);

    button1.addEventListener('click',chooseMiniGame);

    for (var i = 0; i < elements.length; i++) {
        console.log(elements)
        elements[i].addEventListener('click', codeClicks, false);

    }

    closeButt.addEventListener('click',closeCodeScreen);
    applyButt.addEventListener('click',startGame);

}


export function removeListeners(){

    button.removeEventListener('click',move);
}

function move(e){
    appControl.gameHasStarted();
    gsap.to(startDiv,  { autoAlpha:0, duration: 0.35, ease: 'power1.inOut' });


    switch (attribute){

        case 'character1':
            character.fly1();

        break;

        case 'character2':
            character.fly2();

        break;

        case 'character3':
            character.fly3();

        break;

        case 'character4':
            character.fly();

        break;
        
        default: 

    }



}

function moveAgain(e){
    collisions.resetAll();
        
    setTimeout(function() {
        collisions.resetCharacter();
        listeners.addListeners();
        restartDiv.style.display = 'none';

    }, 100);
}



function chooseMiniGame(e){

    gsap.to(menu1,  { autoAlpha:0, duration: 0.35, ease: 'power1.inOut' }); 


}

function codeClicks(e){

    gsap.to(enterCodeScreen,  { autoAlpha:1, duration: 0.35, ease: 'back.out',scale:1 });

    attribute = this.getAttribute("id");
    console.log("whichCharClicked?", attribute)

    switch (attribute){

        case 'character1':

            codeScreen1.style.display = "block"
            /*q: how do i change the image source of a gif with javascript?   
            a:              

            */


            
            startGif.src = "assets/start_Trekking.gif"
        break;

        case 'character2':
            codeScreen2.style.display = "block"
            startGif.src = "assets/start_Climber.gif"

        break;

        case 'character3':
            codeScreen2.style.display = "block"
            startGif.src = "assets/start_Kayak.gif"

        break;

        case 'character4':
            codeScreen2.style.display = "block"
            startGif.src = "assets/start_Parachute.gif"

        break;
        
        default: 

    }


}

function closeCodeScreen(e){

    gsap.to(enterCodeScreen,  { autoAlpha:0, duration: 0.35, ease: 'back.inOut',scale:0.95 });



}

function startGame(e){

    gsap.to(menu2,  { autoAlpha:0, duration: 0.35, ease: 'power1.inOut' });

    switch (attribute){

        case 'character1':
            
            console.log('character1')

            loader.launchSecondLoader()
            
            setTimeout(function() {
            
                appControl.setScene()
                appControl.loadModulesChar1()
                appControl.animateRender()
                appControl.animate()      
            
            }, 500);
           

        break;

        case 'character2':
            console.log('character2')

            loader.launchSecondLoader()
            
            setTimeout(function() {
            
                appControl.setScene()
                appControl.loadModulesChar2()
                appControl.animateRender()
                appControl.animate()      
            
            }, 500);
            
        break;

        case 'character3':

            loader.launchSecondLoader()
            
            setTimeout(function() {
            
                appControl.setScene()
                appControl.loadModulesChar3()
                appControl.animateRender()
                appControl.animate()      
            
            }, 500);

        break;

        case 'character4':
            console.log('character4')

            loader.launchSecondLoader()
            
            setTimeout(function() {
            
                appControl.setScene()
                appControl.loadModulesChar4()
                appControl.animateRender()
                appControl.animate()      
            
            }, 500);

        break;
        
        default: 

    }


}

export{attribute}