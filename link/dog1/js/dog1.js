$(document).ready(function(){
    var num = 1;

    setInterval(function(){
        if(num < 4){
            num++;
            $('.event > ul').animate({
                left:'-=100%'
            },'slow')
        }else{
            num = 1;
            $('.event > ul').animate({
                left:0
            },'slow')
        }
    },5000)

    $('.btn a').click(function(){
        $('.btn a').removeClass('on');
        $(this).addClass('on');

        var i = $(this).parent().index();

        $('.bwrap > div').fadeOut(0);
        $('.bwrap > div').eq(i).fadeIn(0);
    });
})