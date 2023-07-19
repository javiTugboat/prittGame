
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import * as animations from './animation'
import gsap from "gsap";
import * as envmap from './envmap'
import * as loaders from './loader'
import { attribute } from './listeners'
import { scenery } from './client'
import { cloudGroupTop,cloudGroupBottom,allCloudsGroup } from './clouds'
import * as collisions from './collisions';

const coinManager = new THREE.LoadingManager();

const loader = new GLTFLoader(coinManager);
var coinMesh,coinVar,coinScene,currentYRot,currentXRot
var envMapAdded = false
var coinIncrement = 0.04
var cloudPosition,coinAnimation
 export function loadCoins (){


loader.load( 'models/coins.glb', function (coinMesh) {
 


        coinVar = coinMesh;

      var model = coinVar.scene;
          model.traverse((o) => {
            if(o.isMesh) o.geometry.computeVertexNormals()
            //  if (o.isMesh) o.material = coininMaterial;
            if(o.isMesh){

              var material = o.material
                if (material.map) {
                  material.map.encoding = THREE.sRGBEncoding;
                  
                }

              }
        
      });
    coinScene = coinVar.scenes[0];
    coinScene.position.set (8,0.5,2.5 );
    coinScene.position.y = cloudGroupTop.position.y - 6;
    //////CHARACTER ROTATION  

    console.log("coinROTATION",coinScene)

    // coinScene.rotation.set (0,1,0.1);
    // coinScene.scale.set (1.15,1.15,1.15);


      // envmap.addEnvMaps();
  
    

  })



}




coinManager.onLoad = function(){
    
  scenery.add(coinScene)
  // loaders.removeSecondLoader();
  animCoins()
  

}

function animCoins(){
  //q: how do i cancel the requestAnimationFrame?

  coinAnimation = requestAnimationFrame(animCoins);

  // Rotate the cube on the Y-axis
  coinScene.rotation.y += 0.12;

}

export function moveCoins(){

  coinScene.position.x -= coinIncrement

  if (coinScene.position.x <= -8){
    cloudPosition = allCloudsGroup.position.y;
    console.log("cloudPosition",cloudPosition)
    coinScene.position.x = 8
    coinScene.position.y = cloudPosition - 6;
    collisions.resetCoin()

  }


}

// export function loadModel(){

//         console.log("exportFunctionWorks")
    
// }
export function removeCoins(){

  scenery.remove(coinScene)

  cancelAnimationFrame(coinAnimation);

}

export{coinScene,coinVar,coinMesh}