// Iteration 2: Generate 2 random number and display it on the screen

let num1 = document.getElementById("number1");
let num2 = document.getElementById("number2");
let timer = 5;
let randomNum1 = 0;
let randomNum2 = 0;
let trackOmeter = 0;

function generatingSmtg() {
  randomNum1 = Math.ceil(Math.random() * 100);
  randomNum2 = Math.ceil(Math.random() * 100);
  num1.innerText = randomNum1;
  num2.innerText = randomNum2;
}

generatingSmtg();

// Iteration 3: Make the options button functional
let opt1 = document.getElementById("greater-than");
let opt2 = document.getElementById("equal-to");
let opt3 = document.getElementById("lesser-than");

localStorage.setItem("Score", trackOmeter);

opt1.onclick = () => {
  timer = 5;
  if (randomNum1 > randomNum2) {
    trackOmeter += 1;
    generatingSmtg();
    countDown();
  } else {
    window.open("./gameover.html");
    window.close();
  }
};

opt2.onclick = () => {
  timer = 5;
  if (randomNum1 == randomNum2) {
    trackOmeter += 1;
    generatingSmtg();
    countDown();
  } else {
    window.open("./gameover.html");
    window.close();
  }
};

opt3.onclick = () => {
  if (randomNum1 < randomNum2) {
    timer = 5;
    trackOmeter += 1;
    generatingSmtg();
    countDown();
  } else {
    window.open("./gameover.html");
    window.close();
  }
};

// Iteration 4: Build a timer for the game
let timerDisplay = document.getElementById("timer");

function countDown() {
  if (timer >= 0) {
    timerDisplay.innerText = timer;
    timer--;
  } else {
    window.location.href = "./gameover.html";
  }
  localStorage.setItem("Score", trackOmeter);
}

setInterval(countDown, 1000);
