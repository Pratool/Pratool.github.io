$('span.more').click(function() {
    if ($(".info."+$(this).attr("id")).css('display') == 'none') {
        $(".info."+$(this).attr("id")).css('display', 'block');
        $(this).text('less');
    } else {
        $(".info."+$(this).attr("id")).css('display', 'none');
        $(this).text('more');
    }
});