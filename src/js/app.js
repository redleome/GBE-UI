$("#menu").click(function(e) {
        e.preventDefault();
        // $("#sidenav").toggleClass("d-none");
        // $("#sidenav").toggleClass("d-none");
        // $("#sidenav").toggleClass("col-2 d-none");
         $("#sidenav").toggleClass("collapsed");
        // $("#content").toggleClass("col-12 col-9");
});

$("#sidenav-close").click(function(e) {
   $("#sidenav").toggleClass("collapsed");
});
