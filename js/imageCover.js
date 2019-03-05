
$.fn.imageCover = function(opts) {
    $(this).each(function() {
        var self = $(this),
            image = $('img', self),
            defaults = {
                imageRatio: 100
            },
            data = self.data(),
            dataTemp = $.extend(defaults, opts),
            options = $.extend(dataTemp, data);

        if (!options.imageRatio) {
            return false;
        }
        self.bind('customResize', function(event) {
            event.stopPropagation();
            cover();
        }).trigger('customResize');

        $(window).resize( function () {
            self.trigger('customResize');
        }).trigger('resize');

        function cover() {
            var naturalHeight = image[0].naturalHeight,
                naturalWidth = image[0].naturalWidth,
                heightWrap = self.outerHeight(),
                widthWrap = self.outerWidth();

            self.css({
                'position': 'relative',
                'overflow': 'hidden',
                'transform': 'translateZ(0)',
                'zIndex': '9',
                'padding-top': options.imageRatio + '%'
            });
            image.css({
                'position': 'absolute',
                'width': '100%',
                'vertical-align': 'middle',
                'top': '50%',
                'left': '50%',
                'zIndex': '9',
                'transform': 'translate(-50%, -50%)'
            });

            if ((widthWrap/ heightWrap) < (naturalWidth/naturalHeight)) {
                image.css({
                    'height': '100%',
                    'width': 'auto',
                    'max-width' : 'none'
                });
            } else {
                image.css({
                    'height': '',
                    'max-width': ''
                });
            }
        }
    });
}
$(window).on('load', function() {
    $('[data-image-ratio]').imageCover();
});