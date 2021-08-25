let time = 0;
let wave = [];
let width = 1000;
let height = 800;

let slider;

function setup() {
  createCanvas(width, height);
  slider = createSlider(1, 100, 1);
  createP("Adjust slider value from 1 to 100 to change number of Fourier Components").style('color','black');
}


function draw() {
  background(50);
  translate(200,400);
  let x = 0;
  let y = 0;
  for (let i = 0; i < slider.value(); i++) {
    let prevx = x;
    let prevy = y;

    let n = i * 2 + 1;
    let radius = 100 * (4 / (n * PI));
    x += radius * cos(n * time);
    y += radius * sin(n * time);

    stroke(255, 100);
    noFill();
    ellipse(prevx, prevy, radius * 2);

    //fill(255);
    stroke(255);
    line(prevx, prevy, x, y);
    //ellipse(x, y, 8);
  }
  wave.unshift(y);


  translate(200, 0);
  line(x - 200, y, 0, wave[0]);
  beginShape();
  noFill();
  for (let i = 0; i < wave.length; i++) {
    vertex(i, wave[i]);
  }
  endShape();

  time += 0.05;


  if (wave.length > 575) {
    wave.pop();
  }
  
}
