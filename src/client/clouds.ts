import * as THREE from 'three'
import { scenery } from './client'

var cloudUpMesh,cloudUpTexture,cloudUpMaterial,cloudUp,cloudUpHeight,cloudUpMaterial,cloudUpYPosition,cloudUpXposition;
var trekkingBushTexture,trekkingTreeTexture,trekkingArray
var kayakGreenRockTexture,kayakBushTexture,kayakArray
var cloudDownMesh,cloudDownTexture,cloudDownMaterial,cloudDown,cloudDownWidth,cloudDownHeight,cloudDownMaterial,cloudDownYPosition,cloudDownXposition,cloudGroupXPos
var cloudGroupBottom,cloudUpWidth

var boundBoxGeometry,boundBoxMaterial,boundBoxMesh,boundBoxMeshBottom;

var extraCloudUp,extraCloudDown,topCloudDown,middleCloudDown
var cloudArray,boxArray = [];
var cloudGroupTop = new THREE.Group();
var allCloudsGroup = new THREE.Group();

var cloudTopIncrement = 0.08,cloudBottomIncrement = 0.079;

export function createBoundingBoxes(){

    boundBoxGeometry = new THREE.BoxGeometry (3.8,2,2);

    boundBoxMaterial = new THREE.MeshBasicMaterial({color: 0xe68a00,opacity:0,transparent:true});
    
    boundBoxMesh = new THREE.Mesh( boundBoxGeometry, boundBoxMaterial);

    cloudUp.add(boundBoxMesh);
    
}


export function createClouds(){

  
    cloudUpWidth = 6.5;
    cloudUpHeight = 3.5;
    cloudGroupXPos = cloudUpWidth * 2;

    cloudUpTexture= new THREE.TextureLoader().load('img/clouds.png');
    cloudUpMaterial = new THREE.MeshBasicMaterial ({map: cloudUpTexture,transparent:true});
    cloudUpMesh = new THREE.BoxGeometry (cloudUpWidth,  cloudUpHeight, 0);
    
    cloudUp = new THREE.Mesh(cloudUpMesh, cloudUpMaterial);
    cloudUp.rotation.x = 0.2;
    cloudDownYPosition = -3;
    createBoundingBoxes();

    cloudDown = cloudUp.clone();
    extraCloudUp = cloudUp.clone();

    cloudDown.position.y = cloudDownYPosition;
    extraCloudUp.position.y = 3;

    cloudGroupTop.add(cloudUp,cloudDown,extraCloudUp);


     cloudGroupBottom = cloudGroupTop.clone();

    cloudGroupTop.position.set( cloudGroupXPos,7,0)
    cloudGroupBottom.position.set(cloudGroupXPos,-3,0)

    allCloudsGroup.add(cloudGroupTop,cloudGroupBottom);

    scenery.add(allCloudsGroup);

    extraCloudDown = cloudGroupBottom.children[2];

    // boundBoxMeshBottom = cloudGroupBottom.children[3];
    
    topCloudDown = cloudGroupBottom.children[0];
    middleCloudDown = cloudGroupBottom.children[1];

    // boundBoxMeshBottom.position.y = -3;
    extraCloudDown.position.y = -6;
    
    allCloudsGroup.position.z = 1.5;

    cloudArray = [cloudUp,cloudDown,extraCloudUp,topCloudDown,middleCloudDown,extraCloudDown]
    resizeClouds();

}

export function createKayakRocks(){


    cloudUpWidth = 6.5;
    cloudUpHeight = 3.5;
    cloudGroupXPos = cloudUpWidth * 2;

    cloudUpTexture= new THREE.TextureLoader().load('img/kayakRocks.png');
    kayakBushTexture= new THREE.TextureLoader().load('img/kayakBush.png');
    kayakGreenRockTexture= new THREE.TextureLoader().load('img/kayakRocks2.png');
    kayakBushTexture.encoding = THREE.sRGBEncoding;
    kayakGreenRockTexture.encoding = THREE.sRGBEncoding;

    cloudUpMaterial = new THREE.MeshBasicMaterial ({map: cloudUpTexture,transparent:true});
    cloudUpMesh = new THREE.BoxGeometry (cloudUpWidth,  cloudUpHeight, 0);
    
    cloudUp = new THREE.Mesh(cloudUpMesh, cloudUpMaterial);
    cloudUp.rotation.x = 0.2;
    cloudDownYPosition = -3;
    createBoundingBoxes();

    cloudDown = cloudUp.clone();
    extraCloudUp = cloudUp.clone();

    cloudDown.position.y = cloudDownYPosition;
    extraCloudUp.position.y = 3;

    cloudGroupTop.add(cloudUp,cloudDown,extraCloudUp);


     cloudGroupBottom = cloudGroupTop.clone();

    cloudGroupTop.position.set( cloudGroupXPos,7,0)
    cloudGroupBottom.position.set(cloudGroupXPos,-3,0)

    allCloudsGroup.add(cloudGroupTop,cloudGroupBottom);
    allCloudsGroup.name = "allCloudsGroup";

    scenery.add(allCloudsGroup);

    extraCloudDown = cloudGroupBottom.children[2];

    // boundBoxMeshBottom = cloudGroupBottom.children[3];
    
    topCloudDown = cloudGroupBottom.children[0];
    middleCloudDown = cloudGroupBottom.children[1];

    // boundBoxMeshBottom.position.y = -3;
    extraCloudDown.position.y = -6;
    
    allCloudsGroup.position.z = 1.5;

    cloudArray = [cloudUp,cloudDown,extraCloudUp,topCloudDown,middleCloudDown,extraCloudDown]
    kayakArray = [cloudUpTexture,kayakBushTexture,kayakGreenRockTexture]

    resizeClouds();

}

export function shuffleKayakObjects(){

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
    }

    shuffleArray(kayakArray);

    for (let i = 0; i < cloudArray.length; i++) {
        const mesh = cloudArray[i];
        const texture = kayakArray[i % kayakArray.length];
      
        // Assuming the mesh has a single material and you want to apply the texture as a map
        mesh.material = mesh.material.clone();
        mesh.material.map = texture;
        mesh.material.needsUpdate = true;
      }




}


export function createTrekkingkRocks(){


    cloudUpWidth = 5;
    cloudUpHeight = 3.5;
    cloudGroupXPos = cloudUpWidth * 2;

    cloudUpTexture = new THREE.TextureLoader().load('img/trekkingRocks.png');
    trekkingBushTexture = new THREE.TextureLoader().load('img/trekkingTree.png');
    trekkingTreeTexture = new THREE.TextureLoader().load('img/trekkingBush.png');
    trekkingBushTexture.encoding = THREE.sRGBEncoding;
    trekkingTreeTexture.encoding = THREE.sRGBEncoding;
    cloudUpMaterial = new THREE.MeshBasicMaterial ({map: cloudUpTexture,transparent:true});
    cloudUpMesh = new THREE.BoxGeometry (cloudUpWidth,  cloudUpHeight, 0);
     
    cloudUp = new THREE.Mesh(cloudUpMesh, cloudUpMaterial);
    cloudUp.rotation.x = 0.2;
    cloudDownYPosition = -3;
    createBoundingBoxes();

    cloudDown = cloudUp.clone();
    cloudDown.name = "cloudDowny"
    extraCloudUp = cloudUp.clone();

    cloudDown.position.y = cloudDownYPosition;
    extraCloudUp.position.y = 3;

    cloudGroupTop.add(cloudUp,cloudDown,extraCloudUp);
    cloudGroupTop.name = "cloudGroupTop"

     cloudGroupBottom = cloudGroupTop.clone();

    cloudGroupTop.position.set( cloudGroupXPos,7,0)
    cloudGroupBottom.position.set(cloudGroupXPos,-3,0)

    allCloudsGroup.add(cloudGroupTop,cloudGroupBottom);
    allCloudsGroup.name = "allTrekkingCloudsGroup";
    cloudGroupBottom.name = "allTrekkingCloudsGroupBottom";
    cloudGroupTop.name = "allTrekkingCloudsGroupTop";

    scenery.add(allCloudsGroup);

    extraCloudDown = cloudGroupBottom.children[2];

    // boundBoxMeshBottom = cloudGroupBottom.children[3];
    
    topCloudDown = cloudGroupBottom.children[0];
    middleCloudDown = cloudGroupBottom.children[1];

    // boundBoxMeshBottom.position.y = -3;
    extraCloudDown.position.y = -6;
    
    allCloudsGroup.position.z = 1.5;

    cloudArray = [cloudUp,cloudDown,extraCloudUp,topCloudDown,middleCloudDown,extraCloudDown]
    // console.log("cloudArray",cloudArray)
    trekkingArray = [cloudUpTexture,trekkingBushTexture,trekkingTreeTexture]
    resizeClouds();

}


export function shuffleTrekkingObjects(){
    console.log('SHUFFLEOBJECTS')

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
    }

    shuffleArray(trekkingArray);

    for (let i = 0; i < cloudArray.length; i++) {
        const mesh = cloudArray[i];
        const texture = trekkingArray[i % trekkingArray.length];
      
        // Assuming the mesh has a single material and you want to apply the texture as a map
        mesh.material = mesh.material.clone();
        mesh.material.map = texture;
        mesh.material.needsUpdate = true;
      }




}



function resizeClouds(){
    // var randomScale = 0.7;
    var n = 2;
    var shuffled = cloudArray.sort(function(){return .5 - Math.random()});
    var selected=shuffled.slice(0,n);


    
  


    for (var i = 0; i < cloudArray.length; i++) {
        
        boxArray.push(cloudArray[i])

        var randomScale= Math.random() * (1 - 0.5) + 0.5;
        var randomX = Math.random() * (1 - (-6)) + (-6);

        cloudArray[i].scale.set(randomScale,randomScale,randomScale)
        cloudArray[i].position.x = randomX;

    }    

    for (var i = 0; i < selected.length; i++) {

        selected[i].scale.x *= -1;

    }


}

export function moveClouds(){
    

    cloudGroupTop.position.x -= cloudTopIncrement ;
    cloudGroupBottom.position.x -= cloudBottomIncrement ;

    if (cloudGroupBottom.position.x && cloudGroupTop.position.x <= -8){
      cloudGroupTop.position.x = cloudUpWidth * 2; 
      cloudGroupBottom.position.x = cloudUpWidth * 2; 
      var randomY = (Math.random() * 8) - 4;
      allCloudsGroup.position.y = randomY; 
      resizeClouds();
        
    }

}

export function addCloudSpeed(){
    cloudTopIncrement = cloudTopIncrement * 1.1;
    cloudBottomIncrement = cloudBottomIncrement * 1.1;

}

export function resetCloudSpeed(){
    cloudTopIncrement = 0.08
    cloudBottomIncrement = 0.079
}

export function removeClouds(){
  console.log("REMOVINGClouds")
    for (var i = 0; i < cloudArray.length; i++) {
        cloudArray[i] = null;
        boxArray[i] = null

    }
    cloudArray = [];
    boxArray = [];
    
    while (allCloudsGroup.children.length > 0) {
        var child = allCloudsGroup.children[0];
        allCloudsGroup.remove(child);
   
    }

    while (cloudGroupTop.children.length > 0) {
        var child2 = cloudGroupTop.children[0];
        cloudGroupTop.remove(child2);
    }

    while (cloudGroupBottom.children.length > 0) {
        var child3 = cloudGroupBottom.children[0];
        cloudGroupBottom.remove(child3);
    }
      
      console.log("allCloudsGroup",allCloudsGroup)
    scenery.remove(cloudUp);
    scenery.remove(cloudDown);

    scenery.remove(cloudGroupTop);

    scenery.remove(cloudGroupBottom);

    cloudGroupBottom = null;
    scenery.remove(boxArray);

    // scenery.remove cloud

    scenery.remove(allCloudsGroup);


    ///////////////////////////


    cloudUpWidth =   null;
    cloudUpHeight =   null;
    cloudGroupXPos  = null;

    scenery.remove(cloudUpTexture);
    scenery.remove(cloudUpMaterial);
    scenery.remove(cloudUpMesh);
    scenery.remove(extraCloudDown);
    scenery.remove(extraCloudUp);

    
    cloudDownYPosition = null;










    
    

}



export {boundBoxMesh,boundBoxMeshBottom,cloudGroupTop,cloudGroupBottom,allCloudsGroup,boxArray,cloudTopIncrement,cloudBottomIncrement}