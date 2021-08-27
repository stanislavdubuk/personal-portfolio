///////////// VARIABLES /////////////
const header = document.querySelector('.header');
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');
const navLink = document.querySelectorAll('.nav__link');
const homeSection = document.querySelector('.home');
const mediaQuery = window.matchMedia('(min-width: 767px');

///////////// SHOW MENU /////////////
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}
// Menu hidden
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

///////////// REMOVE MENU MOBILE /////////////
const linkAction = () => {
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.remove('show-menu');
};
navLink.forEach((link) => link.addEventListener('click', linkAction));

///////////// STICKY NAV /////////////
// const headerHeight = header.getBoundingClientRect().height;
// const stickyNav = (entries) => {
//   const [entry] = entries;
//   if (mediaQuery.matches)
//     if (!entry.isIntersecting) header.classList.add('sticky');
//     else header.classList.remove('sticky');
// };

// const homeSectionObserver = new IntersectionObserver(stickyNav, {
//   root: null,
//   threshold: 0,
//   rootMargin: `-${headerHeight}px`,
// });
// homeSectionObserver.observe(homeSection);

///////////// DARK/LIGHT THEME /////////////
const themeToggle = document.querySelector('#theme-toggle');

themeToggle.addEventListener('click', () => {
  document.body.classList.contains('light-theme')
    ? enableDarkMode()
    : enableLightMode();
});

const enableDarkMode = () => {
  document.body.classList.remove('light-theme');
  document.body.classList.add('dark-theme');
};

const enableLightMode = () => {
  document.body.classList.remove('dark-theme');
  document.body.classList.add('light-theme');
};

const setThemePreference = () => {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    enableDarkMode();
    return;
  }
  enableLightMode();
};

document.onload = setThemePreference();

///////////// SPLIDE SLIDER /////////////
document.addEventListener('DOMContentLoaded', function () {
  new Splide('.splide', {
    perPage: 2,
    rewind: true,
    breakpoints: {
      768: {
        perPage: 1,
      },
    },
  }).mount();
});

///////////// ACTIVE LINK ON SCROLL /////////////
const sections = document.querySelectorAll('section[id]');

const navHighlighter = () => {
  let scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector('.nav__menu a[href*=' + sectionId + ']')
        .classList.add('active-link');
    } else {
      document
        .querySelector('.nav__menu a[href*=' + sectionId + ']')
        .classList.remove('active-link');
    }
  });
};

window.addEventListener('scroll', navHighlighter);

//////////// REVEAL SECTIONS ///////////////

// const allSections = document.querySelectorAll('.section');
// const revealSection = (entries, observer) => {
//   const [entry] = entries;
//   if (!entry.isIntersecting) return; // guard
//   entry.target.classList.remove('section--hidden');
//   observer.unobserve(entry.target);
// };

// const sectionObserver = new IntersectionObserver(revealSection, {
//   root: null, //viewport
//   threshold: 0.15,
// });

// allSections.forEach((section) => {
//   sectionObserver.observe(section);
//   section.classList.add('section--hidden');
// });


