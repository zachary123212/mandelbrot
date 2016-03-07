var DIMX = 700;
var DIMY = 700;

var mand;
var completed = false;

function ComplexPlane(range) {
  this.maxX = range;
  this.minX = -1 * range;
  this.maxY = range;
  this.minY = -1 * range;

  this.plot = function(x, y) {
    rect(map(x, this.minX, this.maxX, 0, DIMX), map(y, this.minY, this.maxY, DIMY, 0), 1, 1);
  };
}

function isMand(x, y) {
  tmp = math.complex(0, 0);
  for (i = 0; i < 100; i++) {
    tmp = math.add(math.pow(tmp, 2), math.complex(x, y));
    if (math.norm(tmp) > 5) {
      return i;
    }
  }
  return -1;
}

function drawMandelbrot() {
  xrange = (plane.maxX - plane.minX) / 600;
  yrange = (plane.maxY - plane.minY) / 600;
  
  for (x = plane.minX; x < plane.maxX; x += xrange) {
    for (y = plane.minY; y < plane.maxY; y += yrange) {
      val = isMand(x, y);
      if (val < 0) {
        fill(0);
      } else {
        fill(color('hsb(' + Math.floor(map(val, 0, 10, 0, 255)) + ', 100%, 50%)'));
      }
      plane.plot(x, y);
    }
  }
}

function setup() {
  createCanvas(DIMX, DIMY);
  plane = new ComplexPlane(2);
  noStroke();
  background(255);
  drawMandelbrot();
}

function mouseClicked() {
  mousePos = createVector(map(mouseX, 0, DIMX, plane.minX, plane.maxX), map(mouseY, 0, DIMY, plane.maxY, plane.minY));

  plane.maxX = mousePos.x + (plane.maxX - plane.minX) / 4;
  plane.minX = mousePos.x - (plane.maxX - plane.minX) / 4;
  plane.maxY = mousePos.y + (plane.maxY - plane.minY) / 4;
  plane.minY = mousePos.y - (plane.maxY - plane.minY) / 4;

  background(255);
  drawMandelbrot();
}

function draw() {

}
