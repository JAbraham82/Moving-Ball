var ball =  {
  x: 20,
  y: 30,
  r: 30,
  xspeed: 0,
  yspeed: 0,
  color: ["red", "yellow", "blue", "green"]
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  circle(ball.x, ball.y, ball.r);
  fill(ball.color[0]);
  ball.xspeed = 1;
  ball.x = ball.x + ball.xspeed;
  ball.yspeed = 1;
  ball.y = ball.y + ball.yspeed;
}