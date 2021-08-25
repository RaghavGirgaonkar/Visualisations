// Class Brick to make Moving bricks

class Brick{
  constructor(col, y){
   this.brickColor = col;
   this.yPos = y;
   this.xPos = 0;
  }
  
  //This function creates a brick
  createBrick(){
   fill(this.brickColor);
   rect(this.xPos, this.yPos, 200, 100);
  }
  
  //Set brick speed
  setSpeed(){
   this.xSpeed = 1; 
  }
  
  //Movement of Brick
  moveBrick(){
   this.xPos += this.xSpeed;
   if (this.xPos + 200 >= width || this.xPos <= 0){
     this.xSpeed *=-1;
   }
  }
}






function setup() {
  var width  = 1000;
  var height = 800;
  createCanvas(width,height);
  createP("Keep the mouse clicked to check whether the bricks are moving at same speed or not").style('color','black');
  //createP("to check whether the bricks").style('color','black');
  //createP("are moving at same speed or not").style('color','black');
  //background(0);

}

//Creating two bricks

let brick1 = new Brick("white",300);
let brick2 = new Brick("black", 600);

brick1.setSpeed();
brick2.setSpeed();

function draw() {
  background(0);
  if(mouseIsPressed){
   background(50); 
  }
  brick1.createBrick();
  brick1.moveBrick();
  if(!mouseIsPressed){
   createBars(); 
  }
  brick2.createBrick();
  brick2.moveBrick();  

}

//Create Bars
function createBars(){
  let num_bars = 10;
  for(let i = 0; i<=width/num_bars; i++){
    fill('white');
    if(i % 2 == 0){
      rect(i*num_bars, height, 10, -height);
    }
  }
}
