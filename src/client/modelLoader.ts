
import * as THREE from 'three'
import { characterGroup } from './character'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import * as animations from './animation'
import gsap from "gsap";

const manager = new THREE.LoadingManager();

const loader = new GLTFLoader(manager);
var characterMesh,characterVar,characterScene,currentYRot,currentXRot


 export function loadModel (){


loader.load( 'models/character.glb', function (characterMesh) {
 


        characterVar = characterMesh;

      var model = characterVar.scene;
          model.traverse((o) => {
            if(o.isMesh) o.geometry.computeVertexNormals()
            //  if (o.isMesh) o.material = characterinMaterial;

        
      });
    console.log("chatacterVar",characterVar)
    characterScene = characterVar.scenes[0];
    characterScene.position.set (-2,0.5,2 );
    characterScene.rotation.set (-0.2,1,-0.2);
    characterScene.scale.set (1.5,1.5,1.5);


  })



}


export function tilt(){

  currentYRot = characterScene.rotation.y
  currentXRot = characterScene.rotation.x

  gsap.fromTo(characterScene.rotation, { y: currentYRot }, { y: 1.5, duration: 0.4, ease: 'Power1.out',overwrite:true,onComplete:tiltBack});
  // gsap.fromTo(characterScene.rotation, { x: currentXRot }, { x: -1, duration: 0.8, ease: 'back.out',overwrite:true });


}

export function tiltBack(){

  currentYRot = characterScene.rotation.y
  currentXRot = characterScene.rotation.x
  gsap.fromTo(characterScene.rotation, { y: currentYRot }, { y: 1, duration: 0.6, ease: 'Power1.out',overwrite:true });

  // gsap.fromTo(characterScene.rotation, { x: currentYRot }, { x:0.1, duration: 0.35, ease: 'back.out',overwrite:true });

}


manager.onLoad = function(){
    
  characterGroup.add(characterScene)
  animations.addClips();


}

// export function loadModel(){

//         console.log("exportFunctionWorks")
    
// }


export{characterScene,characterVar}