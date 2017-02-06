function setup () {
  createCanvas(600,600);
}

 function draw () {
  if (mouseIsPressed == true){
  noStroke();
  fill(random(235),random(205),random(255),50);
  ellipse(400,400,300,300);
  noStroke();
  fill(random(100),random(100),random(100),40);
  ellipse (265,301,300,300);
  } else {
  noStroke();
  fill(0);
  ellipse(400,400,300,300);
  noStroke();
  fill(80,80,80,80);
  ellipse(265,301,300,300);
  }
}