$(function () {
  'use strict'

  $('[data-toggle="offcanvas"]').on('click', function () {
    $('.offcanvas-collapse').toggleClass('open')
  })
})
setWidthForMegaMenu();
window.addEventListener("resize", setWidthForMegaMenu);
function setWidthForMegaMenu() {
  var root = document.getElementById('header-sidebar-content').getElementsByClassName('megamenu-content');
  var sizeformsearch = document.getElementsByClassName('formsearch')[0].clientWidth;

  for (let index = 0; index < root.length; index++) {
    root[index].style.width = sizeformsearch + 'px';
  }

}

function showsidebar() {
  if (window.innerWidth < 992) {
    var root = document.getElementById("header-sidebar-content");
    var classname = root.className;
    if (classname.search('d-none') > 0) {
      root.classList.remove('d-none');
    } else {
      root.className += ' d-none';
    }
  }
}

$(document).ready(function () {
  if ($('.listproduct-content-carousel').length) {
    var viewedSlider = $('.listproduct-content-carousel');

    viewedSlider.owlCarousel(
      {
        loop: true,
        margin: 25,
        autoplay: false,
        autoplayTimeout: 6000,
        nav: false,
        dots: false,
        autoWidth: false,
        responsive:
        {
          0: { items: 1 },
          575: { items: 2 },
          768: { items: 2 },
          991: { items: 4 },
          1199: { items: 4 }
        }
      });

    if ($('.listproduct-content-button-prev').length) {
      var prev = $('.listproduct-content-button-prev');
      prev.on('click', function () {
        viewedSlider.trigger('prev.owl.carousel');
      });
    }

    if ($('.listproduct-content-button-next').length) {
      var next = $('.listproduct-content-button-next');
      next.on('click', function () {
        viewedSlider.trigger('next.owl.carousel');
      });
    }
  }


});