$(document).ready(function(){
    $( ".product-price" ).each(function( index, element ) {
        $(element).text(formatCurrency($(element).text()));
    });
  
});

function formatCurrency(number){
    //return new Intl.NumberFormat('vn-vnd', { style: 'currency', currency: 'vnd' }).format(number);
    return new Intl.NumberFormat('vn-vn', { style: 'currency', currency: 'vnd' }).format(number);
}