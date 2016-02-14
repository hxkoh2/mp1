var margin_left = 0;
var page_width = 1440;
var currcarousel = 0;

/* Used http://www.queness.com/post/923/create-a-simple-infinite-carousel-with-jquery for help with carousel*/
$(document).ready(function(){
	$('.carousel-pages:first').css({'display':'inline-block'});
	$('#navbar').addClass('resize-bigger');

	$('#leftarrow').on('click', 
		function(){
	        $('.carousel-pages:eq('+currcarousel+')').fadeOut("slow");
	        if(currcarousel==0) {
	        	currcarousel=2;
	        }
	        else {
	        	currcarousel--;
	        }
	        $('.carousel-pages:eq('+currcarousel+')').fadeIn("slow");
	 	}
	);

	$('#rightarrow').on('click', 
		function(){	  
	        $('.carousel-pages:eq('+currcarousel+')').fadeOut("slow");
	        currcarousel = (currcarousel + 1) % 3;
	        $('.carousel-pages:eq('+currcarousel+')').fadeIn("slow");
	 	}
	);

	$('#lava').on('click',
		function(){
			$('#lava-modal').css({'display':'block'});
		}
	);

	$('#lava-close').on('click',
		function(){
			$('#lava-modal').css({'display':'none'});
		}
	);

	$('#hunger').on('click',
		function(){
			$('#hunger-modal').css({'display':'block'});
		}
	);

	$('#hunger-close').on('click',
		function(){
			$('#hunger-modal').css({'display':'none'});
		}
	);

	$('#bracelets').on('click',
		function(){
			$('#bracelets-modal').css({'display':'block'});
		}
	);

	$('#bracelets-close').on('click',
		function(){
			$('#bracelets-modal').css({'display':'none'});
		}
	);

	$('#soup').on('click',
		function(){
			$('#soup-modal').css({'display':'block'});
		}
	);

	$('#soup-close').on('click',
		function(){
			$('#soup-modal').css({'display':'none'});
		}
	);

	$('#poverty').on('click',
		function(){
			$('#poverty-modal').css({'display':'block'});
		}
	);

	$('#poverty-close').on('click',
		function(){
			$('#poverty-modal').css({'display':'none'});
		}
	);

	$('#glide').on('click',
		function(){
			$('#glide-modal').css({'display':'block'});
		}
	);

	$('#glide-close').on('click',
		function(){
			$('#glide-modal').css({'display':'none'});
		}
	);

	$(window).on('click',
		function(event){
			if(event.target == $('#lava-modal')[0]){
				$('#lava-modal').css({'display':'none'});
			}
			if(event.target == $('#hunger-modal')[0]){
				$('#hunger-modal').css({'display':'none'});
			}
			if(event.target == $('#bracelets-modal')[0]){
				$('#bracelets-modal').css({'display':'none'});
			}
			if(event.target == $('#soup-modal')[0]){
				$('#soup-modal').css({'display':'none'});
			}
			if(event.target == $('#poverty-modal')[0]){
				$('#poverty-modal').css({'display':'none'});
			}
			if(event.target == $('#glide-modal')[0]){
				$('#glide-modal').css({'display':'none'});
			}
		}	
	);

	$(window).on('scroll',
		function() {
			var nheight = $('#navbar').height();
			var aboutus = $('#about-us')[0].getBoundingClientRect();
			var products = $('#products')[0].getBoundingClientRect();
			var projects = $('#projects')[0].getBoundingClientRect();
			var cause = $('#our-cause')[0].getBoundingClientRect();
			var contact = $('#contact-us')[0].getBoundingClientRect();
			if(aboutus.top<=nheight+aboutus.height/2 && aboutus.top >= -1*(aboutus.height/2-nheight)){
				$('#nav-about').css({'background-color':'rgba(43, 56, 86, 0.5)'});
			}
			else {
				$('#nav-about').css({'background-color':''});
			}
			if(products.top<=nheight+products.height/2 && products.top >= -1*(products.height/2-nheight)){
				$('#nav-products').css({'background-color':'rgba(43, 56, 86, 0.5)'});
			}
			else {
				$('#nav-products').css({'background-color':''});
			}
			if(projects.top<=nheight+projects.height/2 && projects.top >= -1*(projects.height/2-nheight)){
				$('#nav-projects').css({'background-color':'rgba(43, 56, 86, 0.5)'});
			}
			else {
				$('#nav-projects').css({'background-color':''});
			}
			if(cause.top<=nheight+cause.height/2 && cause.top >= -1*(cause.height/2-nheight)){
				$('#nav-cause').css({'background-color':'rgba(43, 56, 86, 0.5)'});
			}
			else {
				$('#nav-cause').css({'background-color':''});
			}
			if(aboutus.top<=nheight+aboutus.height/2){
				$('#navbar').addClass('resize-smaller').removeClass('resize-bigger');
			}
			else {
				$('#navbar').addClass('resize-bigger').removeClass('resize-smaller');
			}
		}
	);
	
	$('#nav-about').on('click',
		function () {
			$('html, body').animate({scrollTop:$('#about-us').offset().top}, 1000);
			return false;
		} 
	);

	$('#nav-products').on('click',
		function () {
			$('html, body').animate({scrollTop:$('#products').offset().top}, 1000);
			return false;
		} 
	);

	$('#nav-projects').on('click',
		function () {
			$('html, body').animate({scrollTop:$('#projects').offset().top}, 1000);
			return false;
		} 
	);

	$('#nav-cause').on('click',
		function () {
			$('html, body').animate({scrollTop:$('#our-cause').offset().top}, 1000);
			return false;
		} 
	);

	$('#logo').on('click',
		function () {
			$('html, body').animate({scrollTop:$('#homepage').offset().top-70}, 1000);
			return false;
		} 
	);
});

