const root                  = document.querySelector('html');
const body                  = document.body;

const mainHeaderNav         = body.querySelector('.header-main > nav');
const mainHeaderHamburger   = body.querySelector('.hamburger-icon');
const mainHeaderCloseBtn    = body.querySelector('.close-header-main');

const darkModeBtn           = body.querySelector('#dark-mode-icon');

const modalScreen           = body.querySelector('.modal-screen');
const closeModalBtn         = body.querySelector('.close-modal');

const contactBtns           = Array.from(body.querySelectorAll('.btn-contact'));
const contactModalScreen    = body.querySelector('.contact-modal-screen');
const contactModal          = body.querySelector('.homepage-contact-modal');

function addClass(arr, className) {
    arr.forEach(element => element.classList.add(className));
}

function classToggle(arr, className) {
    arr.forEach(element => element.classList.toggle(className));
}

mainHeaderHamburger.addEventListener('click', () => {
    mainHeaderNav.style.transform = 'translateX(0)';
});

mainHeaderCloseBtn.addEventListener('click', () => {
    mainHeaderNav.style.transform = 'translateX(100%)';
});

darkModeBtn.addEventListener('click', () => {
    classToggle([body], 'dark-mode');

    if(Array.from(body.classList).includes('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    }
    else {localStorage.removeItem('theme');}
});

contactBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        body.style.overflowY = 'hidden';
        contactModalScreen.style.display    = 'flex';
        modalScreen.style.animation         = 'fade-in 150ms';
        contactModal.style.animation        = 'scale-in 250ms';
    });
});

closeModalBtn.addEventListener('click', () => {
    body.style.overflowY = 'auto';
    contactModal.style.animation    = 'scale-out 250ms forwards';
    modalScreen.style.animation     = 'fade-out 250ms forwards';

    setTimeout(() => {
        modalScreen.style.display = 'none';
    }, 250);
});

const theme = localStorage.getItem('theme');

if(theme) {
    addClass([body], 'dark-mode')
}