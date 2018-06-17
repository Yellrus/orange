$(document).ready(function () {
    $('.burger').on('click', function () {
        $(this).toggleClass('burger--active');
        $('.hero-menu').toggleClass('hero-menu--open');
    });
});
