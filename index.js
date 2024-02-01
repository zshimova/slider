// Переменные
const sliderImg = document.querySelectorAll('.slider__img');
const sliderLine = document.querySelector('.slider__line');
const sliderTitles = document.querySelectorAll('.slider__title');
const sliderInfos = document.querySelectorAll('.info-blocks');
const sliderDots = document.querySelectorAll('.slider__dot');
const nextBtn = document.querySelector('.slider__btn-next');
const backBtn = document.querySelector('.slider__btn-back');
let sliderCount = 0;
let sliderWidth;

window.addEventListener('resize', showSlide);

// Размер изображений соответствует размеру окна слайдера
function showSlide() {
    sliderWidth = document.querySelector('.slider').offsetWidth;
    sliderLine.style.width = sliderWidth * sliderImg.length + 'px';
    sliderImg.forEach(item => item.style.width = sliderWidth + 'px');
    rollSlider();
    checkpointSlide(sliderCount);
    slideTitle(sliderCount);
    sliderInfo(sliderCount);
}

showSlide();


// Переключить слайд назад
function backSlide() {
    sliderCount--;
    if (sliderCount < 0) sliderCount = sliderImg.length - 1;
    rollSlider();
    checkpointSlide(sliderCount);
    slideTitle(sliderCount);
    sliderInfo(sliderCount);
}
backSlide();

// Переключить слайд вперед
function nextSlide() {
    sliderCount++;
    if (sliderCount >= sliderImg.length) sliderCount = 0;
    rollSlider();
    checkpointSlide(sliderCount);
    slideTitle(sliderCount);
    sliderInfo(sliderCount);
}
nextSlide();

// Добавление события на кнопки
nextBtn.addEventListener('click', nextSlide);
backBtn.addEventListener('click', backSlide);

// Функция, которая отвечает за перелистывание слайдера
function rollSlider() {
    sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
}

// Checkpoints
function checkpointSlide(index) {
    sliderDots.forEach(item => item.classList.remove('active-dot'));
    sliderDots[index].classList.add('active-dot');
}

sliderDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        sliderCount = index;
        rollSlider();
        checkpointSlide(sliderCount);
        slideTitle(sliderCount);
        sliderInfo(sliderCount);
    })
})



// Перелистывание заголовков
function slideTitle(index) {
    sliderTitles.forEach(item => item.classList.remove('active'));
    sliderTitles[index].classList.add('active');
}

sliderTitles.forEach((title, index) => {
    title.addEventListener('click', () => {
        sliderCount = index;
        rollSlider();
        checkpointSlide(sliderCount);
        slideTitle(sliderCount);
        sliderInfo(sliderCount);
    })
})

// Изменение информации
function sliderInfo(index) {
    sliderInfos.forEach(item => item.classList.remove('active'));
    sliderInfos[index].classList.add('active');
}

sliderInfos.forEach((info, index) => {
    info.addEventListener('click', () => {
        sliderCount = index;
        rollSlider();
        checkpointSlide(sliderCount);
        slideTitle(sliderCount);
        sliderInfo(sliderCount);
    })
})