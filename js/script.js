// Business Logic
function Dice(randomNumber){
  this.randomNumber = randomNumber;
  this.scores = []
}

function Score(scores){
 this.scores = scores;
};

Dice.prototype.diceRoll = function(){
  total = 0;
  this.scores.forEach(function(score){
    return total + score;
  });
};

Dice.prototype.totalScore  = function(){
  return this.randomNumber + this.scores;
}

 var randomize = function(){
   var randomNumber = Math.floor((Math.random() * 6) + 1);
   return randomNumber;
 }


// USER LOGIC
$(document).ready(function(){
  $("button#player1").click(function(){
    var player1 = randomize();
    $("#player1Results").append("<p>" + player1 +"</p>")
  })
})
