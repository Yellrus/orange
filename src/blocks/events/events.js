// events calendar carousel
$(document).ready(function() {
  if (document.getElementById('events')) {
    var slider = tns({
      container: "#events",
      loop: true,
      edgePadding: 16,
      mouseDrag: true,
      items: 1,
      gutter: 16,
      //startIndex: 2,
      speed: 500,
      nav: false,
      controls: false,

      responsive: {
        560: {
          items: 2,
          edgePadding: 60,
          gutter: 24
        },

        1024: {
          items: 2,
          edgePadding: 60
        },

        // 1200: {
        //   items: 2
        // },

        1600: {
          items: 2,
          edgePadding: 315
        }
      }
    });
  }
});
