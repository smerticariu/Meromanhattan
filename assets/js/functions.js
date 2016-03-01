$(function(){
	$('.bg-parallax').parallax({imageSrc: 'assets/img/1.png'});
});

$(function(){
	$('.img-parallax').parallax({imageSrc: 'assets/img/img-1.png'});
  $('.img-parallax').addClass('img-responsive');
});


$(window).load(function () {
    $(".wrap").endlessScroll({ width: '90%',
     height: '150px', steps: -2, speed: 40,
      mousestop: true });
});


$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  if(wScroll > $('#staff').offset().top - $(window).height()){

    var offset = (wScroll - $('#staff').offset().top +$(window).height() - 800).toFixed();

    $('#staff > div > div > div.col-md-8 > h1').css({'transform': 'translate('+ offset +'px, '+ Math.abs(offset * 0.2) +'px)'});
    $('#describe').css({'transform': 'translate('+ Math.abs(offset) +'px, '+ Math.abs(offset * 0.2) +'px)'});
  }

 });


$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  if(wScroll > $('#advisory').offset().top - $(window).height()){

    var offset = (Math.min(0, wScroll - $('#advisory').offset().top +$(window).height() - 600)).toFixed();

    $('#names').css({'transform': 'translate('+ Math.abs(offset) +'px, '+ Math.abs(offset * 0.2) +'px)'});
  }

 });


$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  if(wScroll > $('#footer-bg').offset().top - $(window).height()){

    var offset = (Math.min(0, wScroll - $('#footer-bg').offset().top +$(window).height() - 400)).toFixed();

    $('#footer-bg h1').css({'transform': 'translate('+ Math.abs(offset) +'px, '+ Math.abs(offset * 0.2) +'px)'});
  }

 });
/*

$(document).ready(function(){
	var $curr = $( "#start" );
	$curr.css( "color", "#222059" );
	$( "#left" ).click(function() {
  	$curr = $curr.prev();
  	$curr.css( "color", "#222059" );
	});
});

$(document).ready(function(){
	var $curr = $( "#start" );
	$curr.css( "color", "#f4c63b" );
	$( "#right" ).click(function() {
  	$curr = $curr.next();
  	$curr.css( "color", "#f4c63b" );
	});
});

$(document).ready(function(){
	var $curr = $( "#start" );
	$( "#left" ).click(function() {
  	$curr = $curr.focus();
  	$curr.css( "color", "red" );
	});
});

*/


$(function(){
  var $currDiv = $( "#start" );
  $currDiv .css( "color", "#f2bb16" );
  $currDiv .css( "text-transform", "uppercase" );

  $( "#right" ).click(function() {
  $currDiv  = $currDiv .next();
  $( "#advisory-list li" ).css( "color", "#222059" );
  $( "#advisory-list li" ).removeClass("previous");
  $currDiv .css( "color", "#f2bb16" );
  $currDiv .addClass("previous");
  });
});


//-----------------------------------

var gallery = {};


gallery.carousel = (function() {
    var test = 'test';

    return {
        init: _init,
        changeTest: _changeTest,
        getTest: _getTest
    }

    function _init() { 
        
        var $staffCarousel = $('#staff');
        var $items = $staffCarousel.find('.item');
        var $previewImg = $staffCarousel.find('#preview img');
        var $afisare = $staffCarousel.find('.tile').html();
        var $afis = $staffCarousel.find('#describe');

        $items.hover(showImage);

        function showImage(event) {
            
            var hoveredItem = $(event.currentTarget);
            var imageInsideHoveredItem = hoveredItem.find('img');
            var imageUrl = imageInsideHoveredItem.attr('src');
            $previewImg.attr('src', imageUrl);
            var afisarehtml = hoveredItem.find('.tile').html();
            $afis.html(afisarehtml);
        }
    }

    function _changeTest(someValue) {
        test = someValue;
    }

    function _getTest() {
        return test;
    }
}());

$(function() {
    setTimeout(function() {
        gallery.carousel.init();
    }, 500);
});


