let duckImg;
let duckX = 0;
let duckY = 200;
let xSpeed = 2;

function preload() {
  duckImg = loadImage('duck.png');
}

function setup() {
  createCanvas(400, 400);
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
}