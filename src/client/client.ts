import './css/style.css'

import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import * as background from './background'
import * as clouds from './clouds'
import * as character from './character'
import * as models from './modelLoader'
import * as lights from './lights'
import * as styles from './styles'
import * as listeners from './listeners'
import * as collisions from './collisions'
import * as score from './score'
import * as animations from './animation'
import * as loader from './loader'
import * as envmaps from './envmap'
import * as coins from './coins'

import * as recycler from './recycler'
// import { gameSessionRunning } from './listeners'

import gsap from "gsap";
import { envMap } from './envmap'

// import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
// import { SMAAPass } from 'three/examples/jsm/postprocessing/SMAAPass';
const canvasDiv = document.getElementById("canvasDiv");
var camera,scenery,look,renderer,pmremGenerator,controls
var gameStarted = false,gameEnded = false,mainAnim,renderAnim;
var sceneIsSetup = false
var sceneIsAnimating = false


export function setScene(){
    if(!sceneIsSetup){

        const scene = new THREE.Scene();
        scenery  = scene;

        camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.set (0, 0, 20);
        look = new THREE.Vector3 (0,0,0);
        camera.lookAt(look);

        renderer = new THREE.WebGLRenderer( {antialias: true})
        renderer.setSize(window.innerWidth, window.innerHeight)
        renderer.encoding = THREE.SRGBColorSpace
        ///////ENVMAP STUFF
        pmremGenerator = new THREE.PMREMGenerator( renderer );
        pmremGenerator.compileEquirectangularShader();
        //q: how do I add black fog to the scene?
        // scenery.fog = new THREE.Fog(0x000000, 0.1, 10);
        console.log("SCENE" , scenery)
        THREE.ColorManagement.enabled = true;



        // renderer.toneMapping = THREE.LinearToneMapping;
        // renderer.toneMappingExposure = 1;

        // const composer = new THREE.EffectComposer(renderer);
        // const smaaPass = new THREE.SMAAPass();
        // composer.addPass(smaaPass);


        // document.body.appendChild(renderer.domElement)
        canvasDiv.appendChild(renderer.domElement)

        controls = new OrbitControls(camera, renderer.domElement)




        window.addEventListener('resize', onWindowResize, false)
        sceneIsSetup = true;
    }else{

        // canvasDiv.appendChild(renderer.domElement)

    }
}

// export function reAppend

function onWindowResize() {
    styles.checkScreenSize();
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
    render()
}

export function launchMenu(){


    styles.addStyles();
    styles.checkScreenSize()
    styles.lowerCurtain()
    listeners.addListeners();

}

//A D D    M O D U L E S   H E R E

export function loadModulesChar4(){

    

    background.createBackGround();

    clouds.createClouds();
    coins.loadCoins();
    lights.createLights();
    character.addCharacter();
    models.loadModel();

}

export function loadModulesChar1(){

    

    background.createBackGround();

    clouds.createTrekkingkRocks();
    clouds.shuffleTrekkingObjects();
    coins.loadCoins();

    lights.createLights();
    character.addCharacter();
    models.loadModel1();

    console.log("entireSCENEFIRST",scenery)

}

export function loadModulesChar2(){
   background.createBackGround();

        clouds.createClouds();
        coins.loadCoins();

        lights.createLights();
        character.addCharacter();
        models.loadModel2();



    

}

export function loadModulesChar3(){

    

    background.createBackGround();

    clouds.createKayakRocks();
    clouds.shuffleKayakObjects();
    coins.loadCoins();

    lights.createLights();
    character.addCharacter();
    models.loadModel3();


}


export function animateRender(){
    // if(!sceneIsAnimating){
        renderAnim = requestAnimationFrame( animateRender );
        render()
        sceneIsAnimating = true;
    // }else{}
}

export function animate() {
    mainAnim = requestAnimationFrame(animate)
    background.updateBackgroundMovement();


    if(gameStarted==true){
        character.fall();
        clouds.moveClouds();
        coins.moveCoins();
        collisions.detectCollisions();
        score.countScore();
        // cameracontrol.panCamera(); 
  
  
      }else{
          // stopAnim();
      }


    controls.update()

}

function render() {
    renderer.render(scenery, camera)
}

export function gameHasStarted(){

    gameStarted = true;
        
}

export function stopAnim(){

    cancelAnimationFrame(mainAnim);

}

export function removeListeners(){

    listeners.removeListeners();
}

export function endTheGame(){
    styles.showRestart();
    score.resetScore();

}

loader.launchLoader();

// setScene()
// animate()
// animateRender()

export function deleteScene(){
    models.removeModel()
    envmaps.removeMaterials()
    animations.stopAnims();
    clouds.removeClouds()
    background.removeBackground()
    collisions.removeCollisionBoxes()
    // lights.removeLights()
    envmaps.removeEnvMaps()
    coins.removeCoins()
    listeners.clearCodeScreen()
    setTimeout(function(){

        // scenery = null;
        // window.removeEventListener('resize', onWindowResize);
        
        // recycler.recycleWorld()
    
        // canvasDiv.removeChild(renderer.domElement)


    },500)
 
  
    // camera.dispose();

}



export{scenery,gameEnded,gameStarted,pmremGenerator,sceneIsSetup}