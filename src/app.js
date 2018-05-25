import './styles.less';

function TopSlider() {
    const slides = document.querySelector('.top-slider__items');
    const slidesCount = document.querySelectorAll('.item-content');

    let activeSlideIndex = 0;

    document.querySelector('.top-slider__pager-all').innerHTML = slidesCount.length;

    function nextSlide() {
        if (activeSlideIndex < slidesCount.length) {
            slides.style.transform = `translate(-${activeSlideIndex * 100}%)`;
            activeSlideIndex++;
            document.querySelector('.top-slider__pager-active').innerHTML = activeSlideIndex;
            console.log(activeSlideIndex, 'slidesCount = ' + slidesCount);
        } else {
            activeSlideIndex = 0;
        }
    }

    setInterval(nextSlide, 1500);
}
const topSlider = new TopSlider();



function SurfBoardsSlider() {
    const slides = document.querySelector('.surfboards-slider__content');
    const slidesCount = document.querySelectorAll('.surfboards-slider__item');
    const leftArrow = document.querySelector('.surfboards-slider__arrows-left');
    const rightArrow = document.querySelector('.surfboards-slider__arrows-right');

    // console.log(slidesCount.length);

    let activeSlideIndex = 1;

    rightArrow.addEventListener('click', () => {
        nextSlide();
        // console.log(activeSlideIndex);
    });

    leftArrow.addEventListener('click', () => {
        prevSlide();
        // console.log(activeSlideIndex);
    });

    function nextSlide() {
        console.log(document.documentElement.clientWidth);
        if (document.documentElement.clientWidth > 769) {
            if (activeSlideIndex < slidesCount.length) {
                slides.style.transform = `translate(-${activeSlideIndex * 100 / 3}%)`;
                activeSlideIndex++;
            }
        } else {
            if (activeSlideIndex < slidesCount.length) {
                slides.style.transform = `translate(-${activeSlideIndex * 100}%)`;
                activeSlideIndex++;
            }
        }

        // console.log(slides.style.transform);
    }

    function prevSlide() {
        if (document.documentElement.clientWidth > 769) {
            if (activeSlideIndex > 0) {
                activeSlideIndex--;

                slides.style.transform = `translate(-${activeSlideIndex * 100 / 3 - 100 / 3}%)`;
                activeSlideIndex === 0 ? activeSlideIndex++ : activeSlideIndex;
                // console.log(slides.style.transform);
            }
        } else {
            if (activeSlideIndex > 0) {
                activeSlideIndex--;

                slides.style.transform = `translate(-${activeSlideIndex * 100 - 100}%)`;
                activeSlideIndex === 0 ? activeSlideIndex++ : activeSlideIndex;
                // console.log(slides.style.transform);
            }
        }

    }
}
const surfBoardSlider = new SurfBoardsSlider();


const control = document.querySelector('.burger-block');
control.addEventListener("click", fadeMenu);

function fadeMenu() {
    const menu = document.querySelector('.mobile-menu');
    console.log(menu);
    menu.classList.toggle('mobile-menu-opened');
}