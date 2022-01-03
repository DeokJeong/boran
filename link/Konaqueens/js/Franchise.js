$(document).ready(function(){

    $(".list ul li").click(function(){
        $(".list ul li").removeClass('on');
        $(this).addClass('on');

        var i = $(this).index();

        $('.FCtxt > div').fadeOut(0);
        $('.FCtxt > div').eq(i).fadeIn(0);

    });

});