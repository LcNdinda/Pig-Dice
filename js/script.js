// BUSINESS LOGIC
 function page(){
   location.reload()
 }

  var arrays = [];
var calcScore = function(numbers){
  var tempscore = 0;


        if (numbers === 1) {
      return "Sorry You rolled a 1. Score is zero"
      
    }

    else {
      arrays.push(numbers);

      totalScore =  arrays.reduce((a,b)=>a+b);
      return totalScore;
      // tempscore += numbers;
      // ++tempscore;

    }
}

function Dice(){
  var tempScore = 0;
   var gameScore = 0;
}

var randomize = function(){
  var randomNumber = Math.floor((Math.random() * 6) + 1);
   return randomNumber;
}

var randNumber = randomize();

var playerScore = function(player){
  var roll = randNumber;
  var tempScore = 0;
  var arrays = [];

  if (roll === 1) {
    return 0;
  }
  else {
    arrays.push(roll);
    for (var i = 0; i < arrays.length; i++) {
      var total = tempScore + roll;
      return total;
    }


  }
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
    $(".row").fadeIn("slow");
    $("#mainImg").hide();

  })
  // Player 1
  $("#btn-player1").click(function(){
    var player1 = randomize();
    $(".player1Result").text(player1);
    var score1 = calcScore(player1);
    $(".player1Score").text(score1);
  });

  // Player 2

  $("#btn-player2").click(function(){
    var player2 = randomize();
      $(".player2Result").text(player2);
      var score2 = calcScore(player2);
      $(".player2Score").text(score2);

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
   $("#btn-reload").click(function(){
     page();

   });



});
