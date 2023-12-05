// Iteration 1: Make the Play button functional.
// Description: When the Play button is clicked the game page should be displayed.
let playBtn = document.getElementById("play-button");

playBtn.onclick = () => {
  window.open("./game.html");
  window.close();
};
