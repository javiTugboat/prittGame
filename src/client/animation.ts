import * as THREE from 'three'
import gsap from "gsap";

import { characterScene,characterVar } from './modelLoader'
import { fallAnimPlayed } from './character';

var mixer,animUp,animDown,animLoop,actionUp,actionDown,actionLoop
var trek,trekAction
var climb,climbDown,climbAction,climbDownAction,climbUpPlaying = false
var row,pala,rowAction,palaAction,palaMixer
var mixerDown,animUpPlaying = false
var parachute1Target = {number: 0},parachute2Target= {number: 0}, parachute1Morph,parachute2Morph

export function addClips4(){
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

export function addClips1(){

    console.log("CHARVAR",characterVar)
    console.log("CHASCEBE",characterScene)
    trek = characterVar.animations[0]
    console.log("TREK",trek)
    mixer = new THREE.AnimationMixer(characterVar.scene)
    trekAction = mixer.clipAction(trek)
    trekAction.setLoop(THREE.LoopOnce,0)
    trekAction.clampWhenFinished = true;
    animateMixer1()
    mixer.timeScale = 1.5
    mixer.addEventListener('finished', onFinish1 );


}

export function addClips2(){

    console.log("CHARVAR",characterVar)
    climb = characterVar.animations[0]
    climbDown = characterVar.animations[1]
    mixer = new THREE.AnimationMixer(characterVar.scene)
    mixerDown = new THREE.AnimationMixer(characterVar.scene)

    climbAction = mixer.clipAction(climb)
    climbDownAction = mixerDown.clipAction(climbDown)
    climbAction.setLoop(THREE.LoopOnce,0)
    climbDownAction.setLoop(THREE.LoopOnce,0)
    climbAction.clampWhenFinished = true;
    climbDownAction.clampWhenFinished = true;

    animateMixer2()
    mixer.timeScale = 1.2

    mixer.addEventListener('finished', onFinish2 );
    // mixerDown.addEventListener('finished', onFinishUp2 );

}

export function addCLips3(){
    console.log("CHARVAR",characterVar)
    row  = characterVar.animations[1]
    pala = characterVar.animations[0]
    mixer = new THREE.AnimationMixer(characterVar.scene)
    palaMixer = new THREE.AnimationMixer(characterVar.scene.children[0])
    rowAction = mixer.clipAction(row)
    rowAction.setLoop(THREE.LoopOnce,0)
    palaAction = palaMixer.clipAction(pala)
    palaAction.setLoop(THREE.LoopOnce,0)
    palaAction.clampWhenFinished = true;
    rowAction.clampWhenFinished = true;
    animateMixer3()
    animatePalaMixer()
    mixer.timeScale = 0.6

}

function onFinish(){

animationDown();
}

function onFinish1(){

animationDown1();
}

function onFinish2(){

animationDown2();
}

function onFinishUp(){
    animUpPlaying = false; 

    // console.log("finishUp")

}

function onFinishUp2(){

    climbUpPlaying = false; 

}


function animateMixer(){

    var deltaSeconds = 0.07;
    var deltaSeconds2 = 0.04;

    requestAnimationFrame(animateMixer)
    mixer.update(deltaSeconds)
    mixerDown.update(deltaSeconds2)

}

function animateMixer1(){

    var deltaSeconds = 0.035;
    requestAnimationFrame(animateMixer1)
    mixer.update(deltaSeconds)

}

function animateMixer2(){

    var deltaSeconds = 0.07;
    requestAnimationFrame(animateMixer2)
    mixer.update(deltaSeconds)
    var deltaSeconds2 = 0.04;
    mixerDown.update(deltaSeconds2)

}

function animateMixer3(){

    var deltaSeconds = 0.07;
    requestAnimationFrame(animateMixer3)
    mixer.update(deltaSeconds)

}

function animatePalaMixer(){

    var deltaSeconds = 0.07;
    requestAnimationFrame(animatePalaMixer)
    mixer.update(deltaSeconds)

}


export function animationUp(){

    // actionDown.play()

}

export function animationDown(){
    actionDown.reset()

    actionDown.play()
}

export function animationDown1(){

    trekAction.reset()
    trekAction.play() 

}

export function animationDown2(){
    climbDownAction.reset()

    climbDownAction.play()
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

export function animationLoop1(){


    
        trekAction.reset()
        trekAction.play() 


    


}

export function animationLoop3(){


    
    rowAction.reset()
    rowAction.play() 
    palaAction.reset()
    palaAction.play() 




}

export function animationLoop2(){


    
    if(!animUpPlaying){
        climbAction.reset()
        climbAction.play() 

        climbUpPlaying = true;
    }else{}

    


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
