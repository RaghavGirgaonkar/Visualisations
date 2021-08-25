//Class of Walkers

class Walker{
 constructor(bc,x,y){
   this.WColor = bc;
   this.xPos = x;
   this.yPos = y;   
 }
 //Display Walker
 display(){
   stroke(this.WColor);
   //strokeWeight(10);
   point(this.xPos,this.yPos);
 }
 //Step Walker
 
 step(){
  let num = int(random(4));
  let speed = 5;
  if(num == 0){
    this.xPos -= speed;
    //circle(x, y, 30);
  }
  if(num == 1){
    this.xPos += speed;
    //circle(x, y, 30);
  }
  if(num == 2){
    this.yPos -= speed;
    //circle(x, y, 30);
  }
  if(num == 3){
    this.yPos += speed;
    //circle(x, y, 30);
  }
 }
 
}

function setup() {
  createCanvas(1000,800);
  createP("Random Walkers with Uniform Probabilities for each of the 4 directions").style('color','black');
  background(0);
}

let w1 = new Walker("white", 500, 400);
let w2 = new Walker("red",700, 200);

function draw() {
  //let xpositions = [];
  //let ypositions = [];
  w1.step();
  w2.step();
  w1.display(); 
  w2.display();
 
  
  
}
