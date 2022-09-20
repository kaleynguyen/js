// JavaScript
function changeTheme() {
    //this.classList.toggle('active');
    document.querySelector('body')
            .classList
            .toggle('activate-darktheme');
}
document.querySelector('.footer-icon')
        .addEventListener('click', changeTheme);