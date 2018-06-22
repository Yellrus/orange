$(document).ready(function() {
var figure = $(".video-about__item").hover( hoverVideo, hideVideo );

function hoverVideo(e) {
    $('video', this).get(0).play();
}

function hideVideo(e) {
    $('video', this).get(0).pause();
}


//slider video about

var slider = tns({
  container: "#videoAbout",
  loop: true,
  mouseDrag: true,
  nav: false,
  items: 3,
  speed: 500,
  controlsContainer: ".video-about__controls",
});
});
