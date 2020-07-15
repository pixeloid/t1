Drupal.behaviors.gridGallery = {
  attach: function (context, settings) {
    var isInViewport = function (elem) {
      var bounding = elem.getBoundingClientRect();
      return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    };

    if ("ontouchstart" in document.documentElement) {
          var cards = document.querySelectorAll('.card');

          if (cards.length) {
          window.addEventListener('scroll', function (event) {
            cards.forEach(function (el) {
              if (isInViewport(el)) {
                el.classList.add('in-viewport')
              } else {
                el.classList.remove('in-viewport')
              }
            });
          }, false);
          }
    }



  }
};