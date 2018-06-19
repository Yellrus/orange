//Если на проекте jQuery
$( document ).ready(function() {

    if (window.matchMedia("(max-width: 1200px)").matches) {
        var slider = tns({
            container: "#news",
            items: 1,
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

  // Get the container element
  var btnContainer = document.getElementById("filtersLabel");

  // Get all buttons with class="btn" inside the container
  var btns = btnContainer.getElementsByClassName("label--btn");

  // Loop through the buttons and add the active class to the current/clicked button
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("label--active");
      current[0].className = current[0].className.replace(" label--active", "");
      this.className += " label--active";
    });
  }
});

//Липкий сайдбар в новостях
var sidebar = new StickySidebar("#newsBar", {
  containerSelector: "#newsContent",
  innerWrapperSelector: ".news__bar-inner",
  topSpacing: 20,
  bottomSpacing: 40
});

// var sidebar = new StickySidebar('#sidebar', {
//   containerSelector: '#main-content',
//   innerWrapperSelector: '.sidebar__inner',
//   topSpacing: 20,
//   bottomSpacing: 20
// });

// Изоляция без jQuery
// (function(){
//   // code
// }());

// На проекте нет jQuery, но хочется $( document ).ready...
// function ready(fn) {
//   if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
//     fn();
//   } else {
//     document.addEventListener('DOMContentLoaded', fn);
//   }
// }
//
// ready(function(){
//   // code
// });



