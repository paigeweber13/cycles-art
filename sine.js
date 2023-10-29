let curveSegments = [];

function setup() {
  createCanvas(400, 400);

  segmentLength = 100;
  numSteps = 5;

  posA = createVector(100, 100);
  posB = createVector(posA.x + segmentLength, 100);
  curveDiffY = 20;

  for (var i = 0; i < numSteps; i++) { 
    curveSegments.push(new Line(posA, posB));
    posA = posB.copy();
    posB.y = posB.y + curveDiffY;

    // little bit of math to find out where x is while keeping segment length
    // constant
    posB.x = posB.x + Math.sqrt(segmentLength ** 2 - curveDiffY ** 2);
  }

  console.log(curveSegments);
}

function draw() {
  for (var i = 0; i < curveSegments.length; i++) { 
    curveSegments[i].display();
  }
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
