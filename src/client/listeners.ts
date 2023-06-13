import * as character from './character'
import * as appControl from './client'
import * as collisions from './collisions'
import * as listeners from './listeners'
import gsap from "gsap"

const button = document.getElementById('btn');
const restartDiv = document.getElementById('restartDiv');
const startDiv = document.getElementById('startDiv');


export function addListeners(){


    button.addEventListener('click',move);

  
    restartDiv.addEventListener('click',moveAgain);


   
}

export function removeListeners(){

    button.removeEventListener('click',move);
}

function move(e){
    appControl.gameHasStarted();
    gsap.to(startDiv,  { autoAlpha:0, duration: 0.35, ease: 'power1.inOut' });

    character.fly();
}

function moveAgain(e){
    collisions.resetAll();
        
    setTimeout(function() {
        collisions.resetCharacter();
        listeners.addListeners();
        restartDiv.style.display = 'none';

    }, 100);
}


