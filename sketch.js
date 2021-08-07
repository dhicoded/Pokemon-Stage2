var canvas, backgroundImage;

var gameState = 0;
var contestantCount;
var allContestants;
var answer;
var database;

var question, contestant, quiz;
var pokemon;

var pokemon1Img,pokemon2Img,pokemon3Img,pokemon4Img;

function preload(){
  pokemon1Img=loadImage('images/gengar.png');
  pokemon2Img=loadImage('images/charizard.png');
  pokemon3Img=loadImage('images/venusaur.png');
  pokemon4Img=loadImage('images/greninja.png');
}

function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  pokemon=new Pokemon();
  createResetButton();
}

function draw(){
  background("limegreen");

  if(contestantCount===2){
    game.update(1)
  }

  if(gameState === 1){
    clear();
    game.play();
  }

  if(gameState === 2){
    game.end();
  }

}

function createResetButton(){
  resetButton=createButton('Reset Game');
  resetButton.position(750,20);
  resetButton.mousePressed(()=>{
    game.update(0);
    contestant.updateCount(0);
    var contestantRef = database.ref('contestants');
    contestantRef.remove();
  });
}