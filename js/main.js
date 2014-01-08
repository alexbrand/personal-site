$(function() {
  $("#portfolio").wrapInner("<table cellspacing='30'><tr>");
  $("#portfolio").addClass("portfolio-horizontal");
  $(".portfolio-card").wrap("<td>");
  $(".portfolio-card").addClass("card-horizontal");
  $(".banner").addClass("banner-horizontal");

});
