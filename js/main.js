// $(document).ready(function () {
//     $(".ac-title").click(function () {
//       $(this)
//         .toggleClass("active")
//         .next(".ac-tab")
//         .slideToggle()
//         .parent()
//         .siblings()
//         .find(".ac-tab")
//         .slideUp()
//         .prev()
//         .removeClass("active");
//     });
//   });
  

  $(document).ready(function(){
    $(".ac-title").click(function () {
      $(this)
        .toggleClass("active")
        .next(".ac-tab")
        .slideToggle()
        .parent()
        .siblings()
        .find(".ac-tab")
        .slideUp()
        .prev()
        .removeClass("active");
      });
      
      $('.ram').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite:false,
        autoplay:true,
        // slickRemove: removeBefore,
        autoplaySpeed: 2000,
        nextArrow:false,
        prevArrow:false,
        dots:true,

        responsive: [
          {
            breakpoint:992,
            settings: {
              slidesToShow: 3,
 
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 2,
    
            }
          },
          {
            breakpoint: 575,
            settings: {
              slidesToShow: 1,
    
            }
          },
        ]
      });
      
  });
  