document.addEventListener('readystatechange', event => { 
  const imageGallery = document.getElementById('slides');
  const slides = document.getElementsByClassName("mySlides");

  const Gallery = document.getElementsByClassName("imageGallery");
  var j
  for (j = 0; j < slides.length; j++) {
    // slides[j].style.width = Gallery[0].style.width;  
  }
  // 
 
  
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");

  let counter = slides.length/2;
  let size = slides[0].clientWidth;
  //imageGallery.style.width = slides.length * size;
  imageGallery.style.transform = 'translateX(' + (-size * counter) + 'px)';

  nextBtn.addEventListener('click', () => {
    if(counter >= slides.length - 1)   return;

    imageGallery.style.transition = 'transform 0.6s ease-in-out';
    counter++;
    imageGallery.style.transform = 'translateX(' + (-size * counter) + 'px)';
    // if(counter > slides.length - 1){
    //   counter = 0;
    //   imageGallery.style.transform = 'translateX(' + (-size * counter) + 'px)';
    // }
  });

  prevBtn.addEventListener('click', () => {
    if(counter <= 0) return; 
    imageGallery.style.transition = "transform 0.6s ease-in-out";
    counter--;
    imageGallery.style.transform = 'translateX(' + (-size * counter) + 'px)';
    // if(counter < 0){
    //   counter = slides.length - 1;
    //   imageGallery.style.transform = 'translateX(' + (-size * counter) + 'px)';
    // }
  });

  imageGallery.addEventListener('transitionend', () =>{
    if(slides[counter].id === 'lastClone'){
      imageGallery.style.transition = 'none';
      counter = slides.length - 2;
      imageGallery.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }

    if(slides[counter].id === 'firstClone'){
      imageGallery.style.transition = 'none';
      counter = slides.length - counter;
      imageGallery.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
  });
});
///////////////////////////////////////////////////////////////////////
document.addEventListener('readystatechange', event => { 
  const imageGallery = document.getElementById('listProduct');
  const slides = document.getElementsByClassName("product");

  // const Gallery = document.getElementsByClassName("imageGallery");
  // var j
  // for (j = 0; j < slides.length; j++) {
  //   // slides[j].style.width = Gallery[0].style.width;  
  // }
  // 
 
  
  const prevBtn = document.getElementById("prevProduct");
  const nextBtn = document.getElementById("nextProduct");

  let counter = 1;
  let size = slides[0].clientWidth;
  //imageGallery.style.width = slides.length * size;
  imageGallery.style.transform = 'translateX(' + (-size * counter) + 'px)';

  nextBtn.addEventListener('click', () => {
    if(counter >= slides.length - 5)   return;
    imageGallery.style.transition = 'transform 0.6s ease-in-out';
    counter++;
    imageGallery.style.transform = 'translateX(' + (-size * counter) + 'px)';
    
  });

  prevBtn.addEventListener('click', () => {
    if(counter <= 0) return; 
    imageGallery.style.transition = "transform 0.6s ease-in-out";
    counter--;    
    imageGallery.style.transform = 'translateX(' + (-size * counter) + 'px)';
    
  });
  imageGallery.addEventListener('transitionend', () =>{
    if(slides[counter].id === 'lastClone'){
      imageGallery.style.transition = 'none';
      counter = slides.length - (2+4);
      imageGallery.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }

    if(slides[counter+4].id === 'firstClone'){
      imageGallery.style.transition = 'none';
      counter = 1;
      imageGallery.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
  });
});

var productIndex = 5;
var slideIndex = 1;


// showProduct(productIndex);

// // Next/previous controls
// function plusProduct(n) {
//   showProduct(productIndex += n);
// }

// // Thumbnail image controls
// function currentProduct(n) {
//   showProduct(productIndex = n);
// }

// function showProduct(n) {
//   var i;
//   var slides = document.getElementsByClassName("product");

//   if (n > slides.length) { productIndex = 5 }
//   if (n < 5) { productIndex = slides.length }

//   for (i = 0; i < slides.length; i++) {
//     slides[i].className = slides[i].className.replace(" active", "");
//   }

//   for (i = productIndex - 1; i >= productIndex - 5; i--) {
//     slides[i].className += " active";
//   }
// }


// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("demo");
//   // var captionText = document.getElementById("caption");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
//   // captionText.innerHTML = dots[slideIndex-1].alt;
// } 