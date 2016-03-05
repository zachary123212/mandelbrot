var DIMX = 700;
var DIMY = 700;

var mand;

function ComplexPlane(range){
  this.maxX =  range;
  this.minX = -1 * range;
  this.maxY =  range;
  this.minY = -1 * range;

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
  plane = new ComplexPlane(2);
  mand = new Mandelbrot();
}

function isMand(x, y){
  tmp = math.complex(0,0);
  for(i = 0; i < 100; i++){
    tmp = math.add(math.pow(tmp, 2), math.complex(x,y));
    // print(tmp);
    if(math.norm(tmp) > 16){
      return false;
    }
  }
  return true;
}

function draw() {
  plane.initialize();

  for(x = plane.minX; x < plane.maxX; x+=0.01){
    for(y = plane.minY; y < plane.maxY; y+=0.01){
      if(isMand(x,y)){
        plane.plot(x,y);
      }
    }
  }
  mand.show();
}
