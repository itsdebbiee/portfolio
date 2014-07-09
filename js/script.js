$(document).ready(function() {      
   $('.carousel').carousel({
    pause: true,
    interval: false
});
});

$(document).ready(function() {
	$(".fancybox-thumb").fancybox({
		prevEffect	: 'none',
		nextEffect	: 'none',
		helpers	: {
			title	: {
				type: 'outside'
			},
			thumbs	: {
				width	: 50,
				height	: 50
			},
            overlay : {
                locked: false
            }
		}
	});

});

$(document).ready(function() {
	$(".fancybox").fancybox({
		openEffect	: 'none',
		closeEffect	: 'none',
        helpers : {
            title: {
                type: 'outside'
            },
            overlay : {
                locked: false
            }
        }
	});
});