const root                  = document.querySelector('html');
const body                  = document.body;

const mainHeaderNav         = body.querySelector('.header-main > nav');
const mainHeaderHamburger   = body.querySelector('.hamburger-icon');
const mainHeaderCloseBtn    = body.querySelector('.close-header-main');

const darkModeBtn           = body.querySelector('#dark-mode-icon');

const contactBtns           = Array.from(body.querySelectorAll('.btn-contact'));
const modalScreens          = Array.from(body.querySelectorAll('.contact-modal-screen'));
const contactModalScreen    = body.querySelector('.contact-modal-screen'); 
const closeModalBtn         = body.querySelector('.close-modal');

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
        contactModalScreen.style.display = 'flex';
    });
});

closeModalBtn.addEventListener('click', () => {
    modalScreens.forEach((modalScreen) => {
        modalScreen.style.display = 'none';
    });
});

const theme = localStorage.getItem('theme');

if(theme) {
    addClass([body], 'dark-mode')
}