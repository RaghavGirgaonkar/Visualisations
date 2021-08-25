let particles = [];
let width = 1000;
let height = 800;
let num_particles = 100;
class Particle{
 constructor(){
  this.x = random(0,width);
  this.y = random(0,height);
  this.diameter = 10;
  this.xspeed = random(-5, 5);
  this.yspeed = random(-5,5);
 }
 
 move(){
   this.x += this.xspeed;
   this.y += this.yspeed;
   
   if(this.x <=0 || this.x >= width){
     this.xspeed *= -1;
   }
   if(this.y <=0 || this.y >= height){
     this.yspeed *= -1;
   }
 }
   
  pjoin(particles){
   particles.forEach(element =>{
      let dis = dist(this.x,this.y,element.x,element.y);
      if(dis<100) {
        stroke('rgba(255,255,255,0.4)');
        line(this.x,this.y,element.x,element.y);
      }
    });
  }
 
 display(){
   fill('rgba(255,255,255)');
  ellipse(this.x, this.y, this.diameter, this.diameter); 
 }
}

function setup() {
  createCanvas(width, height);
  for(let i = 0; i<= num_particles; i++){
   particles.push(new Particle());    
  }

}


function draw() {
  background('#0f0f0f');
  for(let i = 0; i < particles.length; i++){
   particles[i].move();
   particles[i].pjoin(particles.slice(i));
   particles[i].display();
  }

}
