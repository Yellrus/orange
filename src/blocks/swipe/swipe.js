document.addEventListener('DOMContentLoaded', function() {

  if (document.getElementById('swipe-panel')) {

      window.mySwipe = new Swipe(document.getElementById('swipe-panel'), {
        startSlide: 0,
        speed: 500,
        draggable: true,
        continuous: true,
        disableScroll: true,
        stopPropagation: true,
      });

      // включить видимость блока (по умолчанию скрыт)
      document.getElementById('swipe-panel').classList.add('swipe--enable');

  }

});
