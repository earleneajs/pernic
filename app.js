const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

// active menu when scrolling

const highlightMenu = () => {
    const elem = document.querySelector('.highlight');
    const homeMenu = document.querySelector('.#home-page');
    const aboutMenu = document.querySelector('.#about-page');
    const contactMenu = document.querySelector('.#contactus-page');
    let scrollPage = window.scrollY;

    if(window.innerWidth > 960 && scrollPage < 600) {
        homeMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        return;
    } else if(window.innerWidth > 960 && scrollPage < 1400) {
        aboutMenu.classList.add('highlight');
        homeMenu.classList.remove('highlight');
        contactMenu.classList.remove('highlight');
        return;
    } else if(window.innerWidth > 960 && scrollPage < 2345) {
        contactMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        return;
    }

    if((elem && window.innerWidth < 960 && scrollPage < 600) || elem) {
        elem.classList.remove('highlight');
    }
}

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active');
    if (window.innerWidth <= 768 && menuBars) {
      menu.classList.toggle('is-active');
      menuLinks.classList.remove('active');
    }
  };
  
  menuLinks.addEventListener('click', hideMobileMenu);
  navLogo.addEventListener('click', hideMobileMenu);