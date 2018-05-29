$(document).ready(function() {
  $(".light").click(function() {
    $("body").removeClass();
    $("body").addClass("lightback");
  });

  $(".dark").click(function() {
    $("body").removeClass();
    $("body").addClass("darkback");
  });
});
