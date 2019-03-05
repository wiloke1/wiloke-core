var wilMenu = function(el, opt) {
	var optDefault = {
		menuClass: 'wil-menu-list',
		breakpoint: 1000,
		toggleClass: 'active',
		classButtonToggle: 'toggle-menu',
		subMenu: {
			class: 'sub-menu',
			parentClass: 'menu-item-has-children',
			toggleClass: 'active'
		}
	};
	this.opts = $.extend(optDefault, opt);
	this.el = $(el);
	this.init();
}

wilMenu.prototype = {
	init: function() {
		var _this = this;
		var opts = this.opts;
		_this.el.each(function() {
			var self = $(this),
				buttonToggle = $('.' + opts.classButtonToggle, self),
				menu = $('.' + opts.menuClass, self),
				itemHasChild = $('.' + opts.subMenu.parentClass + ' > a', self);
			_this.toggleMenu(buttonToggle, menu, opts);
			_this.toggleSubMenu(itemHasChild, opts);
			_this.clickOut(menu, opts);
		});
	},
	handleClick: function(selector, cb, opts) {
		selector.on('click', function(event) {
			var ww = window.innerWidth;
			if (ww <= opts.breakpoint) cb(event);
		});
	},
	toggleMenu: function(buttonToggle, menu, opts) {
		this.handleClick(buttonToggle, function(event) {
			event.preventDefault();
			event.stopPropagation();
			menu.toggleClass(opts.toggleClass);
		}, opts);
	},
	toggleSubMenu: function(itemHasChild, opts) {
		this.handleClick(itemHasChild, function(event) {
			event.preventDefault();
			var subMenu = $(event.currentTarget).siblings('.' + opts.subMenu.class);
			subMenu.stop().slideToggle(400);
			subMenu.parent().toggleClass(opts.subMenu.toggleClass);
		}, opts);
	},
	clickOut: function(menu, opts) {
		this.handleClick($(document), function(event) {
			menu.removeClass(opts.toggleClass);
		}, opts);
		this.handleClick(menu, function(event) {
			event.stopPropagation();
		}, opts);
	}
}

$.fn.wilMenu = function(opt) {
	var _wilMenu = new wilMenu($(this), opt);
	return _wilMenu;
}
