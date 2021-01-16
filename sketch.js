
let currMin = 0;
function setup() {
  createCanvas(420, 420);
  currMin = minute();
  // noStroke();
  // noLoop();
}

  const buffer = 60;
function draw() {

	if(minute() != currMin) {
		currMin = minute();
		print(currMin);
	}
  // showHours();
  
  const hourColorDark = color(100, 50, 150);
  const hourColorLight = color(50, 50, 100);
  
  let h = (hour()+24-1)%24;
  
  //top row
  for(let i = 0; i < 7; i++) {
    fill(170);
    if(i%2 == 0)
      fill(150);
    
    if(h >= i) {
      fill(hourColorDark);
      if(i%2 == 0)
        fill(hourColorLight);
    }
    
    square(i*buffer,0,60);
  }
  //right
  for(let i = 1; i < 6; i++) {
    fill(170);
    if(i%2 == 0)
      fill(150);
    
    if(h >= 6 + i) {
      fill(hourColorDark);
      if(i%2 == 0)
        fill(hourColorLight);
    }
    
    square(width-buffer,i*buffer,60);
  }
  //bottom row
  for(let i = 0; i < 7; i++) {
    fill(170);
    if(i%2 == 0)
      fill(150);
    
    if(h >= 12+i) {
      fill(hourColorDark);
      if(i%2 == 0)
        fill(hourColorLight);
    }
    square((6-i)*buffer,height - buffer,60);
  }
  //left
  for(let i = 1; i < 6; i++) {
    fill(170);
    if(i%2 == 0)
      fill(150);
    
    if(h >= 18+i) {
      fill(hourColorDark);
      if(i%2 == 0)
        fill(hourColorLight);
    }
    
    square(0,(6-i)*buffer,60);
  }
  
  
  let yellow = color(255, 204, 0);
  let yellow2 = color(200, 204, 0);
  
  let yellowLight = 150;
  let yellow2Light = 180;
  
  fill(yellowLight);
  if(minute() >= 15)
    fill(yellow);
  square(buffer, buffer, (width-2*buffer) / 2);
  
  fill(yellow2Light);
  if(minute() >= 30)
    fill(yellow2);
  square((width) / 2, buffer, (width-2*buffer) / 2);
  
  fill(yellowLight);
  if(minute() >= 45)
    fill(yellow);
  square((width) / 2, (height) / 2, (width-2*buffer) / 2);
  
  fill(yellow2Light);
  square(buffer, (height) / 2, (width-2*buffer) / 2);

  if(minute() < 15)
    drawSquareTL(minute() % 15);
  else if(minute() < 30)
    drawSquareTR(minute() % 15, yellow2);
  else if(minute() < 45)
    drawSquareBR(minute() % 15);
  else
    drawSquareBL(minute() % 15);
}

function drawSquareBR(num) {
  const grayvalues = 255 / num;
  const boxSize = (width - buffer) / 30;

  const realSize = (map(millis() % 1000, 0, 1000, 0.9, 1.0));

  noFill();
  strokeWeight(4);
  stroke(51);
  square((width - buffer) / 2, (height - buffer) / 2, boxSize*realSize * 15);

  for (let i = 0; i < num; i++) {
    fill(i * grayvalues);
    // ellipse(xloc, yloc, realSize - i * steps, realSize - i * steps);
    const s = (num - i) * boxSize * realSize;
    noStroke();
    square((width - buffer) / 2, (height - buffer) / 2, s);
    stroke(51);
  }
}
function drawSquareTR(num, c) {
  const grayvalues = 255 / num;
  const boxSize = (width - buffer) / 30;

  const realSize = (map(millis() % 1000, 0, 1000, 0.9, 1.0));

  noFill();
  strokeWeight(4);
  stroke(51);
  square((width - buffer) / 2, buffer, boxSize*realSize * 15);

  for (let i = 0; i < num; i++) {
    // c.setAlpha(i*grayvalues);
    // fill(c);
    fill(i * grayvalues);
    const s = (num - i) * boxSize * realSize;
    noStroke();
    square((width - buffer) / 2, buffer, s);
    stroke(51);
  }
}
function drawSquareTL(num) {
  const grayvalues = 255 / num;
  const boxSize = (width - buffer) / 30;

  const realSize = (map(millis() % 1000, 0, 1000, 0.9, 1.0));

  noFill();
  strokeWeight(4);
  stroke(51);
  square(buffer, buffer, boxSize*realSize * 15);

  for (let i = 0; i < num; i++) {
    fill(i * grayvalues);
    const s = (num - i) * boxSize * realSize;
    noStroke();
    square(buffer, buffer, s);
    stroke(51);
  }
}
function drawSquareBL(num) {
  const grayvalues = 255 / num;
  const boxSize = (width - buffer) / 30;

  const realSize = (map(millis() % 1000, 0, 1000, 0.9, 1.0));

  noFill();
  strokeWeight(4);
  stroke(51);
  square(buffer, (height-buffer)/2, boxSize*realSize * 15);
  
  for (let i = 0; i < num; i++) {
    fill(i * grayvalues);
    const s = (num - i) * boxSize * realSize;
    noStroke();
    square(buffer, (height-buffer)/2, s);
    stroke(51);
  }
}