// Business Logic

function randomNumber(){
var ramNumber = Math.floor(Math.random()*6)+1);
return ramNumber;
}

function Dice(number){
  this.number = number;
  this.score = [];
}

function Score(score){
  this.score = score;
}

Dice.prototype.Calculation = function(){

}

// User Logic

$(document).ready(function(){
  $("button#player1").click(function(){

    var result = randomNumber()
    var newRoll = new Dice(result);
    

  })
})
