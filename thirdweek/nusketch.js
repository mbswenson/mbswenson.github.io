var canvas;
var sliderslide;
var sliderslideslide;

function setup(){
	canvas = createCanvas(500, 500, WEBGL);
	canvas.position(300, 50);
	background (0);
}

function draw(){
	noFill();
	stroke(random(255),random(255),random(255));
	ellipse(50, 50, 200, 200);
}