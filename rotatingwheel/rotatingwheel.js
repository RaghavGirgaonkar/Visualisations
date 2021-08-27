let velocity = 1;
let radius = 100;
let centreX = 0;
let ang_vel = 1;
let angle = 0;

let time = 0;

function setup() {
  createCanvas(1500,800);
  createP("Cycloid made by the endpoint of a rotating wheel").style('color','black');
  //let wheel_pointY = radius;
  //let wheel_pointX = 0;
  
}

let xpos = [];
let ypos = [];
let xp2 = [];
let yp2 = [];
function draw() {
  background(50);
  line(0,500 + radius, 2000, 500 + radius);
  translate(50,500);
  //if(centreX + 200 + radius >= 1500 || centreX + 200 - radius <= 0){
  //   ang_vel *= -1;
     
  // }
   centreX = ang_vel*radius*time;
   let wheel_pointX = radius*(ang_vel*time - sin(ang_vel*time));
   let wheel_pointY = 2*radius - radius*(2  - cos(ang_vel*time));
   //let wp2_X = radius*(ang_vel*time - sin(ang_vel*time));
   //let wp2_Y = -radius*(2  + cos(ang_vel*time));
   xpos.push(wheel_pointX);
   ypos.push(wheel_pointY);
   //xp2.push(wp2_X);
   //yp2.push(wp2_Y);
   noFill();
   stroke(255);
   ellipse(centreX, 0 , radius * 2);
   stroke(255);
   fill(255);
   //v = createVector(wheel_pointX, wheel_pointY);
   ellipse(wheel_pointX,wheel_pointY, 8,8);
   line(wheel_pointX,wheel_pointY,centreX,0);
   if(xpos.length >=2000){
     xpos.pop();
     ypos.pop();
     //xp2.pop();
     //yp2.pop();
   }
   for(let i = 0; i < xpos.length; i++){
     ellipse(xpos[i],ypos[i], 8,8);
     //ellipse(xp2[i],yp2[i], 8,8);
   }
   
   
   time += 0.01;
  
  
  
  

}
