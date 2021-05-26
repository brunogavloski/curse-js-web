var button;
var bgcolor;
var slider;
var input;


function setup() {
  canvas = createCanvas(200, 200);
  bgcolor = color(200);
  createP('you are name here' +  input.value());
  button = createButton("press");
  
  slider = createSlider(1, 100, 50);
  input = createInput("tell a mesage");
  
}

function mousePressed() {
  bgcolor = color(random(255));
}

function draw() {
  background(bgcolor);
  fill(255, 0, 175);
  ellipse(100, 100, slider.value(), slider.value());

  text(input.value(), 20,20);
}

