// USER LOGIC
$(document).ready(function(){
  $("#img1").click(){
    $("img1").hide();
    $("img2").show();
  }

  $("#img2").click(function(){
    $("#img1").show();
    $("#img2").hide();
  })
})
