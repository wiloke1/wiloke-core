
$.fn.numberTextLine = function(opts) {
    $(this).each( function () {
        var el = $(this),
            defaults = {
                numberLine: 0
            },
            data = el.data(),
            dataTemp = $.extend(defaults, opts),
            options = $.extend(dataTemp, data);

        if (!options.numberLine)
            return false;

        el.bind('customResize', function(event) {
            event.stopPropagation();
            reInit();
        }).trigger('customResize');
        $(window).resize( function () {
            el.trigger('customResize');
        })
        function reInit() {
            var fontSize = parseInt(el.css('font-size')),
                lineHeight = parseInt(el.css('line-height')),
                overflow = fontSize * (lineHeight / fontSize) * options.numberLine;

            el.css({
                'display': 'block',
                'max-height': overflow,
                'overflow': 'hidden'
            });
        }
    })
}
$('[data-number-line]').numberTextLine();
