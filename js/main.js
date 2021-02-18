const body = document.querySelector('body'),
      nav = document.querySelector('nav'),
      header = document.querySelector('header'),
      main = document.querySelector('main'),
      footer = document.querySelector('footer');

const activeModal = (modal) => {
  body.style.overflow = 'hidden';
  modal.style.display = 'flex';
  nav.classList.add('blur');
  header.classList.add('blur');
  main.classList.add('blur');
  footer.classList.add('blur');
};

const disableModal = (modal) => {
  if(modal === menu) {
    menu.style.right = '-100%';
  } else {
    body.style.overflow = 'auto';
    modal.style.display = 'none';
    nav.classList.remove('blur');
    header.classList.remove('blur');
    main.classList.remove('blur');
    footer.classList.remove('blur');
  }
};

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  const slides = document.querySelectorAll('.consul__item'),
        menu = document.getElementById('menu'),
        ellipse = document.getElementById('ellipse'),
        modalSlider = document.getElementById('modal-slider');

  slides.forEach(elem => {
    elem.addEventListener('click', (event) => {
      let target = event.target;

      $('#slider-3').slick('slickGoTo', target.dataset.slickIndex);
      activeModal(modalSlider);
    });
  });

  ellipse.addEventListener('click', () => {
    menu.style.right = '0';
  });

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

  const closeEventListeners = () => {
    let count = 0,
        array = [],
        elem;

    do {
      count++;
      elem = document.getElementById(`close${count}`);
      if(elem !== null) array.push(elem);
    } while(elem);

    array.forEach(elem => {
      elem.addEventListener('click', () => {
        let elemClass = elem.className.replace(/__close/, ''),
            modal = document.querySelector(`.${elemClass}`);

        disableModal(modal);
      });
    });
  };
  closeEventListeners();

});

// ---------- JQuery --------------

$(document).ready(function() {

  const modalSuccess = document.getElementById('modal-success');

  $('#phone').mask('8 (999) 999-99-99');
  $('#form').validate({
    errorClass: "invalid",
    errorElement: "div",
    rules: {
      name: {
        required: true,
        minlength: 5,
        maxlength: 255,
    },
    phone: "required",
  },
    messages: {
      name: {
        required: "Заполните поле",
        minlength: jQuery.validator.format("Минимальная длина: {0}")
      },
      phone: "Заполните поле"
    },
    submitHandler: function (form) {
      $.ajax({
        url: 'php/feedback.php',
        type: 'POST',
        data: $(form).serialize(),
        success: function(data) {
          $('.success').html(data);

          activeModal(modalSuccess);
          setTimeout(disableModal(modalSuccess), 4000);

          $('#form')[0].reset();
        }
      });
      return false;
    }
  });
});
