var selectors = [
	'iframe[src*="player.vimeo.com"]',
	'iframe[src*="youtube.com"]',
	'iframe[src*="youtube-nocookie.com"]',
	'iframe[src*="kickstarter.com"][src*="video.html"]',
	'iframe[src*="matterport.com"]',
	"object",
	"embed"
];
var $allVideos = $("body").find(selectors.join(","));
$allVideos.each(function() {
	var vid = $(this),
		vidWidth = vid.outerWidth(),
		vidHeight = vid.outerHeight(),
		ratio = (vidHeight / vidWidth) * 100;
	$allVideos.addClass("embed-responsive-item");
	if (ratio == 75) {
		$allVideos.wrap(
			'<div class="embed-responsive embed-responsive-4by3"></div>'
		);
	} else {
		$allVideos.wrap(
			'<div class="embed-responsive embed-responsive-16by9"></div>'
		);
	}
});
// class embedResponsive {
// 	constructor() {
// 		this.selectors = [
// 			'iframe[src*="player.vimeo.com"]',
// 			'iframe[src*="youtube.com"]',
// 			'iframe[src*="youtube-nocookie.com"]',
// 			'iframe[src*="kickstarter.com"][src*="video.html"]',
// 			'object',
// 			'embed'
// 		];
// 		this.els = document.querySelectorAll(this.selectors.join(','));
// 		this.init();
// 	}

// 	init() {
// 		for (let i = 0, len = this.els.length; i < len; i++) {
// 			const el = this.els[i];
// 			const w = el.offsetWidth;
// 			const h = el.offsetHeight;
// 			const ratio = (w / h) * 100;
// 			el.wilAddClass('embed-responsive-item');
// 			const wrap = document.createElement('DIV');
// 			wrap.className = `embed-responsive embed-responsive-${ ratio === 75 ? `4by3` : `16by9` }`;
// 			el.insertAdjacentElement('beforebegin', wrap);
// 			wrap.appendChild(el);
// 		}
// 	}
// }
// new embedResponsive();
