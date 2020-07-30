$(document).ready(function () {
  $(".product-price").each(function (index, element) {
    $(element).text(formatCurrency($(element).text()));
  });

  if (getCookie("countProduct")) {
    $("#count-product").text(getCookie("countProduct"));
  }
});

function formatCurrency(number) {
  //return new Intl.NumberFormat('vn-vnd', { style: 'currency', currency: 'vnd' }).format(number);
  return new Intl.NumberFormat("vn-vn", {
    style: "currency",
    currency: "vnd",
  }).format(number);
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
