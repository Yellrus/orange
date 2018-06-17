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
                375: {
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

    // var swiper = new Swiper('.swiper-container', {
    //     slidesPerView: 1,
    //     spaceBetween: 16,
    //     freeMode: true,
    // });
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



