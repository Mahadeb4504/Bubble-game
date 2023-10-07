var timer = 60;
var score = 0;
var hitht = 0;


function increaseScore(){
    score+=10;
    document.querySelector("#scorevar").textContent = score;
}

function getNewHit(){
    hitht = Math.floor(Math.random()*10);
    document.querySelector("#hitvar").textContent = hitht;
}

function makeBubble(){
    var strong = "";
for (var i=1;i<=168;i++){
    var circle = Math.floor(Math.random()*10)
    strong +=`<div class="bubble">${circle}</div>`;
}

document.querySelector("#pbtm").innerHTML=strong;
}


function runTimer(){
    var timerc = setInterval(function(){
        if (timer > 0){
            timer--;
        document.querySelector("#timerval").textContent = timer;
        }
        else{
            clearInterval(timerc);
            document.querySelector("#pbtm").innerHTML=`<h1>Game Over</h1>`;
        }
       
    }, 1000);
}
document.querySelector("#pbtm").addEventListener("click", function (good){
var clickednum = Number(good.target.textContent);
if (clickednum === hitht){
    increaseScore();
    makeBubble();
    getNewHit();
}

});
runTimer();
makeBubble();
getNewHit();
increaseScore();
