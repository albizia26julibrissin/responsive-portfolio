(function($){
	
// init Isotope
var $grid = $('.gallery').isotope({
  // options
});
// filter items on button click
$('.isotope-menu').on( 'click', 'li', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});

// filter items on button click
$('.isotope-menu').on( 'click', 'li', function() {
  $(this).addClass('active').siblings().removeClass('active');
});





















})(jQuery);