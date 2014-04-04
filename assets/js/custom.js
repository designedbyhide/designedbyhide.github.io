jQuery(document).ready(function() {
	jQuery('#mc-form').ajaxChimp({
	    url: 'http://4smart.us3.list-manage.com/subscribe/post?u=a966562e51b1977d5d79a5ec9&amp;id=a971f3356e'
	});
	jQuery('#feedback').submit(function(e){
		var thisForm = jQuery(this);
		e.preventDefault();
		jQuery(this).fadeOut(function(){
			jQuery("#loading").fadeIn(function(){
				jQuery.ajax({
					type: 'POST',
					url: thisForm.attr("action"),
					data: thisForm.serialize(),
					success: function(data){
						jQuery("#loading").fadeOut(function(){
							jQuery("#success").text(data).fadeIn();
						 });
					}
				});
			});
		});
	});
	function initialize() {
		var map_canvas = document.getElementById('map_canvas');
		var map_options = {
		center: new google.maps.LatLng(25.251941, 55.33558),
		zoom: 14,
		mapTypeId: google.maps.MapTypeId.ROADMAP
		}
		var map = new google.maps.Map(map_canvas, map_options)
	}
	google.maps.event.addDomListener(window, 'load', initialize);
	$(window).load(function(){
		$('#preload').delay(350).fadeOut('slow').css({ display: 'none'});
	    setTimeout ( function () { $(".logo, .navigation").removeClass("remove").addClass("In fadeInDown");});
	    setTimeout ( function () { $(".ms, .sd, .content-inner h2").removeClass("remove").addClass("In fadeInRight");});
	    setTimeout ( function () { $(".dy, .hs, .content-inner p").removeClass("remove").addClass("In fadeInLeft");});
	    setTimeout ( function () { $(".social").removeClass("remove").addClass("In fadeInUp");});
	});
});