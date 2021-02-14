var newGame=document.querySelector(".newgame");
var difficultyEasy=document.querySelector(".easy");
var difficultyHard=document.querySelector(".hard");
var difficultyVeryHard=document.querySelector(".supperhard");
var squares=document.querySelectorAll(".square");
var displayColor=document.querySelector(".selectedcolor");
var answerStatus=document.querySelector(".status");
var heading=document.querySelector("h1");
var colors=squares;
var len=6;
var tries=1;
function randomizeColor(){
    for(i=0;i<len;i++){
        colors[i].style.background = '#'+Math.floor(Math.random()*16777245).toString(16);
    }
}
randomizeColor();
var pickedColor= squares[Math.floor(Math.random()*len)].style.background;
displayColor.textContent=pickedColor;
for(i=0;i<12;i++){
    squares[i].style.background=colors[i];
    squares[i].addEventListener("click",function(){
        var clickedColor=this.style.background;
        if(clickedColor === pickedColor){
            changeColor(pickedColor);
            heading.style.background=pickedColor;
            answerStatus.textContent="Correct! You did it in "+tries+" moves";//gramatically incorrect in some cases
            newGame.textContent="Play Again ?";
        }
        else{
            this.style.background="#232323";
            answerStatus.textContent="Try Again";
            tries+=1;
        }
    })
}
function changeColor(color){
    for(i=0;i<len;i++){
        squares[i].style.background=color;
    }  
}
newGame.addEventListener("click",function(){
    randomizeColor();
    for(i=0;i<len;i++){
        squares[i].style.background=colors[i];
    }
    newGame.textContent="New Game";
    pickedColor= squares[Math.floor(Math.random()*len)].style.background;
    displayColor.textContent=pickedColor;
    answerStatus.textContent=" ";
    tries=1;
    heading.style.background="rgb(0, 76, 255)";
})
difficultyEasy.addEventListener("click",function(){
    len=3;
    randomizeColor();
    difficultyEasy.classList.add("selected");
    difficultyVeryHard.classList.remove("selected");
    difficultyHard.classList.remove("selected");
    for(i=0;i<squares.length;i++){
        if(i<3){
            squares[i]=colors[i];
        }
        else{
            squares[i].style.display="none";
        }
    }
    newGame.textContent="New Game";
    pickedColor= squares[Math.floor(Math.random()*len)].style.background;
    displayColor.textContent=pickedColor;
    answerStatus.textContent=" ";
    tries=1;
    heading.style.background="rgb(0, 76, 255)";
})
difficultyHard.addEventListener("click",function(){
    len=6;
    randomizeColor();
    difficultyEasy.classList.remove("selected");
    difficultyHard.classList.add("selected");
    difficultyVeryHard.classList.remove("selected");
    for(i=0;i<squares.length;i++){
        if(i<6){
            squares[i]=colors[i];
            squares[i].style.display="block";
        }
        else{
            squares[i].style.display="none";
        }
    }
    newGame.textContent="New Game";
    pickedColor= squares[Math.floor(Math.random()*len)].style.background;
    displayColor.textContent=pickedColor;
    answerStatus.textContent=" ";
    tries=1;
    heading.style.background="rgb(0, 76, 255)";
})
difficultyVeryHard.addEventListener("click",function(){
    len=12;
    randomizeColor();
    difficultyEasy.classList.remove("selected");
    difficultyHard.classList.remove("selected");
    difficultyVeryHard.classList.add("selected");
    for(i=0;i<squares.length;i++){
            squares[i]=colors[i];
            squares[i].style.display="block";
    }
    newGame.textContent="New Game";
    pickedColor= squares[Math.floor(Math.random()*len)].style.background;
    displayColor.textContent=pickedColor;
    answerStatus.textContent=" ";
    tries=1;
    heading.style.background="rgb(0, 76, 255)";
})