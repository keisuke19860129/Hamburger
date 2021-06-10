window.onload = function(){
    $(function() {
    $('.l-sidebar__hamburger').on('click',function(){
        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            $('.c-menu__list__slider,.c-slider__menu,.c-slider__sub-menu-item,.l-sidebar').addClass('active');
        } else {
            $('.c-menu__list__slider,.c-slider__menu,.c-slider__sub-menu-item,.l-sidebar').removeClass('active');
        }
    });
});
};