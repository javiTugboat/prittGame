"use strict";


import { boundBoxMesh,boundBoxMeshBottom,cloudGroupTop,cloudGroupBottom,allCloudsGroup,boxArray } from './clouds'
import { characterMesh,characterGroup } from './character'
import { gameStarted,gameEnded,scenery } from './client'
// import * as score from './score.js';
import * as character from './character';
import * as styles from './styles';
import * as clouds from './clouds';

import * as THREE from 'three'
import * as appControl from './client';
var cloudTrig0,cloudTrig1,cloudTrig2,cloudTrig3,cloudTrig4,cloudTrig5

export function resetAll(){


cloudGroupBottom.position.x = 8;
cloudGroupTop.position.x = 8;
allCloudsGroup.position.y = 0;  
clouds.resetCloudSpeed()

gameStarted == false;

// score.resetScore();


}

export function resetCharacter(){
  
  characterGroup.position.set(0,0,0);
  setTimeout(function() {

    appControl.animate();

    }, 100);
}
var triggerArray = [cloudTrig0,cloudTrig1,cloudTrig2,cloudTrig3,cloudTrig4,cloudTrig5]

export function detectCollisions(){

  var box0 = new THREE.Box3().setFromObject(characterMesh);
  
    var cloudBox1 = new THREE.Box3().setFromObject(boxArray[0].children[0]);
    var cloudBox2 = new THREE.Box3().setFromObject(boxArray[1].children[0]);
    var cloudBox3 = new THREE.Box3().setFromObject(boxArray[2].children[0]);
    var cloudBox4 = new THREE.Box3().setFromObject(boxArray[3].children[0]);
    var cloudBox5 = new THREE.Box3().setFromObject(boxArray[4].children[0]);
    var cloudBox6 = new THREE.Box3().setFromObject(boxArray[5].children[0]);

 
    var intersects1 = box0.intersectsBox(cloudBox1);
    var intersects2 = box0.intersectsBox(cloudBox2);
    var intersects3 = box0.intersectsBox(cloudBox3);
    var intersects4 = box0.intersectsBox(cloudBox4);
    var intersects5 = box0.intersectsBox(cloudBox5);
    var intersects6 = box0.intersectsBox(cloudBox6);


    // var box3 = new THREE.Box3().setFromObject(boundBoxMeshBottom);

    // var intersectsBottom = box1.intersectsBox(box3);


    // if (intersects || intersectsBottom ) {
      if (intersects1 || intersects2 || intersects3 || intersects4 || intersects5 || intersects6 ) {

      appControl.removeListeners(); 

      appControl.stopAnim();
      character.die();
        console.log("collisionsHappebibg")
      } else {
        // No collision
    }

   

}

export function removeCollisionBoxes(){

  var cloudBox1 = null
  var cloudBox2 = null
  var cloudBox3 = null
  var cloudBox4 = null
  var cloudBox5 = null
  var cloudBox6 = null


  var intersects1 = null
  var intersects2 = null
  var intersects3 = null
  var intersects4 = null
  var intersects5 = null
  var intersects6 = null


}