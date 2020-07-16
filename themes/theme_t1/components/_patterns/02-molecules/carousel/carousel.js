(function carouselScript($, Drupal) {
  Drupal.behaviors.carousel = {
    attach(context) {
      var mySwiper = new Swiper('.carousel-gallery .swiper-container', {
        slidesPerView: 'auto',
        spaceBetween: 10,
        centeredSlides: true,
        loop: true,
        pagination: {
          el: '.carousel-gallery .swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.carousel-gallery .carousel-gallery__button--next',
          prevEl: '.carousel-gallery .carousel-gallery__button--prev',
        },

      });


      mySwiper.on('slideChange', function () {
        // $('.carousel-gallery__right').text('#' + (mySwiper.realIndex+1))
      });

      mySwiper.on('imagesReady', function () { 
        mySwiper.update();
        mySwiper.slideTo(2);
       });


      $().fancybox({
        selector: '.media a',
        loop: true,
          buttons: [
            "close"
          ],

      });

      $().fancybox({
        selector: '.swiper-slide a',
        loop: true,
          buttons: [
            "close"
          ],

      });

    },
  };
}(jQuery, Drupal));
