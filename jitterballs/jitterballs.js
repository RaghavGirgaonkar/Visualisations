let jitter_balls = [];
let width = 1000;
let height = 800;

class Jitter{
  constructor(xspeed, yspeed){
    this.x = random(0, width);
    this.y = random(0,height);
    this.diameter = random(50, 100);
    this.xspeed = xspeed;
    this.yspeed = yspeed;
  }
  
  move(){
    this.x += random(-this.xspeed, this.xspeed);
    this.y += random(-this.yspeed, this.yspeed);
  }
  
  display(){
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}


function setup() {
  createCanvas(1000, 800);
  //background(50, 50, 100);
  for (let i = 0; i <= 50; i++){
    jitter_balls.push(new Jitter(2,2));
  }

}


function draw() {
  background(50, 50, 100);
  for (i = 0 ; i< jitter_balls.length; i++){
    jitter_balls[i].move();
    jitter_balls[i].display();    
  }

}
