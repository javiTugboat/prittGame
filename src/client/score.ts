var scoreCounter = 0;
var bestScore = 0;
var bestScoreCounter;
const scoreText= document.getElementById( 'score' );
const bestText= document.getElementById( 'bestScore' );
// const prittLogo = document.getElementById("prittLogo");
var strNumber,strBestScore;
import * as background from './background'
import * as clouds from './clouds'

import {cloudTopIncrement,cloudBottomIncrement} from './clouds'


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
