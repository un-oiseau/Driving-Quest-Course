$(function(){
let prohibit = $(".btn-prohibit");
let $el1 = $(".btn-no");
let $el2 = $(".btn-email");
let $el3 = $(".btn-fedex");
originalColor1 = $el1.css("background");
originalColor2 = $el2.css("background");
originalColor3 = $el3.css("background");
x =500;

prohibit.on("click", function(){
  let timespan =500;
  $(".btn-no").css({"background": "rgba(159, 210, 219, 0.623)"});
  $(".btn-email").css({"background": "rgba(159, 210, 219, 0.623)"});
  $(".btn-fedex").css({"background": "rgba(159, 210, 219, 0.623)"});

  setTimeout(function(){
    $el1.css("background", originalColor1);
    $el2.css("background", originalColor2);
    $el3.css("background", originalColor3);
    }, timespan);
  });
});




  