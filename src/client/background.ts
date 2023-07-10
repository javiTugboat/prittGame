import * as THREE from 'three'

import { scenery } from './client'

var time = 0,background,staticBg,backgroundWidth
var texture = new THREE.TextureLoader().load('img/width_fondo_bar2.png')
var texture1 = new THREE.TextureLoader().load('img/width_fondo_bar1.png')
var texture2 = new THREE.TextureLoader().load('img/width_fondo_bar.png')

var textureStatic = new THREE.TextureLoader().load('img/staticBg.jpg')
var bgTimeIncrement = 0.0045
import { attribute } from './listeners'


export function createBackGround () {
    // Valor para mover el fondo
    // Una figura es un Mesh
    background = new THREE.Mesh ();
    staticBg = new THREE.Mesh ();
    // Un Mesh se compone de geometría y material
    var size_x_background = 30;
    var size_y_background = 20;
    background.geometry = new THREE.BoxGeometry(size_x_background, size_y_background);
    staticBg.geometry = new THREE.BoxGeometry(size_x_background, size_y_background);

    // Las primitivas básicas se crean centradas en el origen
    // Como material se crea uno a partir de una textura
  

    texture.wrapS = THREE.RepeatWrapping;
    texture1.wrapS = THREE.RepeatWrapping;
    texture2.wrapS = THREE.RepeatWrapping;

    setBg()
    staticBg.material = new THREE.MeshBasicMaterial ({map: textureStatic});

    // Por último se añade el suelo a la escena
    background.position.z = -2;
    // background.rotation.y = -0.1;
    staticBg.position.z = -2.5;

    scenery.add(background,staticBg);
    // console.log(background)
    // // backgroundWidth= background.material.map.image.width;
    // // console.log("backgroundWidth",backgroundWidth);
    // console.log("backgroundWidth",background.material);

   

  }

  function setBg(){

    switch (attribute){

      case 'character1':
        background.material = new THREE.MeshBasicMaterial ({map: texture1,transparent:true});

      break;
  
      case 'character2':
        background.material = new THREE.MeshBasicMaterial ({map: texture2,transparent:true});

      break;
  
      case 'character3':
  
      break;
  
      case 'character4':
        background.material = new THREE.MeshBasicMaterial ({map: texture,transparent:true});

      break;
      
      default: 
  
      }

  }

  export function updateBackgroundMovement(){
    time++;

    switch (attribute){

      case 'character1':
        texture1.offset.x = time*bgTimeIncrement;

      break;
  
      case 'character2':
        texture2.offset.x = time*bgTimeIncrement;

      break;
  
      case 'character3':
  
      break;
  
      case 'character4':
        texture.offset.x = time*bgTimeIncrement;

      break;
      
      default: 
  
      }

  }


  export function addSpeed(){
    // bgTimeIncrement = bgTimeIncrement * 1.05;
    console.log(bgTimeIncrement)

  }
  export {bgTimeIncrement}