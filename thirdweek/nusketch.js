var canvas;

function setup(){
	canvas = createCanvas(500, 500);
	canvas.position(300, 50);
	canvas.class("lemon");
}

function draw(){
	background (220, 180, 200);
	ellipse (width/2, height/2, 100, 100);
	ellipse (width/2, height/2, 50, 50)
}