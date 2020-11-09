/*---------------------------------
[Master Javascript]

Project: Agency

-------------------------------------------------------------------*/
(function($) {
	"use strict";
	var Agency = {
		initialised: false,
		version: 1.0,
		mobile: false,
		init: function() {
			if (!this.initialised) {
				this.initialised = true;
			} else {
				return;
			}
			/*-------------- Agency Functions Calling ---------------------------------------------------
			------------------------------------------------------------------------------------------------*/
			this.RTL();
			this.slider();
			this.Brandcrousel();
			this.Responsive_menu();
			this.Dropdown_Menu();
			this.progress_bar();
			this.skill_counter();
			this.wowanimation();
			this.MailFunction();
		},
		/*-------------- Agency Functions definition ---------------------------------------------------
		---------------------------------------------------------------------------------------------------*/
		RTL: function() {
			// On Right-to-left(RTL) add class 
			var rtl_attr = $("html").attr('dir');
			if (rtl_attr) {
				$('html').find('body').addClass("rtl");
			}
		},
		
		//Testimonialcrousel
		slider: function() {
			if($(".caption_slider").length > 0){ 
				$('.caption_slider').owlCarousel({
					loop:true,
					margin:0,
					items:1,
					singleItem:true,
					autoplay:false,
					autoplayTimeout:4000,
					autoplaySpeed:1000,
					smartSpeed:1500,
					dots:true,
					nav:false,
					responsiveClass:true,
					responsive:{
						0:{
							items:1        
						},
						600:{
							items:1
						},
						768:{
							items:1
						},
						1000:{
							items:1
						}
					},
					animateIn:"fadeIn",
					animateOut:"fadeOut",
				})
			}
		},
		//Brand Crousel
		Brandcrousel: function() {
			if($(".brand_crousel").length > 0){
				$('.brand_crousel').owlCarousel({
					loop:true,
					margin:15,
					items:4,
					autoplay:true,
					autoplayTimeout:1000,
					autoplaySpeed:1500,
					smartSpeed:1500,
					responsiveClass:true,
					responsive:{
						0:{
							items:1,
						},
						600:{
							items:2,
						},
						768:{
							items:3,
						},
						1000:{
							items:4,
						}
					}
				})
			}
		},
		//Responsive Menu
		Responsive_menu: function() {
			$(".nav_toggle").on('click',function(){
				$(this).toggleClass("toggle_open");
				$(".header_right_menu").toggleClass("menu_open");
			});
		},
		//dropdown menu
		Dropdown_Menu: function (){
			if ($(window).width () <= 991){
				$(".header_right_menu ul li ul.sub-menu").parents("li").addClass("dropdown_toggle");
				$(".dropdown_toggle").append("<span class='caret_down'></span>");
				$(".caret_down").on("click",function(){
					$(this).toggleClass("caret_up");
					$(this).prev("ul").slideToggle();
				});
			}
			else {
				
			}
		},
		//progress bar
		progress_bar: function(){
			if ($(".panel_bar .bar").length > 0 ){
				$(".panel_bar .bar").appear(function() {
					$('.panel_bar .bar').each(function(key, bar){
						var percentage = $(this).attr('data-percentage');
						var digit = $(this).children("span");
						$(this).animate({'width':percentage+'%','opacity':1,}, 1000);
						//digit.text(percentage + '%');
						digit.animate({left: percentage-10 +'%','opacity':1,},1000);
					})
				});
			}
		},
		//progress counter
		//counter 
		skill_counter:function(){
			if($('.counter_num').length > 0){
				$('.counter_num').appear(function() {
					$('.counter_num').each(count);
					  function count(options) {
						var $this = $(this);
						options = $.extend({}, options || {}, $this.data('countToOptions') || {});
						$this.countTo(options);
					}
				});
			}
		},
		//animation on scrolling page
		wowanimation:function(){
			var wow = new WOW({
				boxClass:     'wow',      // default
				animateClass: 'animated', // default
				offset:       0,          // default
				mobile:       true,       // default
				live:         true        // default
			})
			wow.init();
		},
		//contact form mail script
		MailFunction:function(){
			$('.submit_btn').on('click', function(){
				var name=$('#u_name').val();
				var email=$('#u_email').val();
				var phone=$('#u_phone').val();
				var sub=$('#u_subject').val();
				var u_msg=$('#u_message').val();
				$.ajax({
					type: "POST",
					url: "contactmail.php",
					data: {
						'username':name,
						'useremail':email,
						'userphone':phone,
						'usersub':sub,
						'usermsg':u_msg,
						},
					success: function(msg) {
						var full_msg=msg.split("#");
						if(full_msg[0]=='1'){
							$('#u_name').val("");
							$('#u_email').val("");
							$('#u_phone').val("");
							$('#u_subject').val("");
							$('#u_message').val("");
							$('#err_msg').html( full_msg[1] );
						}
						else{
							$('#u_name').val(name);
							$('#u_email').val(email);
							$('#u_phone').val(phone);
							$('#u_subject').val(sub);
							$('#u_message').val(u_msg);
							$('#err_msg').html( full_msg[1] );
						}
					}
				});
			});
		},
   };
   Agency.init();
   //window load function
	$(window).load(function(){
		$(".preloader").fadeOut("slow").delay("600");
	});
})(jQuery);
