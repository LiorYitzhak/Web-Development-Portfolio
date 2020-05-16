import jump from '../../node_modules/jump.js/dist/jump.module.js';

const discoverBtn = document.querySelector('.discover-btn');

discoverBtn.addEventListener('click', () => {
    jump('#discover', {
        duration: 750
    });
});