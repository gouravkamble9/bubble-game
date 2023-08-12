let bubble=document.querySelector(".bubble")
var time=120
var score=0
var hit;


function fillBubble(){
    bub="";
    for(let i=0;i<184;i++){
        ranNUM=randomNumber()
        bub+=`<div class="bubble">${ranNUM}</div>`
    }

    document.querySelector(".game-area").innerHTML=bub
}

function timer(){
        let timeR=setInterval(()=>{
            if(time>=0){
               document.querySelector("#timer").textContent=time;
               time--;
            }else{
                clearInterval(timeR)
                document.querySelector(".game-area").innerHTML=`
                <div class="game-over">
                <h1>Game Over</h1>
                <br>
                <h3>Score :${score}</h3>
                </div>
                `
                document.querySelector("#hit").textContent=0
            }
            
        },1000)

}

function scoreIncre(){
    score=score+10
    document.querySelector("#score").textContent=score;
}


function newHit(){
    hit=randomNumber()
    document.querySelector("#hit").textContent=hit;
}

function randomNumber(){
    let data=Math.floor(Math.random(10)*10)
    return data
}


document.querySelector(".game-area").addEventListener("click",function (det){
    let clickdBubble=Number(det.target.textContent)
    if(clickdBubble===hit){
        scoreIncre()
        fillBubble()
        newHit()
    }
})


fillBubble();
timer();
newHit()