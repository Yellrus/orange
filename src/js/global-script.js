//Если на проекте jQuery
$(document).ready(function() {

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
  if (document.getElementById('newsBar')) {
    var sidebar = new StickySidebar("#newsBar", {
      containerSelector: "#newsContent",
      innerWrapperSelector: ".news__bar-inner",
      topSpacing: 20,
      bottomSpacing: 40
    });
  }
}

$('.ui-dropdown__select').select2({
  allowClear: false,
  minimumResultsForSearch: Infinity
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
