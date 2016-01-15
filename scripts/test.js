$('span.more').click(function() {
    //alert($(this).attr("id"));
    $("."+$(this).attr("id")).css('display', 'block');
});

//$('.cpu-info').css('display','block')