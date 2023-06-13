var scoreCounter = 0;
var bestScore = 0;
var bestScoreCounter;
const scoreText= document.getElementById( 'score' );
const bestText= document.getElementById( 'bestScore' );
// const prittLogo = document.getElementById("prittLogo");
var strNumber,strBestScore;


export function countScore(){

scoreCounter ++;
strNumber = scoreCounter.toString();
scoreText.innerHTML = strNumber;

} 

export function resetScore(){

    if (scoreCounter>bestScore){

        bestScore = scoreCounter;
        strBestScore = bestScore.toString()
        bestText.innerHTML = strBestScore;


    }
    
    scoreCounter = 0;

   
    
    
} 

