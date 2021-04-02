document.addEventListener("DOMContentLoaded", function () {

  const accessoriesLink = document.querySelectorAll('.accessories-link'),
        accessoriesImg = document.querySelector('.accessories__img');

  const data = [
    {
      src: 'img/product/micro.jfif',
    },
    {
      src: 'img/product/micro-se.jfif',
    },
    {
      src: 'img/product/adiva.jfif',
    },
    {
      src: 'img/product/adiva-se.jfif',
    },
    {
      src: 'img/product/micro-droplet.jfif',
    },
    {
      src: 'img/product/micro-se-droplet.jfif',
    },
    {
      src: 'img/product/adiva-droplet.jfif',
    },
    {
      src: 'img/product/adiva-se-droplet.jfif',
    },
    {
      src: 'img/product/strada-2.jfif',
    },
    {
      src: 'img/product/subwoofers.jfif',
    },
    {
      src: 'img/product/accessories.jfif',
    },
  ]

  const swiper = new Swiper('.slider', {
    //loop: true,
    preloadImages: false,
    lazy: true,

    pagination: {
      el: '.slider-pagination',
      clickable: true,
    },
  });

  accessoriesLink.forEach((link, i) => {
    link.addEventListener('mouseover', function() {
      accessoriesImg.src = data[i].src;
    });
  });


});
