
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

  $("#img2").click(function(){
    $("#img1").show();
    $("#img2").hide();
  });
  // Player 1
  $("#btn-player1").click(function(){
    var player1 = randomize();
    $(".player1Result").text(player1);
  });

  // Player 2

  $("#btn-player2").click(function(){
    var player2 = randomize();
      $(".player2Result").text(player2);
  })

});
