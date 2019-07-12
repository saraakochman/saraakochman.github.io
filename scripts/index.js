$(document).ready(function(){
	console.log('i am ready!');


// MOBILE NAV MENU
  $('.nav-links').on('click', function() {
  	console.log('it clicked')
  	$('#mobile-nav-links').slideToggle();
  });

  $(window).on('resize', function() {
  	console.log('we resized');
  	var screenWidth = $(window).width();
  	if (screenWidth > 600) {
  		$('#mobile-nav-links').css('display', 'inherit');
	} else {
  		$('#mobile-nav-links').css('display', 'none');
	}
  });

   $(window).on('scroll', function() {
      if ($(this).scrollTop() > 0) {
         $(".nav-menu").addClass("navColor")
      } if ($(this).scrollTop() < 10)
         $(".nav-menu").removeClass("navColor")
    });



// SLICK
$('.slick').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    }
  ]
});

})

