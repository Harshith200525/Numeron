// Iteration 5: Store the player score and display it on the game over screen
let playAgainBtn = document.getElementById("play-again-button");

playAgainBtn.onclick = () => {
  window.open("./game.html");
  window.close();
};

let finScore = localStorage.getItem("Score");
let displayScore = document.getElementById("score-board");

displayScore.innerText = finScore;
