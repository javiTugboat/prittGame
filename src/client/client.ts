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
import gsap from "gsap";

// import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
// import { SMAAPass } from 'three/examples/jsm/postprocessing/SMAAPass';
const canvasDiv = document.getElementById("canvasDiv");
var camera,scenery,look,renderer,pmremGenerator,controls
var gameStarted = false,gameEnded = false,mainAnim,renderAnim;


export function setScene(){

    const scene = new THREE.Scene();
    scenery  = scene;

    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set (0, 0, 20);
    look = new THREE.Vector3 (0,0,0);
    camera.lookAt(look);

    renderer = new THREE.WebGLRenderer( {antialias: true})
    renderer.setSize(window.innerWidth, window.innerHeight)

    ///////ENVMAP STUFF
    pmremGenerator = new THREE.PMREMGenerator( renderer );
    pmremGenerator.compileEquirectangularShader();



    renderer.toneMapping = THREE.LinearToneMapping;
    renderer.toneMappingExposure = 1;

    // const composer = new THREE.EffectComposer(renderer);
    // const smaaPass = new THREE.SMAAPass();
    // composer.addPass(smaaPass);


    // document.body.appendChild(renderer.domElement)
    canvasDiv.appendChild(renderer.domElement)

    controls = new OrbitControls(camera, renderer.domElement)




    window.addEventListener('resize', onWindowResize, false)
    function onWindowResize() {
        styles.checkScreenSize();
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
        renderer.setSize(window.innerWidth, window.innerHeight)
        render()
    }

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
    lights.createLights();
    character.addCharacter();
    models.loadModel();

}

export function loadModulesChar1(){

    

    background.createBackGround();

    clouds.createClouds();
    lights.createLights();
    character.addCharacter();
    models.loadModel1();


}

export function loadModulesChar2(){

    

    background.createBackGround();

    clouds.createClouds();
    lights.createLights();
    character.addCharacter();
    models.loadModel2();


}

export function animateRender(){

        renderAnim = requestAnimationFrame( animateRender );
        render()

}

export function animate() {
    mainAnim = requestAnimationFrame(animate)
    background.updateBackgroundMovement();


    if(gameStarted==true){
        character.fall();
        clouds.moveClouds();
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


export{scenery,gameEnded,gameStarted,pmremGenerator}