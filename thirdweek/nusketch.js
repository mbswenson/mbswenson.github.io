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
	stroke(random(255), random(255), random(255));
	rotateX(frameCount * 0.01);
 	rotateY(frameCount * 0.01);
    box(width/2, height/2, 200);
}