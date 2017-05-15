var sketch = function(p5) {
	var canvas;

	p5.setup = function(){
		console.log('running p5 setup');
		canvas = p5.createCanvas (window.innerWidth, window.innerHeight);
		canvas.position (0, 0);
		// z-index is important and defines layers, make div that has a positive z-index which will go above the screen
		canvas.style ('z-index', '1');
		p5.background(255, 150, 150);
		p5.noStroke();
	};

	p5.draw = function(){
		p5.fill(255);
		p5.ellipse(p5.mouseX, p5.mouseY, 100, 100);
	};
};

var p5sketch = new p5(sketch);