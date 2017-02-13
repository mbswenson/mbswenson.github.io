var canvas;
var colorslide;
var strokeslide;
var sizeslide;

function setup(){
	canvas = createCanvas(600, 600);
	canvas.position(300, 50);
	background (0);
	colorslide = createSlider (0, 255, 0)
	colorslide.position (width/2, 500)
	strokeslide = createSlider (1, 20, 1)
	strokeslide.position (width/2, 520)
	sizeslide = createSlider (100, 400, 100)
	strokeslide.position (width/2, 550)
}

function draw(){
	fill(255);
	ellipse(width/4, height/2, 100, 100);
	ellipse(width/2, height/2, 100, 100);
	ellipse(width/4+width/2, height/2, 100, 100);
}