var scoreCounter = 0;
var bestScore = 0;
var bestScoreCounter;
const scoreText= document.getElementById( 'score' );
const bestText= document.getElementById( 'bestScore' );
const coinText= document.getElementById( 'extraPointsImg' );
import gsap from "gsap";

// const prittLogo = document.getElementById("prittLogo");
var strNumber,strBestScore;
import * as background from './background'
import * as clouds from './clouds'

import {cloudTopIncrement,cloudBottomIncrement} from './clouds'
gsap.set(coinText,  {autoAlpha:0,scale:0.95});


export function countScore(){

scoreCounter ++;
strNumber = scoreCounter.toString();
scoreText.innerHTML = strNumber;

checkScore();

} 

export function resetScore(){

    if (scoreCounter>bestScore){

        bestScore = scoreCounter;
        strBestScore = bestScore.toString()
        bestText.innerHTML = strBestScore;


    }
    
    scoreCounter = 0;

   
    
    
} 

function checkScore(){

    if (scoreCounter % 500 === 0) {
        console.log("500pointmark")
        background.addSpeed()
        clouds.addCloudSpeed()
      }



}

export function addCoinPoints(){

    scoreCounter += 500;
    strNumber = scoreCounter.toString();
    scoreText.innerHTML = strNumber;
    gsap.to(coinText,  {autoAlpha:1,duration:0.5,onComplete:hideCoinText,ease:"Back.out",scale:1});

}

function hideCoinText(){

    gsap.to(coinText,  {autoAlpha:0,duration:0.5,scale:0.95});

}