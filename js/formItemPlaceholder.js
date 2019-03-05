
var $ph = $('input[type="search"], input[type="text"], input[type="email"], textarea');
$ph.each(function() {
    var value = $(this).val();
    $(this).focus(function() {
        if ($(this).val() === value) {
            $(this).val('');
        }
    });
    $(this).blur(function() {
        if ($(this).val() === '') {
            $(this).val(value);
        }
    });
});