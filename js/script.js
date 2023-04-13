$(document).ready(function() {
    $(".clickable").click(function() {
      $(".choice-show").slideToggle(1000);
      $(".choice-hide").slideToggle(1000);
    });

    $("button#light").click(function() {
        $("body").removeClass();
        $("p, h2, h3").removeClass();
      $("body").addClass("white-background");
    });


    $("button#dark").click(function() {
        $("body").removeClass();
        $("p, h2, h3").removeClass();
      $("body").addClass("black-background");
      $("p, h2, h3").addClass("txt-color");
    });





   








  

});