var DIMX = 700;
var DIMY = 700;

var mand;

function ComplexPlane(){
  this.maxX =  20;
  this.minX = -20;
  this.maxY =  20;
  this.minY = -20;

  this.origin = createVector(0,0);

  this.initialize = function(){
    line(0, DIMY/2, DIMX, DIMY/2);
    line(DIMX/2, 0, DIMX/2, DIMY);
  };

  this.plot = function(x,y){
    rect(map(x, this.minX, this.maxX, 0, DIMX), map(y, this.minY, this.maxY, DIMY, 0), 1, 1);
  };
}

function Mandelbrot() {

  this.show = function(){
    // show = function() {
    //   for(i = 0; i < )
    // };
  };
}

function setup() {
  createCanvas(DIMX, DIMY);
  plane = new ComplexPlane();
  mand = new Mandelbrot();
}

function draw() {
  plane.initialize();

  for(x = plane.minX; x < plane.maxX; x+=0.5){
    for(y = plane.minY; y < plane.maxY; y+=0.5){
      if(dist(x,y,0,0) < 10){
        plane.plot(x,y);
      }
    }
  }
  mand.show();
}
