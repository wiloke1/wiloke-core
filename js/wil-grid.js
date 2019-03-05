/**
 * Wil Grid
 */
$('.wil-grid').each(function() {
	var self = $(this),
		optData = self.data('options'),
		optDefault = {
			style: 'masonry',
			filterClass: '.wil-filter',
			container: '.wil-grid__inner',
			gridSize: '.grid-sizer',
			gridItem: '.grid-item',
			gridItemInner: '.grid-item__inner',
			isotopeTransition: {
				hiddenStyle: '',
				visibleStyle: '',
				transitionDuration: ''
			},
			beforeSetItemElem: false,
			afterSetItemElem: false,
		},
		options = $.extend(optDefault, optData);
		
	self.WilokeIsotope(options);
});


/**
 * Wil grid scss
 */

$.fn.reCalWidth = function() {
	var $self = $(this);
	$self.on('reCalWidth', function() {
		var _self = $(this);
		_self.css('width', '');
		var width = Math.floor(_self.width());
		_self.css('width', width + 'px');
		var height = Math.floor(_self.parent().children('.wide').width()/2);
		_self.parent().children('.wide').css('height', height + 'px');
	});
	$(window).on('resize', function() {
		$self.trigger('reCalWidth');
	});
}
function work() {
	$('.wil-grid-scss').each(function() {
		var workWrapper = $(this),
			workContainer = $('.wil-grid__inner', workWrapper),
			filters = $('.wil-filter', workWrapper),
			filterCurrent = $('.current a', filters),
			filterLiCurrent = $('.current', filters),
			duration = 0.3;
		workContainer.imagesLoaded( function() {
			workContainer.isotope({
				layoutMode: 'masonry',
				itemSelector: '.grid-item',
				transitionDuration: duration + 's',
				masonry: {
					columnWidth: '.grid-sizer'
				},
				// hiddenStyle: {},
				// visibleStyle: {}
			});
		});
		filters.on('click', 'a', function(e) {
			e.preventDefault();
			var $el = $(this);
			var selector = $el.attr('data-filter');
			filters.find('.current').removeClass('current');
			$el.parent().addClass('current');
			workContainer.isotope({
				filter: selector
			});
		});
		$('.grid-item', workWrapper).reCalWidth();
	});
}
work();
