// JavaScript Document
$(function() {
    'use strict';
  	var obj= {
	  	init: function(){
		    this.toTop();
			this.Gnavi();
	  	},
	  	toTop: function(){
			$('#totop').hide();
			$(window).bind('load scroll', function() {
				  if($(this).scrollTop() > 100){
				  	$('#totop').fadeIn();
				  }
				  else{
				 	 $('#totop').fadeOut();
				  }
			});
			$('#totop').click(function(){
				$('body, html').animate({ scrollTop: 0 }, 500);
				return false;
			});
			
	  	},
		Gnavi: function () {
			$(window).bind('load', function () {
				$('.bg-scroll').addClass('is-fadeIn');
				$('.menu-icon').click(function () {
					var _this = $(this);
					if (_this.hasClass('flag')) {
						if ($(_this).hasClass('active')) {
						  $('.menu-icon').removeClass('active');
						  $('#gnavi').slideUp();
						} else {
						  $(_this).toggleClass('active');
						  $('#gnavi').slideToggle();
						}
					} else {
						if ($(_this).hasClass('active')) {
						  $('.menu-icon').removeClass('active');
						  $('#gnavi').removeClass('active');
						} else {
						  $(_this).toggleClass('active');
						  $('#gnavi').toggleClass('active');
						}
					}
				});
			});
			$(window).bind('load resize', function () {
				var vW = $(window).width();
				if (vW > 640) {
					$('.menu-icon').removeClass('flag');
					$('.menu-icon').removeClass('active');
					$('#gnavi').removeClass('active');
					$('#gnavi').removeAttr('style');
				} else {
					$('.menu-icon').addClass('flag');
					$('.menu-icon').removeClass('active');
					$('#gnavi').slideUp();
				}
			});
			$(window).bind('load scroll', function (){
				var wS = $(window).scrollTop();
				$('.bg-scroll').each(function() {
					var _this = $(this);
					var vB = $(_this).offset().top;
					$(_this).css({
						'transform': 'translate3d(0px, '+((vB-wS)*0.2)+'px, 0)',
					});
				});
				
			});
		},
  };
  obj.init();
});


