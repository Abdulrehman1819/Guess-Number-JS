"use strict";
/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Good Guess';
document.querySelector('.guess').value = '23';
*/
let score = 20;
document.querySelector(".check").addEventListener("click", function () {
  let randomvalue;
  randomvalue = Math.trunc(Math.random() * 20) + 1;
  //randomvalue = 4;
  let newhighscore = 0;
  let oldhighscore;
  let count = 0;
  let guess = document.querySelector(".guess").value;
  document.querySelector(".number").textContent = randomvalue;
  if (!guess) {
    document.querySelector(".message").textContent = "Enter Some Value";
  }
  if (Number(document.querySelector(".guess").value) == randomvalue) {
    document.querySelector(".message").textContent = "Congratulations";
    //score = oldhighscore;

    if (newhighscore < score) {
      oldhighscore = score;
      document.querySelector(".highscore").textContent = oldhighscore;
    }

    score = 20;
  } else if (Number(guess !== randomvalue)) {
    if (guess > randomvalue) {
      document.querySelector(".message").textContent = "TOO HIGH";
      if (score > 0) {
        score--;
      } else if (score == 0) {
        document.querySelector(".message").textContent = "You Lose";
        score = 20;
        document.querySelector(".score").value = score;
        document.querySelector(".number").value = 0;
      }
      document.querySelector(".score").textContent = score;
    } else if (guess < randomvalue) {
      document.querySelector(".message").textContent = "TOO Low";

      if (score > 0) {
        score--;
      } else if (score == 0) {
        document.querySelector(".message").textContent = "You Lose";
        score = 20;
        document.querySelector(".score").value = score;
      }
      document.querySelector(".score").textContent = score;
    }
  }
});
document.querySelector(".again").addEventListener("click", function () {
  document.querySelector(".message").textContent = "Start Guessing...";
  document.querySelector(".score").textContent = "20";
  document.querySelector(".highscore").textContent = "0";
});
