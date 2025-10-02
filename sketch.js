let duckImg;
let duckX = -100;
let duckY = Math.random() * 400;
let xSpeed = 2;
let playerName = "Karsten";
let ducksFed = 0;
let duckSize = 50;
let lives = 3;

function preload() {
  duckImg = loadImage('duck.png');
}

function setup() {
  createCanvas(400, 400);
  textSize(24);
}

function draw() {
  background(220);

  if (lives > 0) {
    // Move the duck
    duckX = duckX + xSpeed;

    // If the duck hits the edge, remove one life
    if (duckX > width) {
      duckX = -duckSize;
      duckY = Math.random() * (height - duckSize);
      lives = lives - 1;
    }

    // Draw the duck
    image(duckImg, duckX, duckY, duckSize, duckSize);

    // Display the player's name and score
    let scoreText = "Score: " + ducksFed;
    text(playerName, 20, 40);
    text(scoreText, 20, 70);

    // Display lives
    let livesText = "Liv: " + lives;
    text(livesText, width - 120, 40);
  } else {
    // Game Over
    textSize(50);
    textAlign(CENTER, CENTER);
    text("Game Over", width / 2, height / 2);
  }
}

function mousePressed() {
  // Calculate the distance between the mouse and the center of the duck
  let distance = dist(mouseX, mouseY, duckX + duckSize / 2, duckY + duckSize / 2);

  // If the distance is less than the duck's radius, it's a hit!
  if (distance < duckSize / 2) {
    ducksFed = ducksFed + 1;
    duckX = -duckSize;
    duckY = Math.random() * (height - duckSize);
  }
}