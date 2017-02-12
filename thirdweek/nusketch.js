var canvas;
var sliderslide;
var sliderslideslide;

function setup(){
	canvas = createCanvas(500, 500, WEBGL);
	canvas.position(300, 50);
}

function draw(){
	background (0);
	noFill();
	stroke(random(255),random(255),random(255));
	ellipse(56, 46, 55, 55);
}