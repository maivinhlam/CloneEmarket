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
{
  let counter = 1;
  const imageGallery = document.getElementById('listProduct');
  const listProducts = document.getElementById("list-product");
  const slides = document.getElementsByClassName("product");  
  const Gallery = document.getElementsByClassName("imageGallery");
  let numItemShow = 5;
  if(listProducts.clientWidth >= 768){
    numItemShow = 5;
   
  }    else if(listProducts.clientWidth >= 576){
    numItemShow = 3;
    
  }    else if(listProducts.clientWidth  > 300){    
    numItemShow = 2;    
  } else{
    numItemShow = 1;
  }

  let size = listProducts.clientWidth/numItemShow;
  document.addEventListener('readystatechange', event => { 
    var j;
    for (j = 0; j < slides.length; j++) {
      slides[j].style.width = listProducts.clientWidth/numItemShow + 'px';  
    }
  
    const prevBtn = document.getElementById("prevProduct");
    const nextBtn = document.getElementById("nextProduct");

    imageGallery.style.width = (slides.length * size) + 'px';
    imageGallery.style.marginLeft = 0;
    imageGallery.style.transform = 'translateX(' + (-size * counter) + 'px)';
    
    nextBtn.addEventListener('click', () => {
      if(counter >= slides.length - numItemShow)   return;
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
        counter = slides.length - ( 2 + (numItemShow - 1));
        imageGallery.style.transform = 'translateX(' + (-size * counter) + 'px)';
      }

      if(slides[counter+(numItemShow-1)].id === 'firstClone'){
        imageGallery.style.transition = 'none';
        counter = 1;
        imageGallery.style.transform = 'translateX(' + (-size * counter) + 'px)';
      }
    });
  });

    
    window.onresize = () => {      
      if(listProducts.clientWidth >= 768){
        size = listProducts.clientWidth/5;
        numItemShow = 5;
        imageGallery.style.transform = 'translateX(' + (-size * counter) + 'px)';
      }    else if(listProducts.clientWidth >= 576){
        size = listProducts.clientWidth/3;
        numItemShow = 3;
        imageGallery.style.transform = 'translateX(' + (-size * counter) + 'px)';
      }    else if(listProducts.clientWidth  > 300){
        size = listProducts.clientWidth/2;
        numItemShow = 2;
        imageGallery.style.transform = 'translateX(' + (-size * counter) + 'px)';
      } else {
        size = listProducts.clientWidth;
        numItemShow = 1;
        imageGallery.style.transform = 'translateX(' + (-size * counter) + 'px)';
      }


      imageGallery.style.width = slides.length * size + 'px';

      for (var j = 0; j < slides.length; j++) {
        slides[j].style.width = size + 'px';  
      }

      
    };


}
/* Open the sidenav */
function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

/* Close/hide the sidenav */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
} 
