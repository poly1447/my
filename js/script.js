$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

$(document).ready(function () {
    $('.slider').slick({
        arrows: true,
        dots: true,
        centerMode: false,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    arrows: false
                }
            }
        ]
    });
});

let tab = function () {
    let tabNav = document.querySelectorAll('.tabs-nav__item'),
        tabContent = document.querySelectorAll('.tab'),
        tabName;
    tabNav.forEach(item => {
        item.addEventListener('click', selectTabNav)
    });
    function selectTabNav() {
        tabNav.forEach(item => {
            item.classList.remove('is-active');
        });
        this.classList.add('is-active');
        tabName = this.getAttribute('data-tab-name');
        selectTabContent(tabName);
    }
    function selectTabContent(tabName) {
        tabContent.forEach(item => {
            item.classList.contains(tabName) ? item.classList.add('is-active') : item.classList.remove('is-active')
        })
    }
};
tab();

let popupBg = document.querySelector('.popup'); // Фон попап окна
let popup = document.querySelector('.popup__body'); // Само окно
let openPopupButtons = document.querySelectorAll('.open-popup'); // Кнопки для показа окна
let closePopupButton = document.querySelector('.popup__close'); // Кнопка для скрытия окна

openPopupButtons.forEach((button) => { // Перебираем все кнопки
    button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
        e.preventDefault(); // Предотвращаем дефолтное поведение браузера
        popupBg.classList.add('active'); // Добавляем класс 'active' для фона
        popup.classList.add('active'); // И для самого окна
    })
});

closePopupButton.addEventListener('click', () => { // Вешаем обработчик на крестик
    popupBg.classList.remove('active'); // Убираем активный класс с фона
    popup.classList.remove('active'); // И с окна
});

document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
    if (e.target === popupBg) { // Если цель клика - фот, то:
        popupBg.classList.remove('active'); // Убираем активный класс с фона
        popup.classList.remove('active'); // И с окна
    }
});
