//CODIGUIN DA BOLA
let xBall = 250
let yBall = 280
let diameter = 20
let radius = diameter/2
var xBallspeed = 12
var yBallspeed = 12

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

//verificação da colisão
let collision = false

//pontinhos
let myscores = 0
let opponentscores = 0

//Para o computador da uma chance pra gente
let errorchance = 0

//musiquinha
let soundTrack
let scores
let platformSound

function preload(){
  soundTrack = loadSound('sons/soundtrack.mp3')
  scores = loadSound('sons/scores.mp3')
  platformSound = loadSound('sons/platformsound.mp3')
}
function setup(){
  createCanvas(500, 600)
  soundTrack.loop()
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
  calculation_of_chance_of_error()
  //multiplayer_opponent_movement()
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
  if (keyIsDown(LEFT_ARROW) && xPlatform > 3){
    xPlatform -= 10 
  }
  if (keyIsDown(RIGHT_ARROW) && xPlatform < 422){
    xPlatform += 10
  }
}
function show_opponent_platform(){
  fill(255)
  rect(xOpponentplatform, yOpponentplatform, platformwidth, platformheight, platformcorner)
}
function opponent_platform_move(){
  opponentplatformspeed = xBall - xOpponentplatform - platformheight/2 - 72
  xOpponentplatform += opponentplatformspeed + errorchance
  calculation_of_chance_of_error()
  if(xOpponentplatform < 0){
    xOpponentplatform = 0
  }
  if(xOpponentplatform > 425){
    xOpponentplatform = 425
  }
}
function calculation_of_chance_of_error(){
  if (opponentscores >= myscores) {
    errorchance += 1
    if (errorchance >= 7){
      errorchance = 85
    }
  } else {
    errorchance -= 1
    if (errorchance <= 3){
      errorchance = 84
    }
  }
}
function multiplayer_opponent_movement(){
  if (keyIsDown(65) && xOpponentplatform > 3){
    xOpponentplatform -= 10 
  }
  if (keyIsDown(68) && xOpponentplatform < 422){
    xOpponentplatform += 10
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
    platformSound.play()
  }
}
function opponent_collision_checklibrarie(){ 
  collision = collideRectCircle(xOpponentplatform, yOpponentplatform, platformwidth, platformheight, xBall, yBall, radius)
  if(collision){
    yBallspeed *= -1
    platformSound.play()
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
    scores.play()
  }
  if ( yBall < 12){
    myscores += 1
    scores.play()
  }
}