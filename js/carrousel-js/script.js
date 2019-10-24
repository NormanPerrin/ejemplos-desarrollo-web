const slides = document.querySelector('.slides');
const SLIDE_WIDTH = slides.firstElementChild.offsetWidth;
const SLIDE_COUNT = slides.childElementCount;
let actualSlide = 1;

function next(e) {
    e.preventDefault();
    if(actualSlide != SLIDE_COUNT) {
        slides.scrollBy({
            left: SLIDE_WIDTH,
            behavior: 'smooth'
        });
        actualSlide++;
    }
}

function previous(e) {
    e.preventDefault();
    if(actualSlide != 1) {
        slides.scrollBy({
            left: -SLIDE_WIDTH,
            behavior: 'smooth'
        });
        actualSlide--;
    }
}
