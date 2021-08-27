//Define some variables for the pendulums
//Angles
var a1 = 0;
var a2 = 0;
//Angular Velocities
var a1_v = 0;
var a2_v = 0;
//Angular Accelerations
var a1_a = 0;
var a2_a = 0;
//Masses
var m1 = 40;
var m2 = 40;
//Lengths
var r1 = 200;
var r2 = 200;
var g = 1;

let p2_xpoints = [];
let p2_ypoints = [];


function setup() {
  createCanvas(1800,800);
  pixelDensity(1);
  a1 = PI / 2;
  a2 = PI / 2;
  
  //brush = createGraphics(width, height);
  //brush.beginDraw();
  //brush.background(50);
  //brush.endDraw();
}


function draw() {
  background(50);
  //imageMode(CORNER);
  //image(brush, 0, 0, width, height);
  translate(width/2, 200);
  
  let num1 = -g * (2 * m1 + m2) * sin(a1);
  let num2 = -m2 * g * sin(a1 - 2 * a2);
  let num3 = -2 * sin(a1 - a2) * m2;
  let num4 = a2_v * a2_v * r2 + a1_v * a1_v * r1 * cos(a1 - a2);
  let den = r1 * (2 * m1 + m2 - m2 * cos(2 * a1 - 2 * a2));
  let a1_a = (num1 + num2 + num3 * num4) / den;

  num1 = 2 * sin(a1 - a2);
  num2 = a1_v * a1_v * r1 * (m1 + m2);
  num3 = g * (m1 + m2) * cos(a1);
  num4 = a2_v * a2_v * r2 * m2 * cos(a1 - a2);
  den = r2 * (2 * m1 + m2 - m2 * cos(2 * a1 - 2 * a2));
  let a2_a = (num1 * (num2 + num3 + num4)) / den;
  
  stroke(255);
  strokeWeight(2);
  let x1 = r1*sin(a1);
  let y1 = r1*cos(a1);
  let x2 = x1 + r2*sin(a2);
  let y2 = y1 + r2*cos(a2);
  p2_xpoints.push(x2);
  p2_ypoints.push(y2);
  //stroke(255);
  //stroke(255);
  line(0,0,x1,y1);
  ellipse(x1,y1,m1,m1);
  
  
  //stroke(255);
  line(x1,y1,x2,y2);
  ellipse(x2,y2,m2,m2);
  //stroke(255);
  
  
  a1_v += a1_a;
  a2_v += a2_a;
  a1 += a1_v;
  a2 += a2_v;
  
  
  for(let i = 0; i < p2_xpoints.length - 1; i++){
    stroke(255,0,0);
    strokeWeight(2);
    line(p2_xpoints[i], p2_ypoints[i],p2_xpoints[i+1], p2_ypoints[i+1]);
   //particles[i].move();
   //particles[i].pjoin(particles.slice(i));
   //particles[i].display();
  }
  if(p2_xpoints.length >= 2000){
    console.log("Yes");
    p2_xpoints = p2_xpoints.slice(1);
    p2_ypoints = p2_ypoints.slice(1);
  }
  
  console.log(p2_xpoints.length);
  //brush.beginDraw();
  //brush.strokeWeight(2);
  //brush.stroke(255);
  //brush.translate(width/2,50);
  ////if (frameCount > 1) {
  ////  brush.line(px2, py2, x2, y2);
  ////}
  //brush.point(x2,y2);
  //brush.endDraw();

  //px2 = x2;
  //py2 = y2;
}
