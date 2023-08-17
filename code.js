var timer = 60;
var score = 0;
var hitrn = 0;

function makebubble() {
  var clutter = "";
  for (var i = 1; i <= 207; i++) {
    var rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble"> ${rn} </div>`;
  }
  document.querySelector("#panel-bottom").innerHTML = clutter;
}

function gethit() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#gethit").textContent = hitrn;
}

function runtimer() {
  var timerint = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#settimer").textContent = timer;
    } else {
      clearInterval(timerint);
      document.getElementById(
        "panel-bottom"
      ).innerHTML = ` <h3> Game Over </h3> <br>  <p>  Your Score is = ${score} </P>  <br> <p> Refresh for Restart the Game </P>  `;
    }
  }, 1000);
}

function getscore() {
  score += 10;
  document.querySelector("#score").textContent = score;
}

document.getElementById("panel-bottom")
  .addEventListener("click", function (raj) {
    var clickednum = Number(raj.target.textContent);
    if (hitrn === clickednum) {
      makebubble();
      gethit();
      getscore();
    }
  });


makebubble();
gethit();
runtimer();
