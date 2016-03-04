var DIMX = 700;
var DIMY = 700;

var mand;

function ComplexPlane(){
  this.xMax =  1 * (DIMX / 2);
  this.xMin = -1 * (DIMX / 2);
  this.yMax = -1 * (DIMY / 2);
  this.yMin =  1 * (DIMX / 2);

  this.plot = function(x,y){
    rect(DIMX/2 + x, DIMY/2 - y, 1, 1);
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
  plane.plot(0,0);
  plane.plot(10,20);
  mand.show();
}
