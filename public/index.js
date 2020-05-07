const root                  = document.querySelector('html');
const body                  = document.body;

const darkModeBtn           = body.querySelector('#dark-mode-icon');

function addClass(arr, className) {
    arr.forEach(element => element.classList.add(className));
}

function classToggle(arr, className) {
    arr.forEach(element => element.classList.toggle(className));
}

darkModeBtn.addEventListener('click', () => {
    classToggle([body], 'dark-mode');

    if(Array.from(body.classList).includes('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    }
    else {localStorage.removeItem('theme');}
});

const theme = localStorage.getItem('theme');

if(theme) {
    addClass([body], 'dark-mode')
}