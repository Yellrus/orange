$(document).ready(function() {
  if (document.getElementById('news')) {
    if (isMobile.any) {
      var slider = tns({
        container: "#news",
        edgePadding: 14,
        gutter: 9,
        rewind: true,
        speed: 400,
        nav: false,
        controls: false,
        //autoplay: true,

        responsive: {
          345: {
            edgePadding: 25,
            gutter: 16
          },

          768: {
            edgePadding: 80,
            gutter: 16,
            items: 2
          },

          900: {
            items: 2
          }
        }
      });
    }
  }
});
