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
