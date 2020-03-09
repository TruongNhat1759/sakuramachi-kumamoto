$(function() {
	'use strict';
	var obj = {
		init: function() {
			this.topJS();
		},
		topJS: function () {
			$(window).bind('load', function () {
				new WOW().init();
				$('.idx-slider').slick({
					dots: false,
					arrows: false,
					infinite: true,
					fade: true,
					cssEase: 'linear',
					autoplay: true,
					autoplaySpeed: 4000,
				});
			});
			$(window).bind('load resize', function () {
				var vW = $(window).width();
                if (vW < 641) {
                    if (!$('.b01-list ul').hasClass('slick-initialized')) {
                        $('.b01-list ul').slick({
                        	autoplay: true,
                        	autoplaySpeed: 4000,
                        	dots: false,
                        	arrows: true,
                        	pauseOnFocus: false,
                        	pauseOnHover: false,
                        	pauseOnDotsHover: false,
                         	slidesToShow: 1,
                         	slidesToScroll: 1,
                         	centerMode: true,
                         	variableWidth: true,
                         	infinite: true,
                        });
                    }
                } else {
                    if ($('.b01-list ul').hasClass('slick-initialized')) {
                        $('.b01-list ul').slick('unslick');
                    }
                }
			});
			$('.b06-scroll').mCustomScrollbar({
                axis: "x"
            });
		},
	};
	obj.init();
});