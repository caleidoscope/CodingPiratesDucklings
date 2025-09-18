let duckImg;
let duckX = 0;
let duckY = 200;
let xSpeed = 2;
let playerName = "Alex";
let ducksFed = 0;

function preload() {
  duckImg = loadImage('duck.png');
}

function setup() {
  createCanvas(400, 400);
  textSize(24);
}

function draw() {
  background(220);

  // Move the duck
  duckX = duckX + xSpeed;

  // If the duck hits the edge, reverse direction
  if (duckX > width - 100 || duckX < 0) {
    xSpeed = xSpeed * -1;
  }

  // Draw the duck
  image(duckImg, duckX, duckY, 100, 100);

  // Display the player's name and score
  let scoreText = "Ducks fed: " + ducksFed;
  text(playerName, 20, 40);
  text(scoreText, 20, 70);
}

function mousePressed() {
  // Calculate the distance between the mouse and the center of the duck
  let distance = dist(mouseX, mouseY, duckX + 50, duckY + 50);

  // If the distance is less than the duck's radius, it's a hit!
  if (distance < 50) {
    ducksFed = ducksFed + 1;
  }
}