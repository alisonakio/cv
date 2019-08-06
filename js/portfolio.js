(function($) {
  "use strict"; // Start of use strict

  // Magnific popup calls
//   $(".popup-gallery").magnificPopup({
//     delegate: "a",
//     type: "image",
//     tLoading: "Loading image #%curr%...",
//     mainClass: "mfp-img-mobile",
//     gallery: {
//       enabled: true,
//       navigateByImgClick: true,
//       preload: [0, 1]
//     },
//     image: {
//       tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
//     }
//   });
    $(".portfolio-box").magnificPopup({
      type: "inline",
      mainClass: "mfp-img-mobile"
    });
})(jQuery); // End of use strict
