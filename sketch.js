function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  fill (ball.color[0])
  circle(ball.x,ball.y,20)
  ball.velocityX=1
  ball.x=ball.x+ball.velocityX
}
var ball={
  x: 10,
  y: 20,
  velocityX:0,
  velocityY:0,
  color:["blue","pink","lavender","teel","magenta"]
}