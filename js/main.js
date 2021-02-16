// $('.phone').mask('8 (999) 999-99-99');

// $('#offer-form').validate({
//   errorClass: "invalid",
//   errorElement: "div",
//   rules: {
//     offerName: {
//       required: true,
//       minlength: 2,
//       maxlength: 15,
//   },
//   offerPhone: "required",
//   offerEmail: {
//     required: true,
//     email: true,
//   }
// },
//   messages: {
//     offerName: {
//       required: "Заполните поле",
//       minlength: jQuery.validator.format("Введиет ещё: {0}")
//       },
//       offerPhone: "Заполните поле",
//       offerEmail: {
//         required: "Заполните поле",
//         email: "Введите корректный email"
//       } 
//   },
//   submitHandler: function (form) {
//     $.ajax({
//       url: 'php/offer.php',
//       type: 'POST',
//       data: $(form).serialize(),
//       success: function(data){
//         $('.success').html(data);
//         $('#modal_offer').removeClass('modal_offer_active');
//         $('nav').removeClass('blur');
//         $('main').removeClass('blur');
//         $('header').removeClass('blur');
//         $('footer').removeClass('blur');
//         $('body').removeClass('modal-open');
//         $('.modal-form').addClass('modal-form_active');
//           setInterval(function(){
//               $('.modal-form').removeClass('modal-form_active');
//           }, 3000);
//         $('#offer-form')[0].reset();
//       }
//     });
//     return false;
//    }
// });
