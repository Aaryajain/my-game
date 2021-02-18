var player;
var gameState = 0;
var database;
var playerCount;
var form,game;
var allPlayers;

function setup() {
  createCanvas(800,400);
  //player = createSprite(400, 390 , 50, 50);

  
}

function draw() {
  background(255,255,255);
  if(gameState===0){
    form=new Form()
    form.display();
  }  
  drawSprites();
}