var canvas;
var colorslide;
var strokeslide;
var sizeslide;

function setup(){
	canvas = createCanvas(600, 600);
	canvas.position(300, 50);
	background (0);
	colorslide = createSlider
	colorslide.position (width/2, 500)
	strokeslide = createSlider
	strokeslide.position (width/2, 520)
	sizeslide = createSlider
	strokeslide.position (width/2, 550)
}

function draw(){
	fill(255);
	ellipse(width/4, height/2, 100, 100);
	ellipse(width/2, height/2, 100, 100);
	ellipse(width/4+width/2, height/2, 100, 100);
}