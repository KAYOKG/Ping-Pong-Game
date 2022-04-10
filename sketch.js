//CODIGUIN DA BOLA
let xBall = 250
let yBall = 280
let diameter = 20
let radius = diameter/2
var xBallspeed = 6
var yBallspeed = 6

//CODIGUIN DA PLATAFORMA
let xPlatform = 212.5
let yPlatform = 584
let platformwidth = 75
let platformheight = 15
let platformcorner = 3

//CODIGUIN DO OPONENTE
let xOpponentplatform = 212.5
let yOpponentplatform = 3
let opponentplatformspeed 

let collision = false

let myscores = 0
let opponentscores = 0

function setup(){
  createCanvas(500, 600)
}
function draw() {
  background(35)
  show_the_ball()
  ball_movement()
  edge_check()
  show_the_platform()
  platform_movement()
  show_opponent_platform()
  opponent_platform_move()
  //collision_check()
  //opponent_collision_check()
  collision_checklibrarie()
  opponent_collision_checklibrarie()
  score()
  scoring()
}
function show_the_ball(){
  fill(250)
  circle(xBall, yBall, diameter)
}
function ball_movement(){
  xBall += xBallspeed
  yBall += yBallspeed
}
function edge_check(){
  if (xBall + radius > width || xBall - radius < 0){
    xBallspeed *= -1
  }
  if (yBall + radius > height || yBall - radius < 0){
    yBallspeed *= -1
  }
} 
function show_the_platform(){
  fill(255,0,0)
  rect(xPlatform, yPlatform, platformwidth, platformheight, platformcorner)
}
function platform_movement(){
  if (keyIsDown(LEFT_ARROW) && xPlatform > 0){
    xPlatform -= 10 
  }
  if (keyIsDown(RIGHT_ARROW) && xPlatform < 425){
    xPlatform += 10
  }
}
function show_opponent_platform(){
  fill(255)
  rect(xOpponentplatform, yOpponentplatform, platformwidth, platformheight, platformcorner)
}
function opponent_platform_move(){
  opponentplatformspeed = xBall - xOpponentplatform - platformheight/2 - 72
  xOpponentplatform += opponentplatformspeed
  if(xOpponentplatform < 0){
    xOpponentplatform = 0
  }
  if(xOpponentplatform > 425){
    xOpponentplatform = 425
  }
}
/*function collision_check(){
  if (xBall - radius < xPlatform + platformwidth 
    && yBall - radius < yPlatform + platformheight
    && yBall + radius > yPlatform
    && xBall + radius > xPlatform){
    yBallspeed *= -1
  }
}
function opponent_collision_check(){
  if (xBall - radius < xOpponentplatform + platformwidth 
    && yBall - radius < yOpponentplatform + platformheight
    && yBall + radius > yOpponentplatform
    && xBall + radius > xOpponentplatform){
    yBallspeed *= -1
  }
}*/
function collision_checklibrarie(){ 
  collision = collideRectCircle(xPlatform, yPlatform, platformwidth, platformheight, xBall, yBall, radius)
  if(collision){
    yBallspeed *= -1
  }
}
function opponent_collision_checklibrarie(){ 
  collision = collideRectCircle(xOpponentplatform, yOpponentplatform, platformwidth, platformheight, xBall, yBall, radius)
  if(collision){
    yBallspeed *= -1
  }
}
function score(){
  textAlign(CENTER)
  textSize(30)
  fill(255,0,0)
  text(myscores, 18, 300)
  fill(300)
  text(opponentscores, 480, 300)
}
function scoring(){
  if (yBall > 590){
    opponentscores += 1
  }
  if ( yBall < 12){
    myscores += 1
  }
}