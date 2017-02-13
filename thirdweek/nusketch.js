var canvas;
var colorslide;
var strokeslide;
var sizeslide;

function setup(){
	canvas = createCanvas(800, 600);
	canvas.position(230, 100);
	background (0);
	colorMode(HSB, 255);
	colorslide = createSlider (0, 255, 0);
	colorslide.position (550, 610);
	strokeslide = createSlider (1, 20, 1);
	strokeslide.position (550, 630);
	sizeslide = createSlider (100, 400, 100);
	sizeslide.position (550, 650);
}

function draw(){
	fill(colorslide.value(), 255, 100);
	strokeWeight(strokeslide.value());
	ellipse(width/4, height/2, sizeslide.value(), sizeslide.value());
	fill(colorslide.value(), 255, 150);
	ellipse(width/2, height/2, sizeslide.value(), sizeslide.value());
	fill(colorslide.value(), 255, 200);
	ellipse(width/4+width/2, height/2, sizeslide.value(), sizeslide.value());
}