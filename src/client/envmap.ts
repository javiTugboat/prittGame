import * as THREE from 'three'
import { characterScene,characterVar } from './modelLoader'
import { pmremGenerator } from './client'

import { EXRLoader } from 'three/examples/jsm/loaders/EXRLoader.js';

var envMap,exrCubeRenderTarget,exrBackground;
var bodyParts = [];
var materials = [];
var matArray = [];

export function addEnvMaps(){
    const exrLoader = new EXRLoader();

    // envMap = textureLoader.load('./img/hdr.exr');

    exrLoader.load(
        './img/hdr.exr',
        (texture) => {
          // The texture is loaded successfully
          // You can use the texture in your Three.js scene
          // For example, you can assign it to the envMap property of materials
          envMap = texture;
          texture.mapping = THREE.EquirectangularReflectionMapping;

          exrCubeRenderTarget = pmremGenerator.fromEquirectangular( texture );
          exrBackground = texture;
          console.log("ENVMAP",envMap)
        },
        (progress) => {
          // Progress callback (optional)
        //   console.log('Loading progress:', progress);
        },
        (error) => {
          // Error callback (optional)
        //   console.error('Error loading EXR texture:', error);
        }
      );
    materials = characterVar.scene.children[0].children;
    // console.log("materials",materials)


    

    var materialSet = new Set();
    const scene = characterVar.scene;

    scene.traverse( function( object ) {

        if ( object.material ) materialSet.add( object.material );
        if ( object.material ) matArray.push( object.material );
 
    } );

    setTimeout(function() {
        console.log(matArray)

        for (var i = 0; i < matArray.length; i++) {

            matArray[i].envMap = envMap
            matArray[i].metalness = 0.1
            matArray[i].envMapIntensity = 1.3
            matArray[i].needsUpdate = true

        }
    
    }, 500);




}



export {envMap}