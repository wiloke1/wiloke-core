
$.fn.wilParallax = function(opts) {
  	return $(this).each(function() {
	    var el = $(this),
			o = el.offset(),
			optsDefault = {
				speed: 2,
				type: 'vertical'
			},
			optsData = {
				speed: el.data('parallax-speed'),
				type: el.data('parallax-type')
			},
			options = $.extend({}, optsDefault, opts, optsData);
    
		el.on('parallax', function() {
			var st = $(window).scrollTop(),
				wh = $(window).height(),
				parallax = ( st + wh - o.top) * -1 * options.speed / 8;
			if ( ( ( st + wh ) >= o.top ) && ( st < o.top ) ) {
				if (options.type == 'vertical') {
					el.css({
						'display': 'inline-block',
						'transform': 'translate(0, calc(' + parallax + 'px + ' + options.speed*15 + '%))',
						'transition': 'all 0s linear 0s',
						'will-change': 'transform'
					});
				} else if (options.type == 'horizontal') {
					el.css({
						'display': 'inline-block',
						'transform': 'translate(calc(' + (-parallax) + 'px - ' + options.speed*15 + '%), 0)',
						'transition': 'all 0s linear 0s',
						'will-change': 'transform'
					});
				}
        	}
		}).trigger('parallax');

		$(window).scroll(function() {
			el.trigger('parallax');
		});
	});
}