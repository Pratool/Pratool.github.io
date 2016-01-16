$('span.more').click(function() {
    //alert($(this).attr("id"));
    if ($("."+$(this).attr("id")).css('display') == 'none') {
        $("."+$(this).attr("id")).css('display', 'block');
        $(this).text('Less');
    } else {
        $("."+$(this).attr("id")).css('display', 'none');
        $(this).text('More');
    }
});