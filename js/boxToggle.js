
$('.wil-box-toggle').each(function() {
    var el = $(this),
        elId = el.attr('id');
    $('[href="#' + elId + '"]').on('click', function(e) {
        e.preventDefault();
        el.toggleClass('active');
        $(this).toggleClass('active');
        if (el.hasClass('body-overflow-hidden')) {
            $('html, body').toggleClass('overflow-hidden');
        }
    });
    $('html, .wil-box-toggle__close').on('click', function() {
        el.removeClass('active');
        $('[href="#' + elId + '"]').removeClass('active');
        $('html, body').removeClass('overflow-hidden');
    });
    $('.wil-box-toggle__close').on('click', function(e) {
        e.preventDefault();
    });
    $('.wil-box-toggle, [href="#' + elId + '"]').on('click', function(e) {
        e.stopPropagation();
    });
});

// class boxToggle {
// 	constructor(el, opt) {
// 		const optDefault = {
// 			classActive: 'active',
// 			classClose: 'close'
// 		};
// 		this.opts = wilExtend(optDefault, opt);
// 		this.els = [].slice.call(document.querySelectorAll(el));
// 		this.init();
// 	}

// 	onClick(el, cb) {
// 		return el.addEventListener('click', cb);
// 	}

// 	handleOpen(event, el) {
// 		event.preventDefault();
// 		const { opts } = this;
// 		const { currentTarget } = event;
// 		currentTarget.wilAddClass(opts.classActive);
// 		el.wilAddClass(opts.classActive);
// 	}

// 	handleClose(event, el, btnOpen) {
// 		event.preventDefault();
// 		const { opts } = this;
// 		btnOpen.wilRemoveClass(opts.classActive);
// 		el.wilRemoveClass(opts.classActive);
// 	}

// 	init() {
// 		for (let i = 0, len = this.els.length; i < len; i++) {
// 			const el = els[i];
// 			const id = el.getAttribute('id');
// 			const btnOpen = document.querySelector(id);
// 			// Open
// 			btnOpen.addEventListener('click', event => this.handleOpen(event, el));
// 			// Close
// 			document.querySelector(`html, ${ opts.classClose }`).addEventListener('click', event => this.handleClose(event, el, btnOpen))
// 		}
// 	}
// }
// new boxToggle('.boxToggle');
