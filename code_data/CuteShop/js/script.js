$(function () {
  'use strict'

  $('[data-toggle="offcanvas"]').on('click', function () {
    $('.offcanvas-collapse').toggleClass('open')
  })
})
setWidthForMegaMenu();
function setWidthForMegaMenu() {
  var root = document.getElementById('header-sidebar-content').getElementsByClassName('megamenu-content');
  var sizeformsearch = document.getElementsByClassName('formsearch')[0].clientWidth;

  for (let index = 0; index < root.length; index++) {
    root[index].style.width = sizeformsearch + 'px';

  }

}