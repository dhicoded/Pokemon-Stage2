class Contestant {
  constructor(){
    this.index = null;
    this.playername=null;
    this.pokemon = 0;
    this.attacktype = null;
    this.health=1000;
  }

  getCount(){
    var contestantCountRef = database.ref('contestantCount');
    contestantCountRef.on("value",(data)=>{
      contestantCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      contestantCount: count
    });
  }

  update(){
    this.playername=this.index;
    var contestantIndex = "contestants/contestant" + this.index;
    database.ref(contestantIndex).set({
      playername:this.playername,
      playerpokemon:this.pokemon,
      playerattack:this.attacktype,
      health:this.health,
    });
  }

  static getPlayerInfo(){
    var contestantInfoRef = database.ref('contestants');
    contestantInfoRef.on("value",(data)=>{
      allContestants = data.val();
    })
  }
}