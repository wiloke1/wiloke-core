$(".js-video-popup").magnificPopup({
	disableOn: 700,
	type: "iframe",
	removalDelay: 160,
	preloader: false,
	fixedContentPos: false
});
class coreHoverParallax {
	constructor(el, opt) {
		this.el = $(el);
		const defaultOpt = {
			type: "3d"
		};
		const dataOpt = {
			type: this.el.data("hover-parallax-options")
		};
		this.opts = $.extend(defaultOpt, opt, dataOpt);
		this.inner = null;
		this.btnPlay = null;
		this.bgclone1 = '<div class="bg-parallax-clone-1"></div>';
		this.bgclone2 = '<div class="bg-parallax-clone-2"></div>';
		this.bgclone3 = '<div class="bg-parallax-clone-3"></div>';
		return this.init();
	}

	init() {
		var { el } = this;
		el.on({
			mousemove: event => this.mousemove(event),
			mouseenter: event => this.mouseenter(event),
			mouseleave: event => this.mouseleave(event)
		});
		this.type();
	}

	type() {
		const { opts } = this;
		this.el.each(index => {
			const img = $(".bg-cover", this.el[index]);
			img.css({
				width: img.outerWidth() + "px",
				height: img.outerHeight() + "px"
			});
			if (opts.type === "3d") {
				img.clone()
					.prependTo(img.parent())
					.wrap(this.bgclone1);
				img.clone()
					.prependTo(img.parent())
					.wrap(this.bgclone2);
				img.clone()
					.prependTo(img.parent())
					.wrap(this.bgclone3);
			}
		});
	}

	mousemove(event) {
		const self = $(event.currentTarget);
		let w = self.outerWidth(),
			h = self.outerHeight(),
			o = self.offset(),
			x = (o.left + w / 2 - event.pageX) / 15,
			y = (o.top + h / 2 - event.pageY) / 15;
		this.inner = self.children();
		this.btnPlay = $(".js-video-popup", self);
		this.inner.css(
			"transform",
			"perspective(300em) translate(" +
				parseInt(x / 2) +
				"px, " +
				parseInt(y / 2) +
				"px) rotateX(" +
				-parseInt(y) +
				"deg) rotateY(" +
				parseInt(x) +
				"deg)"
		);
		this.btnPlay.css(
			"transform",
			"translate(" + parseInt(x) + "px, " + parseInt(y) + "px)"
		);
		$("." + $(this.bgclone1)[0].className, self).css(
			"transform",
			"translate(" + -parseInt(x / 1) + "px, " + -parseInt(y / 1) + "px)"
		);
		$("." + $(this.bgclone2)[0].className, self).css(
			"transform",
			"translate(" + -parseInt(x / 2) + "px, " + -parseInt(y / 2) + "px)"
		);
		$("." + $(this.bgclone3)[0].className, self).css(
			"transform",
			"translate(" + -parseInt(x / 3) + "px, " + -parseInt(y / 3) + "px)"
		);
	}

	mouseenter() {
		const self = $(event.currentTarget);
		this.inner = self.children();
		this.btnPlay = $(".js-video-popup", self);
		if (
			this.btnPlay.css("transform") === "none" ||
			this.btnPlay.css("transform") === "matrix(1, 0, 0, 1, 0, 0)"
		) {
			this.inner.css("transition", "all 0.3s ease");
			this.btnPlay.css("transition", "all 0.3s ease");
			$(
				"." +
					$(this.bgclone1)[0].className +
					", ." +
					$(this.bgclone2)[0].className +
					", ." +
					$(this.bgclone3)[0].className,
				self
			).css("transition", "all 0.3s ease");
			setTimeout(() => {
				this.inner.css("transition", "none");
				this.btnPlay.css("transition", "none");
				$(
					"." +
						$(this.bgclone1)[0].className +
						", ." +
						$(this.bgclone2)[0].className +
						", ." +
						$(this.bgclone3)[0].className,
					self
				).css("transition", "none");
			}, 300);
		}
	}

	mouseleave(event) {
		const self = $(event.currentTarget);
		const update = setInterval(() => {
			if (this.btnPlay.css("transform") !== "matrix(1, 0, 0, 1, 0, 0)") {
				this.inner.css({
					transform:
						"perspective(300em) translate(0px, 0px) rotateX(0deg) rotateY(0deg)",
					transition: "all 0.3s ease"
				});
				this.btnPlay.css({
					transform: "translate(0px, 0px)",
					transition: "all 0.3s ease"
				});
				$(
					".bg-parallax-clone-1, .bg-parallax-clone-2, .bg-parallax-clone-3",
					self
				).css({
					transform: "translate(0px, 0px)",
					transition: "all 0.3s ease"
				});
			} else {
				this.inner.css("transition", "none");
				this.btnPlay.css("transition", "none");
				$(
					".bg-parallax-clone-1, .bg-parallax-clone-2, .bg-parallax-clone-3",
					self
				).css("transition", "none");
				clearInterval(update);
			}
		}, 5);
	}
}

new coreHoverParallax('[class*="video-popup-parallax-"]');
