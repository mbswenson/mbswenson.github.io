var lines, markov, data1, data2, x = 160, y = 240;

function preload() {

  data1 = loadStrings('markov1.txt');
  data2 = loadStrings('markov2.txt');
}

function setup() {

   var cnv = createCanvas(500, 500);
  var x = (windowWidth - width) / 2+200;
  var y = (windowHeight - height) / 2+100;
  cnv.position(x, y);
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
  background(240, 50, 77);
  stroke(255);
  strokeWeight(1);
  fill (255);
  text(lines.join(' '), x, y, 400, 400);
}

function mouseClicked() {

  x = y = 50;
  lines = markov.generateSentences(10);
  drawText();
}