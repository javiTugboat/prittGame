import * as THREE from 'three'
import { characterScene,characterVar } from './modelLoader'
import { pmremGenerator } from './client'

// import { EXRLoader } from 'three/examples/jsm/loaders/EXRLoader.js';

var envMap,exrCubeRenderTarget,exrBackground;
var bodyParts = [];
var materials = [];
var matArray = [];
var materialSet = new Set();
var scene
var envMapLoaded = false;

export function addEnvMaps(){
  if (!envMapLoaded){
    console.log("LOADINGENVMAP")
    
    const cubemapPath = "img/";
    const cubeMap = [
      `${cubemapPath}clouds1_east.jpg`,
      `${cubemapPath}clouds1_west.jpg`,
      `${cubemapPath}clouds1_up.jpg`,
      `${cubemapPath}clouds1_down.jpg`,
      `${cubemapPath}clouds1_north.jpg`,
      `${cubemapPath}clouds1_south.jpg`,
    ];

      const cubeTextureLoader = new THREE.CubeTextureLoader();
      envMap = cubeTextureLoader.load(cubeMap);


        envMapLoaded = true;
      }

    materials = characterVar.scene.children[0].children;
    // console.log("materials",materials)
  

    scene = characterVar.scene;

    scene.traverse( function( object ) {

        if ( object.material ) materialSet.add( object.material );
        if ( object.material ) matArray.push( object.material );
    } );
 

    setTimeout(function() {
        // console.log(matArray)

        for (var i = 0; i < matArray.length; i++) {

            matArray[i].envMap = envMap
            matArray[i].metalness = 0
            matArray[i].envMapIntensity = 0
            matArray[i].needsUpdate = true
            // matArray[i].map.encoding = THREE.sRGBEncoding;

        }
    
    }, 100)


}

export function removeEnvMaps(){



setTimeout(function() {
    // console.log(matArray)

    for (var i = 0; i < matArray.length; i++) {

        matArray[i].envMap = null;
        matArray[i].envMapIntensity = 0

        matArray[i].needsUpdate = true

        // matArray[i].map.encoding = THREE.sRGBEncoding;

    }

}, 500);

}

export function removeMaterials(){

  for (var i = 0; i < matArray.length; i++) {

    matArray[i].dispose();

    // matArray[i].map.encoding = THREE.sRGBEncoding;

}

}



export {envMap}