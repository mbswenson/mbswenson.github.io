function setup(){
	createCanvas(500,500);
	background(0);
	}

function draw(){
	if (mouseClicked){
		for (int x = 0; x < width; x = x + 20 {
		for (int y = 0; y < height; y = y + 20 {
			stroke(0);
			ellipse(x, y, 40, 40);
		 }
		}
} else {
	noStroke();
		for(int x = 0; x < width; x = x + 20) {
    		fill(random(70),random(70),random(70),80);
    		ellipse(x,0,80,80);
  }
  
  		for (int y = 0; y < height; y = y + 20) {
    		fill(random(70),random(70),random(70),80);
    		ellipse(0,y,40,40);
  }
  
  		for (int x = 0; x < width; x = x + 20) {
    	for (int y = 0; y < height; y = y + 20) {
      		fill(random(70),random(70),random(70),80);
      		ellipse(x,y,40,40);
      	}
      }
     }