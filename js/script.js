// Business LOGIC
function Dice(roll, score, player){
  this.roll = roll;
  this.score = score;

};

// DiceRoll.prototype.count = function(){
//   if (this.roll = 1) {
//     this.score =0;
//     alert("Sorry Player1, you rolled a 1. Your turn is over.")
//   }
//   else {
//     this.score +=this.roll;
//   }
// };

var calcScore = function(number){
  var tempScore = 0;

  if (number ===1) {
    return "Sorry You rolled a 1. Score is zero"
  }
  else {
    return tempScore += number;
  }

}


var randomize = function(){
  var randomNumber = Math.floor((Math.random() * 6) + 1);
   return randomNumber;
}

// USER LOGIC
$(document).ready(function(){
  $("#img1").click(function(){
    $("#img1").hide();
    $("#img2").show();
  });

  $("#btn-hold").click(function(){
    $("#btn-player2").toggle();
    $("#btn-player1").toggle();
  });

  $("#img2").click(function(){
    $("#img1").show();
    $("#img2").hide();
  });

  $(".play").click(function(){
    $(".row").show();

  })
  // Player 1
  $("#btn-player1").click(function(){
    var player1 = randomize();
    $(".player1Result").text(player1);
    var score = calcScore(player1);
    $(".player1Score").text(score);
  });

  // Player 2

  $("#btn-player2").click(function(){
    var player2 = randomize();
      $(".player2Result").text(player2);
  })

  $("#blue").click(function(){
    $("body").removeClass();
    $("body").addClass("blue-background")
  });

  $("#pink").click(function(){
    $("body").removeClass();
    $("body").addClass("pink-background")
  });

  $("#light-red").click(function(){
    $("body").removeClass();
    $("body").addClass("red-background")
  });


});
