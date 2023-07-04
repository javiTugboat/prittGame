import * as THREE from 'three'
import gsap from "gsap";

import { characterScene,characterVar } from './modelLoader'
import { fallAnimPlayed } from './character';

var mixer,animUp,animDown,animLoop,actionUp,actionDown,actionLoop
var mixerDown,animUpPlaying = false
var parachute1Target = {number: 0},parachute2Target= {number: 0}, parachute1Morph,parachute2Morph

export function addClips(){
    console.log("CHARVAR",characterVar)
    console.log("CHASCEBE",characterScene)

    animUp = characterVar.animations[1]
    animDown= characterVar.animations[0]
    animLoop= characterVar.animations[2]

    mixer = new THREE.AnimationMixer(characterVar.scene)
    mixerDown = new THREE.AnimationMixer(characterVar.scene)

    actionUp = mixer.clipAction(animUp)
    actionDown = mixerDown.clipAction(animDown)

    actionUp.setLoop(THREE.LoopOnce,0)
    actionDown.setLoop(THREE.LoopOnce,0)

    
    actionUp.clampWhenFinished = true;
    actionDown.clampWhenFinished = true;


    animateMixer()
    mixer.timeScale = 1.5
    mixer.addEventListener('finished', onFinish );
    mixerDown.addEventListener('finished', onFinishUp );

    addMorphAnims();

}

function onFinish(){
    console.log("finish")

animationDown();
}

function onFinishUp(){
    animUpPlaying = false; 

    // console.log("finishUp")

}


function animateMixer(){

    var deltaSeconds = 0.07;
    var deltaSeconds2 = 0.04;

    requestAnimationFrame(animateMixer)
    mixer.update(deltaSeconds)
    mixerDown.update(deltaSeconds2)

}

export function animationUp(){

    // actionDown.play()

}

export function animationDown(){
    actionDown.reset()

    actionDown.play()
    // fallAnimPlayed == false;
}

export function animationLoop(){

    // actionUp.time = 0;

    // mixer.stopAllAction()
    
    if(!animUpPlaying){
        actionUp.reset()
        actionUp.play() 

        animUpPlaying = true;
    }else{}

    
    // mixer.addEventListener( 'finished', function( e	) { fo} ); // properties of e: 


}

export function addMorphAnims(){

    
    var getParachute1 = characterVar.scene.getObjectByName('Objekt-Objekt001_1')
    var getParachute2 = characterVar.scene.getObjectByName('Objekt-Objekt001_2')

    getParachute1.morphTargetInfluences[0] =  parachute1Target.number;
    getParachute2.morphTargetInfluences[0] =  parachute2Target.number;


    parachute1Morph = function(parachute1Target){
        getParachute1.morphTargetInfluences[0] = parachute1Target.number;
    }   

    parachute2Morph = function(parachute2Target){
        getParachute2.morphTargetInfluences[0] = parachute2Target.number;
    }       



}

export function inflateParachute(){
    gsap.to(parachute1Target, 0.5,{delay:0,number:0.8, onUpdate:parachute1Morph, onUpdateParams:[parachute1Target],ease:"back.easeOut"});
    gsap.to(parachute2Target, 0.5,{delay:0,number:0.8, onUpdate:parachute2Morph, onUpdateParams:[parachute2Target],onComplete:deflateParachute,ease:"back.easeOut"});


}

export function deflateParachute(){
    gsap.to(parachute1Target, 0.5,{delay:0,number:0, onUpdate:parachute1Morph, onUpdateParams:[parachute1Target],ease:"back.easeIn"});
    gsap.to(parachute2Target, 0.5,{delay:0,number:0, onUpdate:parachute2Morph, onUpdateParams:[parachute2Target],ease:"back.easeIn"});

}
