

// document.addEventListener("DOMContentLoaded", function () {
export function createCarousel() {
    const slides = document.querySelectorAll('.my-carousel-item');
    // console.log(slides);
    const indicatorsContainer = document.querySelector('.my-carousel-indicator-container');
    let currentSlide = 0;
    let duration = 7000;
    let timer = setInterval(nextSlide, duration);


    // const myPrevBtn = document.querySelector('#btn-prev');
    // const myNextBtn = document.querySelector('#btn-next');

    // myPrevBtn.addEventListener('click', function () {
    //     prevSlide();
    //     resetTimer();
    // });
    // myNextBtn.addEventListener('click', function () {
    //     nextSlide();
    //     resetTimer();
    // });


    // Create indicators
    slides.forEach((slide, index) => {
        const indicator = document.createElement('div');
        indicator.classList.add('my-carousel-indicator');
        if (index === 0) {
            indicator.classList.add('active');
            slide.classList.add('active');
        }
        indicator.addEventListener('click', () => {
            goToSlide(index);
            resetTimer();
        });
        indicatorsContainer.appendChild(indicator);
    });


    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        goToSlide(currentSlide);
    }

    // function prevSlide() {
    //     currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    //     goToSlide(currentSlide);
    // }

    function goToSlide(slideIndex) {
        slides.forEach((slide, index) => {
            if (index === slideIndex) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });
        updateIndicators(slideIndex);
    }

    function updateIndicators(activeIndex) {
        const indicators = document.querySelectorAll('.my-carousel-indicator');
        indicators.forEach((indicator, index) => {
            if (index === activeIndex) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
        currentSlide = activeIndex;
    }

    function resetTimer() {
        clearInterval(timer);
        timer = setInterval(nextSlide, duration);
    }
}