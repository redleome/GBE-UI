$("#menu").click(function(e) {
  e.preventDefault();
  $("#sidenav").toggleClass("sidenav-collapsed");
});

$("#sidenav-close").click(function(e) {
  $("#sidenav").toggleClass("sidenav-collapsed");
});

$(".expandable-section > header").click(function(e) {
  $(this).parent('.expandable-section').toggleClass("expanded");
});

// $(".card-link").click(function(e) {
//   $(this).child('collapse').toggleClass("show");
// });
