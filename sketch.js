let duckImg;
let duckX = 200;
let duckY = 200;

function preload() {
  duckImg = loadImage('duck.png');
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  // Draw the duck at the position defined by variables
  image(duckImg, duckX, duckY, 100, 100);
}