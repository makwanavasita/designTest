$(window).scroll(function(){
    var sticky = $('header'),
        scroll = $(window).scrollTop();
  
    if (scroll >= 100) sticky.addClass('fix');
    else sticky.removeClass('fix');
});


$('.hero-sider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

var swiper = new Swiper(".col-swiper", {
    slidesPerView: 3,
      spaceBetween: 20,
      hide: true,
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: true,
    },
});
var swiper = new Swiper(".off-swiper", {
    slidesPerView: 4,
      spaceBetween: 20,
      hide: true,
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: true,
    },
});

$('.main-content .owl-carousel').owlCarousel({
    stagePadding: 50,
    loop: true,
    margin: 10,
    nav: true,
    navText: ["<img src='images/Caretleft.png'>","<img src='images/CaretRight.png'>"],
   
    navContainer: '.main-content .custom-nav',
    responsive:{
        0:{
            items: 1
        },
        600:{
            items: 2
        },
        1000:{
            items: 2
        }
    }
});
$(document).ready(function() {
    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });
});