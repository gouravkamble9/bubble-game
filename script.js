let bubble = document.querySelector(".bubble");
var time = 60;
var score = 0;
var hit;

function fillBubble() {
  bub = ""
  for (let i = 0; i < 160; i++) {
    ranNUM = randomNumber();
    bub += `<div class="bubble">${ranNUM}</div>`;
  }

  document.querySelector(".game-area").innerHTML = bub;
}

function timer() {
  let timeR = setInterval(() => {
    if (time >= 0) {
      document.querySelector("#timer").textContent = time;
      time--;
      if (time >= 0 && time < 10) {
        document.querySelector("#timer").style.color = "red";
      }
    } else {
      clearInterval(timeR);
      document.querySelector(".game-area").innerHTML = `
                <div class="game-over">
                <h1>Game Over</h1>
                <br>
                <h3>Score :${score}</h3>
                <button onclick="startGame()">Play Again</button>
                </div>
                `;
      document.querySelector("#score").textContent = 0;
      document.querySelector("#hit").textContent = 0;
    }
  }, 1000);
}

function startGame() {
  document.location.href = "game.html";
}

function scoreIncre() {
  score = score + 10;
  document.querySelector("#score").textContent = score;
}

function newHit() {
  hit = randomNumber();
  document.querySelector("#hit").textContent = hit;
}

function randomNumber() {
  let data = Math.floor(Math.random(10) * 10);
  return data;
}

document.querySelector(".game-area").addEventListener("click", function (det) {
  let clickdBubble = Number(det.target.textContent);
  if (clickdBubble === hit) {
    scoreIncre();
    fillBubble();
    newHit();
  }
});

window.addEventListener("resize",fillBubble)

fillBubble();
timer();
newHit();
