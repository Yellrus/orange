$(document).ready(function () {

// Params
    var mainSliderSelector = '.hero-slider',
        interleaveOffset = 0.5;

// Main Slider
    var mainSliderOptions = {
        loop: true,
        speed: 1000,
        autoplay: {
            delay: 60000
        },
        loopAdditionalSlides: 10,
        grabCursor: false,
        watchSlidesProgress: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: 'true'
        },
        // navigation: {
        //     nextEl: '.swiper-button-next',
        //     prevEl: '.swiper-button-prev'
        // },
        on: {
            init: function init() {
                this.autoplay.stop();
            },
            imagesReady: function imagesReady() {
                this.el.classList.remove('loading');
                this.autoplay.start();
            },
            slideChangeTransitionEnd: function slideChangeTransitionEnd() {
                var swiper = this,
                    captions = swiper.el.querySelectorAll('.hero-slider__caption');

                for (var i = 0; i < captions.length; ++i) {
                    captions[i].classList.remove('show');
                }
                swiper.slides[swiper.activeIndex].querySelector('.hero-slider__caption').classList.add('show');
            },
            progress: function progress() {
                var swiper = this;
                for (var i = 0; i < swiper.slides.length; i++) {
                    var slideProgress = swiper.slides[i].progress,
                        innerOffset = swiper.width * interleaveOffset,
                        innerTranslate = slideProgress * innerOffset;
                    swiper.slides[i].querySelector(".hero-slider__bgimg").style.transform = "translate3d(" + innerTranslate + "px, 0, 0)";
                }
            },
            touchStart: function touchStart() {
                var swiper = this;
                for (var i = 0; i < swiper.slides.length; i++) {
                    swiper.slides[i].style.transition = "";
                }
            },
            setTransition: function setTransition(speed) {
                var swiper = this;
                for (var i = 0; i < swiper.slides.length; i++) {
                    swiper.slides[i].style.transition = speed + "ms";
                    swiper.slides[i].querySelector(".hero-slider__bgimg").style.transition = speed + "ms";
                }
            }
        }
    };
    var mainSlider = new Swiper(mainSliderSelector, mainSliderOptions);
});
