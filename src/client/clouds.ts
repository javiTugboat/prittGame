import * as THREE from 'three'
import { scenery } from './client'

var cloudUpMesh,cloudUpTexture,cloudUpMaterial,cloudUp,cloudUpHeight,cloudUpMaterial,cloudUpYPosition,cloudUpXposition;

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

    console.log(cloudGroupTop)

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

    console.log(allCloudsGroup)
    cloudArray = [cloudUp,cloudDown,extraCloudUp,topCloudDown,middleCloudDown,extraCloudDown]
    console.log("cloudArray",cloudArray)
    resizeClouds();

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
    console.log(cloudTopIncrement);
    cloudBottomIncrement = cloudBottomIncrement * 1.1;
    console.log(cloudBottomIncrement);

}

export function resetCloudSpeed(){
    cloudTopIncrement = 0.08
    cloudBottomIncrement = 0.079
}

export {boundBoxMesh,boundBoxMeshBottom,cloudGroupTop,cloudGroupBottom,allCloudsGroup,boxArray,cloudTopIncrement,cloudBottomIncrement}