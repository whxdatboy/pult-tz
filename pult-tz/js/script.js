document.addEventListener("DOMContentLoaded", function () {

  const swiper = new Swiper('.slider', {
    //loop: true,
    preloadImages: false,
    lazy: true,

    pagination: {
      el: '.slider-pagination',
      clickable: true,
    },

    // autoplay: {
    //   delay: 5000,
    // },
  });

});
