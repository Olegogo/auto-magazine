// header menu
const menuIcon = document.querySelector('.header__menu-icon');
const popupMenu = document.querySelector('.popup-menu');
const closeMenu = document.querySelector('.header__menu-close');

menuIcon.addEventListener("click", () => {
  openPopup(popupMenu)
})

closeMenu.addEventListener("click", () => {
  closePopup(popupMenu)
})

function openPopup(popup) {
  popup.classList.add('popup-menu_opened')
}

function closePopup(popup) {
  popup.classList.remove('popup-menu_opened')
}

// slider gallery
const cards = document.querySelectorAll('.gallery__container-img');
const sliderLine = document.querySelector('.gallery__container-show');

let counter = 0;
let width;

function init() {
    width = document.querySelector('.gallery__container').offsetWidth;
    sliderLine.style.width = width * cards.length + 'px';
    cards.forEach(item => {
      item.style.width = width + 'px';
      item.style.height = 'auto';
    });
    rollSlider();
}

init();
window.addEventListener('resize', init);

function rollSlider() {
  sliderLine.style.transform = 'translate(-' + counter * width + 'px)';
}

const btnNext = document.querySelector('#slide-next');
const btnPrev = document.querySelector('#slide-prev');

btnNext.addEventListener('click', () => {
  counter++;
  if (counter >= cards.length) {
    counter = 0;
  }
  rollSlider();
})

btnPrev.addEventListener('click', () => {
  counter--;
    if (counter < 0) {
        counter = cards.length - 1;
    }
    rollSlider();
})

// text slider
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName('press__container-text');
    let dots = document.getElementsByClassName('press__button-dot');
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
window.onload= function () {
    setInterval(function(){ 
        plusSlides(1);
}, 4000);
}