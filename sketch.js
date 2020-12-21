var hr
var min
var sec
var secAngle
var minAngle
var hrAngle




function setup() {
  createCanvas(500,500);
 
 angleMode(DEGREES)

  
}

function draw() {
  background("black"); 
 
  translate(250,250);
rotate(-90)

  hr=hour()
  min=minute()
  sec=second()
  
  
  


   secAngle=map(sec,0,60,0,360)
  minAngle=map(min,0,60,0,360)
  hrAngle=map(hr % 12,0,12,0,360) 
  

  

 

  
  
  push()
  rotate(secAngle)
  stroke(255,0,0)
  strokeWeight(7)
  line(0,0,100,0)
  
  pop()

  push()
  rotate(minAngle)
  stroke(1,254,0)
  strokeWeight(7)
  line(0,0,80,0)
  pop()

  push()
  rotate(hrAngle)
  stroke(0,5,251)
  strokeWeight(7)
  line(0,0,60,0)
  pop()

  strokeWeight(10);
  noFill();
  
  stroke(255,0,0);
  arc(0,0,300,300,0,secAngle);
  
  stroke(1,254,0)
  arc(0,0,270,270,0,minAngle);
 
  stroke(0,5,251)
  arc(0,0,240,240,0,hrAngle)

  
}