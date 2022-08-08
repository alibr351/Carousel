const slides = document.getElementsByClassName('carousel-item');
let slidePosition = 0;
const totalSlides = slides.length;

document.getElementById('carousel-button-next').addEventListener('click', moveToNextSlide);
document.getElementById('carousel-button-prev').addEventListener('click', moveToPrevSlide);


const myQuotes = ["As you know, madness is like gravity…all it takes is a little push", "Wait, Wait, Wait! I Got To Start The Song Over", "You can become blind by seeing each day as a similar one"]
const quoteEl = document.getElementById("quote-el")
      quoteEl.innerHTML = myQuotes[slidePosition]
function quote() {
    for (let quote of myQuotes) {
        quote = slidePosition
        quoteEl.innerHTML = myQuotes[quote]
    }
}

const activeSlide = document.getElementsByClassName("default-slide")
        activeSlide[slidePosition].style.backgroundColor = "#003049"
function actSlide() {
    for (let active of activeSlide) {
        active.style.backgroundColor = "#fff3b0"
        active = slidePosition
        activeSlide[active].style.backgroundColor = "#003049"
    }
}

function hideAllSlides() {
    for (let slide of slides) {
        slide.classList.remove('carousel-item-visible');
        slide.classList.add('carousel-item-hidden');
    }
}

function moveToNextSlide() {
    hideAllSlides();
    
    if (slidePosition === totalSlides - 1) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }
    
    slides[slidePosition].classList.add("carousel-item-visible");
    quote()
    actSlide()
}

function moveToPrevSlide() {
    hideAllSlides();
    
    if (slidePosition === 0) {
        slidePosition = totalSlides - 1;
    } else {
        slidePosition--;
    }
    
    slides[slidePosition].classList.add("carousel-item-visible");
    quote()
    actSlide()
}

