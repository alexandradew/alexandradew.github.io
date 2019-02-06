$(document).ready(function(){
  $(".arrow").click(function(){
  	$([document.documentElement, document.body]).animate({
       scrollTop: $("#projects").offset().top
    }, 1000);
	});
});

