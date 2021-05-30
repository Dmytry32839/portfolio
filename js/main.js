new WOW().init();
const swiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.projects-pagination',
    totalClass: 'swiper-pagination-total',
    type: 'bullets',
    clickable: true
  },
});