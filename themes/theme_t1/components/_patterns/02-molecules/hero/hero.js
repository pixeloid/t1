Drupal.behaviors.parallaxHero = {
  attach: function (context, settings) {
    var hero = context.querySelector('.hero');
    var pictures = hero.querySelectorAll('img');
    var imageholder = hero.querySelector('.hero__image');
    var isWide = true;

    window.requestAnimationFrame = window.requestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function (f) {
        setTimeout(f, 1000 / 60)
      }

    function parallaximage() {
      var scrolltop = window.pageYOffset // get number of pixels document has scrolled vertically 
      imageholder.style.top = -scrolltop * .4 + 'px' // move bubble1 at 20% of scroll rate
    }

    function imagefill() {
      const iw = pictures[0].width;
      const ih = pictures[0].height;
      const hw = hero.offsetWidth;
      const hh = hero.offsetHeight;
      isWide = (iw / ih < hw / hh);

      if (isWide && !hero.classList.contains("wide")) {
        hero.classList.add('wide')
      }

      if (!isWide && hero.classList.contains("wide")) {
        hero.classList.remove('wide')
      }

    }

    window.addEventListener('scroll', function () { // on page scroll
      requestAnimationFrame(parallaximage) // call parallaxbubbles() on next available screen paint
    }, false)
    window.addEventListener('resize', function () { // on page scroll
      requestAnimationFrame(imagefill) // call parallaxbubbles() on next available screen paint
    }, false)
    window.addEventListener('load', function () { // on page scroll
      requestAnimationFrame(imagefill) // call parallaxbubbles() on next available screen paint
    }, false)

    window.dispatchEvent(new Event('resize'));
  }
};