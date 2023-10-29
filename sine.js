let curveSegments = [];

function setup() {
  // frameRate(12); // animate slowly

  canvasWidth = 400;
  canvasHeight = 400;

  createCanvas(canvasWidth, canvasHeight);

  // stepSize = 10;
  stepSize = 1;
  center = canvasHeight / 2;
  amplitude = canvasHeight / 4;
  period = canvasWidth / 4;

  pos = createVector(0, 200);

  while (pos.x < canvasWidth) {
    posNext = sineNext(pos, stepSize, amplitude, period);
    curveSegments.push(new Line(pos, posNext));
    // pos = posNext.copy();
    pos = posNext;
  }
}

let i = 0;
function draw() {
  if (i < curveSegments.length) {
    curveSegments[i].display();
    i++;
  }
}

function sineNext(pos, stepSize, amplitude, period) {
  /* pos: vector
   * stepSize: float
   * amplitude: float
   * 
   * returns: vector
   */

  newX = pos.x + stepSize;
  b = (2 * Math.PI) / period
  newY = center + amplitude * Math.sin(b * newX);
  return createVector(newX, newY);
}

class Line {
  // a, b: vector
  constructor(a, b) {
    this.start = a.copy();
    this.end = b.copy();
  }

  display() {
    stroke(255);
    line(this.start.x, this.start.y, this.end.x, this.end.y);
  }
}
