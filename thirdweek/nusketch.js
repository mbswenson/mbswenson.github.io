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

  for(int x = 0; x < width; x = x + 20) {
   	 ellipse(x,0,80,80);
  	}
  
  for (int y = 0; y < height; y = y + 20) {
     ellipse(0,y,40,40);
    }
  
  for (int x = 0; x < width; x = x + 20) {
    for (int y = 0; y < height; y = y + 20) {
	 ellipse(x,y,40,40);
    }
   }
  }