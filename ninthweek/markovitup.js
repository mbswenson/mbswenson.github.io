var lines, markov, data1, data2, x = 160, y = 240;

function preload() {

  data1 = loadStrings('markov1.txt');
  data2 = loadStrings('markov2.txt');
}

function setup() {

  createCanvas(500, 500);
  background(random(255), random(255), random(255));
  textFont('times', 16);
  textAlign(LEFT);

  lines = ["click to generate macytext!"];

  // create a markov model w' n=4
  markov = new RiMarkov(4);

  // load text into the model
  markov.loadText(data1.join(' '));
  markov.loadText(data2.join(' '));

  drawText();
}

function drawText() {

  stroke(255);
  text(lines.join(' '), x, y, 400, 400);
}

function mouseClicked() {

  x = y = 50;
  lines = markov.generateSentences(10);
  drawText();
}