
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import * as animations from './animation'
import gsap from "gsap";
import * as envmap from './envmap'
import * as loaders from './loader'
import { attribute } from './listeners'
import { scenery } from './client'

const coinManager = new THREE.LoadingManager();

const loader = new GLTFLoader(coinManager);
var coinMesh,coinVar,coinScene,currentYRot,currentXRot
var envMapAdded = false

 export function loadCoins (){


loader.load( 'models/parapente.glb', function (coinMesh) {
 


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
    coinScene.position.set (-2,0.5,2 );

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

  

}

// export function loadModel(){

//         console.log("exportFunctionWorks")
    
// }


export{coinScene,coinVar}