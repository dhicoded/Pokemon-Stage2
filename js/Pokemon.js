class Pokemon {
  constructor() {
    this.title = createElement('h1')
    this.question= createElement('h2');
    this.greeting=createElement("h2");

    var gengar="<img src='images/gengar.png' width='100px' height='100px'>";
    var charizard="<img src='images/charizard.png' width='100px' height='100px'>";
    var venusaur="<img src='images/venusaur.png' width='100px' height='100px'>";
    var greninja="<img src='images/greninja.png' width='100px' height='100px'>";
    this.button1= createButton(gengar);
    this.button2 = createButton(charizard);
    this.button3 = createButton(venusaur);
    this.button4 = createButton(greninja);

    this.p1btn1=createButton();
    this.p1btn2=createButton();
    this.p2btn1=createButton();
    this.p2btn2=createButton();
    this.player1health=createElement('h2');
    this.player2health=createElement('h2');
  }

  hide(){
    this.title.hide();
    this.question.hide();
    this.button1.hide();
    this.button2.hide();
    this.button3.hide();
    this.button4.hide();
  }

  displayPokemons(){
    this.title.html("Pokemon Battle");
    this.title.position(350, 0);

    this.question.html("Choose your pokemon!" );
    this.question.position(325,40);
    this.button1.position(100,180);
    this.button2.position(250,180);
    this.button3.position(400,180);
    this.button4.position(550,180);


    this.button1.mousePressed(()=>{
      this.hidepokemonbuttons();
      this.greeting.html("Waiting for your opponent to join");
      this.greeting.position(400, 200);
      contestantCount++;
      contestant.pokemon=1;
      contestant.playername=contestant.index;
      contestant.attacktype = null;  
      contestant.update();
      contestant.updateCount(contestantCount);
    });

    this.button2.mousePressed(()=>{   
      this.hidepokemonbuttons();
      this.greeting.html("Waiting for your opponent to join");
      this.greeting.position(400, 200);
      contestantCount++;
      contestant.playername=contestant.index;
      contestant.pokemon = 2;
      contestant.attacktype = null;  
      contestant.update();
      contestant.updateCount(contestantCount);
    });

    this.button3.mousePressed(()=>{
      this.hidepokemonbuttons();
      this.greeting.position(400, 200);
      this.greeting.html("Waiting for your opponent to join");
      contestant.playername=contestant.index;
      contestant.pokemon = 3;
      contestant.attacktype = null;  
      contestantCount++;
      contestant.update();
      contestant.updateCount(contestantCount);
    });

    this.button4.mousePressed(()=>{
      this.hidepokemonbuttons();
      this.greeting.html("Waiting for your opponent to join");
      this.greeting.position(400, 200);
      contestant.playername=contestant.index;
      contestant.pokemon = 4;
      contestant.attacktype = null;  
      contestantCount++;
      contestant.update();
      contestant.updateCount(contestantCount);
    });
  }

  hidepokemonbuttons(){
    this.button1.hide();
    this.button2.hide();
    this.button3.hide();
    this.button4.hide();
  }

  hideAttackbuttons(){
    this.p1btn1.hide();
    this.p1btn2.hide();
    this.p2btn1.hide();
    this.p2btn2.hide();
  }

}