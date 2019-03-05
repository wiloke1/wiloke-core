/**
 * Core Swiper
 */
$(".swiper__module").each(function() {
	var self = $(this),
		swiperEl = self.children(".swiper__inner"),
		wrapper = $(".swiper-wrapper", self),
		optData = self.data("options"),
		optDefault = {
			pagination: {
				el: self.children(".swiper-pagination-custom"),
				clickable: true,
				dynamicBullets: true
			},
			navigation: {
				nextEl: self
					.children(".swiper-button-custom")
					.children(".swiper-button-next-custom"),
				prevEl: self
					.children(".swiper-button-custom")
					.children(".swiper-button-prev-custom")
			},
			spaceBetween: 30,
			autoHeight: true
		},
		options = $.extend(optDefault, optData);
	wrapper.children().wrap('<div class="swiper-slide"></div>');
	var swiper = new Swiper(swiperEl, options);

	function thumbnails(selector) {
		if (selector.length > 0) {
			var wrapperThumbs = selector.children(".swiper-wrapper"),
				optDataThumbs = selector.data("options"),
				optDefaultThumbs = {
					spaceBetween: 10,
					centeredSlides: true,
					slidesPerView: 3,
					touchRatio: 0.3,
					slideToClickedSlide: true,
					pagination: {
						el: selector.children(".swiper-pagination-custom")
					},
					navigation: {
						nextEl: selector.children(".swiper-button-next-custom"),
						prevEl: selector.children(".swiper-button-prev-custom")
					}
				},
				optionsThumbs = $.extend(optDefaultThumbs, optDataThumbs);
			wrapperThumbs.children().wrap('<div class="swiper-slide"></div>');
			var swiperThumbs = new Swiper(selector, optionsThumbs);
			swiper.controller.control = swiperThumbs;
			swiperThumbs.controller.control = swiper;
		}
	}
	thumbnails(self.next(".swiper-thumbnails__module"));
});
