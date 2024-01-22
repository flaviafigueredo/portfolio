function selectMenuItemAndScroll(event) {
    event.preventDefault();

    menuItems.forEach(menuItem => menuItem.classList.remove('selected'));
    this.classList.add('selected');

    const targetId = this.querySelector('a').getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
    }

    const menuHamburger = document.getElementById('menu-hamburger');
    if (menuHamburger.checked) {
        menuHamburger.checked = false;
    }
}

const scrollButton = document.getElementById('scroll-button');
scrollButton.addEventListener('click', () => {
    const aboutSection = document.getElementById('about');
    aboutSection.scrollIntoView({ behavior: 'smooth' });
});

const menuItems = document.querySelectorAll('.menu-item');
menuItems.forEach(item => item.addEventListener('click', selectMenuItemAndScroll));