
import * as THREE from 'three'
import { characterGroup } from './character'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import * as animations from './animation'
import gsap from "gsap";
import * as envmap from './envmap'
import * as loaders from './loader'
import { attribute } from './listeners'

const manager = new THREE.LoadingManager();

const loader = new GLTFLoader(manager);
var characterMesh,characterVar,characterScene,currentYRot,currentXRot


 export function loadModel (){


loader.load( 'models/parapente.glb', function (characterMesh) {
 


        characterVar = characterMesh;

      var model = characterVar.scene;
          model.traverse((o) => {
            if(o.isMesh) o.geometry.computeVertexNormals()
            //  if (o.isMesh) o.material = characterinMaterial;

        
      });
    characterScene = characterVar.scenes[0];
    characterScene.position.set (-2,0.5,2 );

    //////CHARACTER ROTATION

    console.log("characterROTATION",characterScene)

    characterScene.rotation.set (0,1,0.1);
    characterScene.scale.set (1.15,1.15,1.15);
    envmap.addEnvMaps();

    

  })



}


export function loadModel1 (){


  loader.load( 'models/trekking.glb', function (characterMesh) {
   
  
  
          characterVar = characterMesh;
  
        var model = characterVar.scene;
            model.traverse((o) => {
              if(o.isMesh) o.geometry.computeVertexNormals()
              //  if (o.isMesh) o.material = characterinMaterial;
  
          
        });
      characterScene = characterVar.scenes[0];
      characterScene.position.set (-2,0.5,2 );
  
      //////CHARACTER ROTATION
  
      console.log("characterROTATION",characterScene)
  
      characterScene.rotation.set (0,1,0.1);
      characterScene.scale.set (1.35,1.35,1.35);
      envmap.addEnvMaps();
  
      
  
    })
  
  
  
  }

  export function loadModel2(){


    loader.load( 'models/climber.glb', function (characterMesh) {
     
    
    
            characterVar = characterMesh;
    
          var model = characterVar.scene;
              model.traverse((o) => {
                if(o.isMesh) o.geometry.computeVertexNormals()
                //  if (o.isMesh) o.material = characterinMaterial;
    
            
          });
        characterScene = characterVar.scenes[0];
        characterScene.position.set (-2,0.5,2 );
    
        //////CHARACTER ROTATION
    
        console.log("characterROTATION",characterScene)
    
        characterScene.rotation.set (0,-3.5,0.1);
        characterScene.scale.set (1.35,1.35,1.35);
        envmap.addEnvMaps();
    
        
    
      })
    
    
    
  } 


  export function loadModel3(){


    loader.load( 'models/kayak.glb', function (characterMesh) {
     
    
    
            characterVar = characterMesh;
    
          var model = characterVar.scene;
              model.traverse((o) => {
                if(o.isMesh) o.geometry.computeVertexNormals()
                //  if (o.isMesh) o.material = characterinMaterial;
    
            
          });
        characterScene = characterVar.scenes[0];
        characterScene.position.set (-2,0.5,2 );
    
        //////CHARACTER ROTATION
    
        console.log("characterROTATION",characterScene)
    
        characterScene.rotation.set (0,1,0.1);
        characterScene.scale.set (1.15,1.15,1.15);
        envmap.addEnvMaps();
    
        
    
      })
    
    
    
  } 

  export function swapModel(){

   
  
    switch (attribute){
  
        case 'character1':
    
        break;
    
        case 'character2':
    
        break;
    
        case 'character3':
    
        break;
    
        case 'character4':

        break;
        
        default: 

     }

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
  loaders.removeSecondLoader();

  switch (attribute){

    case 'character1':
      animations.addClips1();

    break;

    case 'character2':
      animations.addClips2();

    break;

    case 'character3':
      animations.addCLips3();

    break;

    case 'character4':
        animations.addClips4();
    break;
    
    default: 

}

}

// export function loadModel(){

//         console.log("exportFunctionWorks")
    
// }


export{characterScene,characterVar}