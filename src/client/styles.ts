import gsap from "gsap";

const btn = document.getElementById("btn");
const buttonTextOne = document.getElementById("buttonTextOne");
const playButtonOne = document.getElementById("playButtonOne");
const leftBorder= document.getElementById("leftBorder");
const rightBorder= document.getElementById("rightBorder");

const restartDiv= document.getElementById("restartDiv");
const startDiv= document.getElementById("startDiv");
const curtain= document.getElementById("curtain");

const scoreText= document.getElementById( 'score' );
const scoreHolder= document.getElementById( 'scoreHolder' );
const playButton= document.getElementById( 'playButton' );
const buttonText= document.getElementById( 'playButton' );
const scoreTitle= document.getElementById( 'scoreTitle' );
const bestScore= document.getElementById( 'bestScore' );

var x = window.matchMedia("(min-width: 1024px)")

const prittBar= document.getElementById("prittBar");
const prittLogo = document.getElementById("prittLogo");

const natureLogo = document.getElementById('natureLogo');

// import fontFile from '/fonts/Futura-Condensed-Extra-Bold.otf';
export function addStyles(){
// btn.style.backgroundColor = "blue"

gsap.set(natureLogo,  {scale:0.6});


btn.style.position = "absolute"
btn.style.top = "0%"
btn.style.left = "0%"
btn.style.width = "100%"
btn.style.height = "100%"
// btn.style.display = "none"

restartDiv.style.display = "none"
restartDiv.style.flexWrap = "wrap"
restartDiv.style.flexDirection = "column"
restartDiv.style.justifyContent = "space-evenly"
restartDiv.style.alignItems = "center"
restartDiv.style.position = "absolute"
restartDiv.style.height = "188px"
restartDiv.style.width = "228px"
restartDiv.style.left = "50%"
restartDiv.style.top = "50%"
restartDiv.style.transform = "translate(-50%,-50%)"
restartDiv.style.backgroundColor= "#e00e20"
restartDiv.style.borderRadius= "10px"
restartDiv.style.fontFamily = "'Nunito', sans-serif"
restartDiv.style.color = "white"


prittBar.style.display = "flex"
prittBar.style.flexWrap = "wrap"
// prittBar.style.flexDirection = "column"
prittBar.style.justifyContent = "space-between"
prittBar.style.alignItems = "center"
prittBar.style.position = "absolute"
prittBar.style.height = "5%"
prittBar.style.width = "100%"
prittBar.style.left = "0%"
prittBar.style.top = "0%"
prittBar.style.backgroundColor= "#e00e20"

prittLogo.style.position = "relative"
prittLogo.style.top = "0%"
prittLogo.style.left = "3%"
prittLogo.style.width = "auto"
prittLogo.style.height = "100%"


startDiv.style.display = "flex"
startDiv.style.flexWrap = "wrap"
startDiv.style.flexDirection = "column"
startDiv.style.justifyContent = "space-evenly"
startDiv.style.alignItems = "center"
startDiv.style.position = "absolute"
startDiv.style.height = "560px"
startDiv.style.width = "214px"
startDiv.style.left = "50%"
startDiv.style.top = "50%"
startDiv.style.transform = "translate(-50%,-50%)"
// startDiv.style.backgroundColor= "#e00e20"
startDiv.style.borderRadius= "10px"


scoreText.style.fontFamily = "'Nunito', sans-serif"
scoreText.style.color = 'white'
scoreText.style.fontSize = '25px'
scoreText.style.marginRight = '10px'

// playButtonOne.style.fontFamily = "FuturaMedium"
// playButton.style.fontFamily = "FuturaMedium"

scoreText.style.fontFamily = "FuturaExtra"
scoreTitle.style.fontFamily = "FuturaMedium"
bestScore.style.fontFamily = "FuturaExtra"
bestScore.style.lineHeight = "1"

// playButtonOne.style.display = "flex"
// playButtonOne.style.flexWrap = "wrap"
// playButtonOne.style.justifyContent = "center"
// playButtonOne.style.alignItems = "center"
// playButtonOne.style.width = "80%"
// playButtonOne.style.backgroundColor= "white"
// playButtonOne.style.color= "#e00e20"
// playButtonOne.style.borderRadius= "4px"

scoreHolder.style.display = "flex"
scoreHolder.style.flexWrap = "wrap"
scoreHolder.style.alignItems = "center"
scoreHolder.style.gap = "10px"
scoreHolder.style.userSelect = "none"
scoreHolder.style.pointerEvents= "none"


playButton.style.display = "flex"
playButton.style.flexWrap = "wrap"
playButton.style.justifyContent = "center"
playButton.style.alignItems = "center"
playButton.style.width = "45%"
playButton.style.backgroundColor= "white"
playButton.style.color= "#e00e20"
playButton.style.borderRadius= "4px"
playButton.style.userSelect = "none"
playButton.style.pointerEvents= "none"

rightBorder.style.position = "absolute"
rightBorder.style.right = "0%"
rightBorder.style.top = "0%"
rightBorder.style.width = "35%"
rightBorder.style.height = "100%"
rightBorder.style.backgroundColor = "black"
rightBorder.style.display = "none"


leftBorder.style.position = "absolute"
leftBorder.style.left = "0%"
leftBorder.style.top = "0%"
leftBorder.style.width = "35%"
leftBorder.style.height = "100%"
leftBorder.style.backgroundColor = "black"
leftBorder.style.display = "none"

}

export function showRestart (){
    restartDiv.style.display = "flex"
}

export function hideStart(){

    gsap.to(startDiv,  { autoAlpha:0, duration: 0.35, ease: 'power1.inOut' });


}

export function checkScreenSize(){

    if (x.matches) { // If media query matches

        leftBorder.style.display = "block"
        rightBorder.style.display = "block"

    } else {
        leftBorder.style.display = "none"
        rightBorder.style.display = "none"

    }

}

export function lowerCurtain(){

    gsap.to(curtain,  {delay:0.5, autoAlpha:0, duration: 0.25, ease: 'power1.out',onStart:animLogo });


}

export function animLogo(){

    gsap.to(natureLogo,  {delay:0, scale:1, duration: 0.45, ease: 'back.out' });


}

  