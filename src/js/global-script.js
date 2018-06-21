//Если на проекте jQuery
$(document).ready(function() {
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

  // Get the container element
  var btnContainer = document.getElementById("filtersLabel");

  // Get all buttons with class="btn" inside the container
  var btns = btnContainer.getElementsByClassName("label--btn");

  // Loop through the buttons and add the active class to the current/clicked button
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("label--active");
      current[0].className = current[0].className.replace(" label--active", "");
      this.className += " label--active";
    });
  }
});

if (window.matchMedia("(min-width: 1200px)").matches) {
  //Липкий сайдбар в новостях
  var sidebar = new StickySidebar("#newsBar", {
    containerSelector: "#newsContent",
    innerWrapperSelector: ".news__bar-inner",
    topSpacing: 20,
    bottomSpacing: 40
  });
}

// events calendar carousel
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

// toggle grid
var grid = true;
$(".toggle-grid").on("click", function() {
  if (grid === true) {
    $(this)
      .find("use")
      .attr("xlink:href", "img/sprite-svg.svg#grid-two");
    grid = false;

    $(".assistant__grid").addClass("assistant__grid--row_two");
  } else {
    $(this)
      .find("use")
      .attr("xlink:href", "img/sprite-svg.svg#grid-three");
    $(".assistant__grid").removeClass("assistant__grid--row_two");
    grid = true;
  }
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
