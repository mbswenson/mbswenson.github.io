var canvas;
var sliderslide;
var sliderslideslide;

function setup(){
	canvas = createCanvas(500, 500, WEBGL);
	canvas.position(300, 50);
	background (0);
}

function draw(){
	fill(255);
	ellipse(width/4, height/2, 100, 100);
	ellipse(width/2, height/2, 100, 100);
	ellipse(width/4+width/2, height/2, 100, 100);
}