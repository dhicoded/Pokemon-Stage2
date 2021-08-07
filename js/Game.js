class Game {
  constructor(){
  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
        contestant.index=contestantCount+1;
      }
      pokemon.displayPokemons();
      pokemon.hideAttackbuttons();
    }
  }

  play(){
      pokemon.hidepokemonbuttons();
      //pokemon.showattackbuttons();
      //write code to change background color to yellow
      background("yellow");
      pokemon.question.hide();
      pokemon.greeting.hide();
      textSize(18);
      text("Game begins",350,90);
      Contestant.getPlayerInfo();

      var imgX,attack1,attack2;
      var p1btn1,p1btn2,p2btn1,p2btn2;

      for(var plr in allContestants){
        //display both the pokemon side by side
  
        if(contestant.index==allContestants[plr].playername){
          imgX=50;
          text('You',80,380);
        }
        else{
          imgX=650;
          text('Opponent',680,380);
        }
        switch(allContestants[plr].playerpokemon){
          case 1:
            image(pokemon1Img,imgX,250,100,100);
            attack1='ShadowBall';
            attack2='ShadowClaw';
            break;
          case 2:
            image(pokemon2Img,imgX,250,100,100);
            attack1='ShadowBall2';
            attack2='ShadowClaw2';
            break;
          case 3:
            image(pokemon3Img,imgX,250,100,100);
            attack1='ShadowBal13';
            attack2='ShadowClaw3';
            break;
          case 4:
            image(pokemon4Img,imgX,250,100,100);
            attack1='ShadowBall4';
            attack2='ShadowClaw4';
            break;  
        }
        //display the attack buttons side by side
        if(contestant.index==allContestants[plr].playername){
          pokemon.p1btn1.show();
          pokemon.p1btn2.show();
          pokemon.p1btn1.html(attack1);
          pokemon.p1btn2.html(attack2);
          pokemon.p1btn1.position(200,250);
          pokemon.p1btn2.position(200,300);
        }
        else{
          pokemon.p2btn1.show();
          pokemon.p2btn2.show();
          pokemon.p2btn1.html(attack1);
          pokemon.p2btn2.html(attack2);
          pokemon.p2btn1.position(550,250);
          pokemon.p2btn2.position(550,300);
          pokemon.p2btn1.disabled=true;
          pokemon.p2btn2.disabled=true;
        }
        //code for the parameters for press of each button
        pokemon.p1btn1.mousePressed(()=>{
         //write code to calculate health and update health
         contestant.health=contestant.health-100;
         contestant.update();
        })
        pokemon.p1btn2.mousePressed(()=>{ 
          //write code to calculate health and update health
          contestant.health=contestant.health-200;
          contestant.update();
        })
    }
  }

  end(){
    console.log('Over');
  }
}