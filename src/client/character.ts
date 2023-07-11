import * as THREE from 'three'
import { scenery } from './client'
import gsap from "gsap";
// import { scenery,gameEnded } from './app.js'
import { characterScene,characterVar } from './modelLoader'

import * as collisions from './collisions';
import * as appControl from './client';
import * as animations from './animation';
import * as models from './modelLoader';

var geometry,material,characterMesh,currentPos,characterPosRound;

var upperBound,lowerBound,charX,charY,charZ,scaleX,scaleY,scaleZ,x,y,z;
var ascent,rotZ,ascentDuration,clockwiseAnimationDuration,descentDuration,rotationBound,incrementalY,posZ,incrementalHeight,newPosition,box;
var descentAnimation,actualPosition,descentDuration,ascentDuration,ascentAnimation,clockwiseAnimation,charPosY,charPos,characterGroup, flyTL;
var fallAnimPlayed = false;

export function addCharacter(){

    //crear geometria temporal
     y = 1.8;
    characterGroup = new THREE.Group(); 
    geometry = new THREE.BoxGeometry (y,y,y);
    // Las primitivas básicas se crean centradas en el origen
    // Se puede modificar su posición con respecto al sistema de coordenadas local con una transformación aplicada directamente a la geometría.
    // Como material se crea uno a partir de un color
    material = new THREE.MeshBasicMaterial({color: 0xe68a00,opacity:0,transparent:true});
    geometry.translate(0, y/2, 0);
    // this.posY = posY;
    // g.position.set (0,0,0);
    
    characterMesh = new THREE.Mesh( geometry, material);
    characterGroup.add(characterMesh)
    scenery.add(characterGroup)
    console.log("CHARACTERGROUP",characterGroup)


    scaleX = scaleY = scaleZ = 0.1
    

    

   
    // this.scale.set(this.scaleX ,this.scaleY ,this.scaleZ);
    characterMesh.position.set (-2,0,1.5);

    // Instanciacion de variables para la subida y bajada

    actualPosition = {y: 0};
    newPosition = {y: 0};

   

   box = new THREE.Box3();

}



  // Acción de volar del pato)
  export function fly(){
     currentPos = characterGroup.position.y;
    var flyPos = characterGroup.position.y + 0.52    // characterGroup.position.y += 0.8;

    gsap.fromTo(characterGroup.position, { y: currentPos }, { y: flyPos, duration: 0.35, ease: 'back.out' });

    animations.animationLoop()

    animations.inflateParachute()
    // models.tilt()  

    gsap.to(characterScene.rotation, { duration: 0.4, z:-0.1, ease: "power2.out",onComplete:rotateBack });


  }

  export function fly1(){
    currentPos = characterGroup.position.y;
   var flyPos = characterGroup.position.y + 0.52    // characterGroup.position.y += 0.8;

   gsap.fromTo(characterGroup.position, { y: currentPos }, { y: flyPos, duration: 0.35, ease: 'back.out' });

   animations.animationLoop1()

  //  animations.inflateParachute()
   // models.tilt()  

   gsap.to(characterScene.rotation, { duration: 0.4, y:2, x:0.1, ease: "power2.out",onComplete:rotateBack1,overwrite:true });


 }

 export function fly2(){
  currentPos = characterGroup.position.y;
 var flyPos = characterGroup.position.y + 0.52    // characterGroup.position.y += 0.8;

 gsap.fromTo(characterGroup.position, { y: currentPos }, { y: flyPos, duration: 0.35, ease: 'back.out',overwrite:true });

 animations.animationLoop2()

//  animations.inflateParachute()
 // models.tilt()  

 gsap.to(characterScene.rotation, { duration: 0.4, z:-0.1, ease: "power2.out",onComplete:rotateBack });


}

export function fly3(){
  currentPos = characterGroup.position.y;
 var flyPos = characterGroup.position.y + 0.52    // characterGroup.position.y += 0.8;

 gsap.fromTo(characterGroup.position, { y: currentPos }, { y: flyPos, duration: 0.35, ease: 'back.out' });

 animations.animationLoop3()

//  animations.inflateParachute()
 // models.tilt()  

 gsap.to(characterScene.rotation, { duration: 0.4, y:2.2, x:0.7, ease: "power2.out",onComplete:rotateBack3,overwrite:true });


}


  function rotateBack(){
    gsap.to(characterScene.rotation, { duration: 1, z:0.2, ease: "power1.inOut",overwrite:true });

  }

  function rotateBack1(){
    gsap.to(characterScene.rotation, { duration: 0.4, y:0.5,x:0.5, ease: "power1.inOut",overwrite:true });

  }

  function rotateBack3(){
    gsap.to(characterScene.rotation, { duration: 0.9, y:0.5,x:0.5, ease: "power1.inOut",overwrite:true });

  }

  export function fall(){

    checkBirdFallen();

    switch (true) {
        case characterGroup.position.y > 0.5:
          characterGroup.position.y -= 0.04;

          break;
          
        case characterGroup.position.y <= 0.5:
          characterGroup.position.y -= 0.05;

          break;

      }


  }

  export function die(){

    var currentPos = characterGroup.position.y;
    var diePos = -11 // characterGroup.position.y += 0.8;
   
    gsap.fromTo(characterGroup.position, { y: currentPos }, { y: diePos, duration: 0.8, ease: 'back.in',onComplete:controlEnd});

  }

  function controlEnd(){

    appControl.endTheGame();


  }

  function checkBirdFallen(){
     characterPosRound = Math.round(characterGroup.position.y);
    // console.log(characterPosRound);

      if (characterPosRound <= -8){
        
        appControl.stopAnim();
        collisions.resetAll();
        appControl.removeListeners();
        die();
      }

  }

export function update(){


}



export {characterMesh,characterGroup,currentPos,characterPosRound,fallAnimPlayed}