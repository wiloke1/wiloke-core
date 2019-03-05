/**
 * [isMobile description]
 * @type {Object}
 */
window.isMobile = {
	Android: function() {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function() {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	Ipad: function() {
		return navigator.userAgent.match(/iPad/i);
	},
	iOS: function() {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function() {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function() {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function() {
		return (
			isMobile.Android() ||
			isMobile.BlackBerry() ||
			isMobile.iOS() ||
			isMobile.Opera() ||
			isMobile.Windows()
		);
	}
};
const isMac = navigator.platform.match(/(Mac|iPhone|iPod|iPad)/i);
window.isIE = /(MSIE|Trident\/|Edge\/)/i.test(navigator.userAgent);
window.windowHeight = window.innerHeight;
window.windowWidth = window.innerWidth;
window.wilScrollTop = () =>
	(window.pageYOffset || document.documentElement.scrollTop) -
	(document.documentElement.clientTop || 0);

Element.prototype.wilHasClass = function(className) {
	return (
		this !== null &&
		this.className.search(
			new RegExp(`(\\s+|^)${className}(\\s|$)`, "g")
		) !== -1
	);
};

Element.prototype.wilAddClass = function(className) {
	return (
		this !== null &&
		!this.wilHasClass(className) &&
		(this.className += this.className === "" ? className : ` ${className}`)
	);
};
Element.prototype.wilRemoveClass = function(className) {
	return (
		this !== null &&
		this.wilHasClass(className) &&
		(this.className =
			this.className.search(/\s/g) === -1
				? this.className.replace(new RegExp(`^${className}`, "g"), "")
				: this.className.replace(
						new RegExp(`\\s${className}|^${className}\\s`, "g"),
						""
				  ))
	);
};
Element.prototype.wilToggleClass = function(className) {
	return (
		this !== null &&
		(this.wilHasClass(className)
			? (this.className =
					this.className.search(/\s/g) === -1
						? this.className.replace(
								new RegExp(`^${className}`, "g"),
								""
						  )
						: this.className.replace(
								new RegExp(
									`\\s${className}|^${className}\\s`,
									"g"
								),
								""
						  ))
			: (this.className +=
					this.className === "" ? className : ` ${className}`))
	);
};
Element.prototype.wilStyles = function(obj) {
	for (var prop in obj) {
		this.style[prop] = obj[prop];
	}
};
function wilEach(els, cb) {
	for (var i = 0, len = els.length; i < len; i++) {
		if (i === len) break;
		cb(els[i], i);
	}
}
function wilExtend(obj, src) {
	if (typeof src === "object") {
		wilEach(Object.keys(src), function(key) {
			obj[key] = src[key];
		});
	}
	return obj;
}
function wilWrapInner(el, wrapInner) {
	var _el = [].slice.call(el.children);
	var fragment = document.createDocumentFragment();
	el.insertAdjacentHTML("afterbegin", wrapInner);
	var _wrap = el.children[0];
	for (var i = 0, len = _el.length; i < len; i++) {
		fragment.appendChild(_el[i]);
	}
	_wrap.appendChild(fragment);
}
