import * as THREE from 'three'
import { characterScene,characterVar } from './modelLoader'
import { fallAnimPlayed } from './character';

var mixer,animUp,animDown,animLoop,actionUp,actionDown,actionLoop
var mixerDown,animUpPlaying = false
export function addClips(){
    console.log("CHARVAR",characterVar)

    animUp = characterVar.animations[2]
    animDown= characterVar.animations[1]
    animLoop= characterVar.animations[0]

    mixer = new THREE.AnimationMixer(characterVar.scene)
    mixerDown = new THREE.AnimationMixer(characterVar.scene)

    actionUp = mixer.clipAction(animUp)
    actionDown = mixerDown.clipAction(animDown)
    // actionLoop = mixer.clipAction(animLoop)
    // actionUp.setLoop(THREE.LoopPingPong)
    actionUp.setLoop(THREE.LoopOnce,0)
    actionDown.setLoop(THREE.LoopOnce,0)

    // actionLoop.setLoop(THREE.LoopPingPong,0)

  
    // actionUp.play()  
    // actionDown.play()
    // actionUp.play() 
    // actionLoop.play() 

    // mixer.stopAllAction()

    
    actionUp.clampWhenFinished = true;
    actionDown.clampWhenFinished = true;

// 
    animateMixer()
    mixer.addEventListener('finished', onFinish );
    mixerDown.addEventListener('finished', onFinishUp );

    // actionLoop.play()
    // mixer.addEventListener( 'finished', function( e ) {/*actionUp.halt(0.1)*/ console.log("finished")} );
}

function onFinish(){
    console.log("finish")

animationDown();
}

function onFinishUp(){
    animUpPlaying = false; 

    console.log("finishUp")

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

