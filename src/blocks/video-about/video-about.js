$(document).ready(function() {
  var figure = $(".video-about__item").hover(hoverVideo, hideVideo);

  function hoverVideo(e) {
    $('video', this).get(0).play();
  }

  function hideVideo(e) {
    $('video', this).get(0).pause();
  }


  //slider video about
  if (document.getElementById('videoAbout')) {
    var slider = tns({
      container: "#videoAbout",
      loop: true,
      mouseDrag: true,
      nav: false,
      items: 1,
      edgePadding: 32,
      speed: 500,
      controlsContainer: ".video-about__controls",

      responsive: {
        350: {
          items: 1,
        },

        550: {
          items: 1,
        },

        768: {
          items: 2,
        },

        1024: {
          items: 2,
          edgePadding: 120,
        },

        1200: {
          edgePadding: 1,
          items: 3,
        },
      }

    });
  }
});
