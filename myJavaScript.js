document.addEventListener('readystatechange', event => { 
  const imageGallery = document.getElementById('slides');
  const slides = document.getElementsByClassName("mySlides");

  const Gallery = document.getElementsByClassName("imageGallery");
  var j
  for (j = 0; j < slides.length; j++) {
    slides[j].style.width = Gallery[0].style.width;  
  }
    
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");

  let counter = slides.length/2;
  let size = slides[0].clientWidth;
  imageGallery.style.width = slides.length * size;
  imageGallery.style.transform = 'translateX(' + (-size * counter) + 'px)';

  nextBtn.addEventListener('click', () => {
    if(counter >= slides.length - 1)   return;

    imageGallery.style.transition = 'transform 0.6s ease-in-out';
    counter++;
    imageGallery.style.transform = 'translateX(' + (-size * counter) + 'px)';
    if(counter > slides.length - 1){
      counter = 0;
      imageGallery.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
  });

  prevBtn.addEventListener('click', () => {
    if(counter <= 0) return; 
    imageGallery.style.transition = "transform 0.6s ease-in-out";
    counter--;
    imageGallery.style.transform = 'translateX(' + (-size * counter) + 'px)';
    if(counter < 0){
      counter = slides.length - 1;
      imageGallery.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
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
/////////////////////////////////////////////////////////////////////
document.addEventListener('readystatechange', event => { 
  const imageGallery = document.getElementById('listProduct');
  const slides = document.getElementsByClassName("product");

  const Gallery = document.getElementsByClassName("imageGallery");
  var j
  for (j = 0; j < slides.length; j++) {
    // slides[j].style.width = Gallery[0].style.width;  
  }
  
 
  
  const prevBtn = document.getElementById("prevProduct");
  const nextBtn = document.getElementById("nextProduct");

  let counter = 1;
  let size = slides[0].clientWidth;
  imageGallery.style.width = slides.length * size;
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
