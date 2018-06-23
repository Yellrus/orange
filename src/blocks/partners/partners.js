$(document).ready(function() {
   //slider partners
   var slider = tns({
    container: "#partners",
    loop: true,
    mouseDrag: true,
    controls: false,
    nav: false,
    items: 1,
    speed: 500,
    edgePadding: 60,

    responsive: {
      350: {
        items: 2,
        edgePadding: 10
      },

      550: {
        items: 3,
        edgePadding: 10
      },

      768: {
        items: 6,
      },

      1024: {
        items: 6,
      },
    }
  });
});
