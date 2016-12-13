
$(document).ready(function(){ 
	
	$(window).scroll(function() {
		$('#motoad').stop().animate({top: $(document).scrollTop()},'slow',
			'easeOutBack'); 
	}); 
});
$(document).ready(function(){
	$('#motoad').click(function() {
		$('this').hide();
	});
});

// $(function() {
// 	$('button').click(function() {
// 		$('h1').html('jquery')
// 	})
// })

// $(function() {
// 	$('document').add('<h2>click to animate</>').addClass('animateMe').css('background','yellow').appendTo(document.body)
// })

$(function() {
	$('.animateMe').bind('click', function(event) {
		var position= $(this).position();
		$(this)
		    .css({position: 'absolute',
		    	top: position.top,
		    	left: position.left})
		    .animate(
		    {
		    	opacity: 'hide',
		    	width: $(this).width() * 5,
		    	height: $(this).height() * 5,
		    	top: position.top - ($(this).height() * 5/2),
		    	left: position.left - ($(this).width() * 5/2)
		    },
		    5000, function(){$('h1').css({color: 'purple'})}
		        );
	})
});
