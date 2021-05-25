var input;
var canvas;
var h1;
var x = 10;
var y = 10;


function setup() {
  canvas = createCanvas(200,200); //this create a space for drawing in windon
  canvas.position(400, 400);
  h1 = createP("my new paragraph");
  //h1.position(450,0 );

}
function mousePressed() {
  createP("my favorite number is: " + random(-5, 5))
}

function draw() {
  h1.position(x, y);
  //clear();
  background(100);
  fill(255,55,0);
  rect(x, y, 50, 50);
  x = x + random(-10,10);
  //y = y + random(-10,10);

}