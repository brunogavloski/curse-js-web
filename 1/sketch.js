var input;

function setup() {
  createCanvas(200,200); //this create a space for drawing in windon
  createP("my new paragraph")


}
function mousePressed() {
  createP("my favorite number is: " + random(-10, 10))
}

function draw() {
  background(0);
  fill(255,55,0);
  rect(100, 100, 50, 50);
}
