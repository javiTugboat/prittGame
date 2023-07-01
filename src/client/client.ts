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


const scene = new THREE.Scene();
var scenery  = scene;
var gameStarted = false,gameEnded = false,mainAnim,renderAnim;

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set (0, 0, 20);
var look = new THREE.Vector3 (0,0,0);
camera.lookAt(look);

const renderer = new THREE.WebGLRenderer( {antialias: true})
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

const controls = new OrbitControls(camera, renderer.domElement)




window.addEventListener('resize', onWindowResize, false)
function onWindowResize() {
    styles.checkScreenSize();
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
    render()
}

//A D D    M O D U L E S   H E R E
loader.launchLoader();

styles.addStyles();
styles.checkScreenSize()

background.createBackGround();
listeners.addListeners();

clouds.createClouds();
lights.createLights();
character.addCharacter();
models.loadModel();

function animateRender(){

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
    renderer.render(scene, camera)
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

animate()
animateRender()
export{scenery,gameEnded,gameStarted}