$('span.more').click(function() {
    var $anchor = $(".info."+$(this).attr("id"));
    var $curObj = $(this);
    if ($curObj.text() == 'more') {
        $curObj.text('less');
    } else {
        $curObj.text('more');
    }
    $anchor.stop().toggle(300);
});