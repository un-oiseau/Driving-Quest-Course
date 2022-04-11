$(function(){
    // $('.register-purchase .row .col-md-6:nth-child(2)').load('https://course.drivingquest.com/api/register/purchase/parent-taught-course?source=drivingquest-express');
    $( ".btn-prohibit" ).click(function() {
      var $el1 = $(".btn-no"),
      x =500,
      originalColor = $el1.css("background");
      $el1.css("background", "rgba(159, 210, 219, 0.623)");
      setTimeout(function(){
        $el1.css("background", originalColor);
      }, x);
    });
  });


  $(function(){
    $( ".btn-prohibit" ).click(function() {
      var $el2 = $(".btn-email"),
      x =500,
      originalColor2 = $el2.css("background");
      $el2.css("background", "rgba(159, 210, 219, 0.623)");
      setTimeout(function(){
        $el2.css("background", originalColor2);
      }, x);
    });
  });

  $(function(){
    $( ".btn-prohibit" ).click(function() {
      var $el3 = $(".btn-fedex"),
      x =500,
      originalColor3 = $el3.css("background");
      $el3.css("background", "rgba(159, 210, 219, 0.623)");
      setTimeout(function(){
        $el3.css("background", originalColor3);
      }, x);
    });
  });




  