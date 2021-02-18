document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  const menu = document.getElementById('menu'),
        close = document.getElementById('close2'),
        ellipse = document.getElementById('ellipse');

  ellipse.addEventListener('click', () => menu.style.right = '0');
  close.addEventListener('click', () =>  menu.style.right = '-100%');
  
  const scrolling = () => {
    document.body.addEventListener('click', (event) => {
      let target = event.target;

      if(target.tagName === 'A' && target.href.indexOf('#') !== -1) {
        event.preventDefault();
        menu.style.right = '-100%';

        const blockID = target.getAttribute('href');
        document.querySelector('' + blockID).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  };
  scrolling();
  
});