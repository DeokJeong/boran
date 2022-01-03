$(function(){
    var top1=$(".bg1").offset().top;
    var top2=$(".bg2").offset().top;
    var top3=$(".bg3").offset().top;
    var top4=$(".bg4").offset().top;
    var top5=$(".bg5").offset().top;
    var top6=$(".bg6").offset().top;

    var gap=-100;

    $(window).scroll(function(){
        var h = $(window).scrollTop();
        if(h < top1-gap){
            $("section > div > div:eq(0)").addClass('active');
        } else if(h < top2-gap){
            $("section > div > div:eq(1)").addClass('active');
        } else if(h < top3-gap){
            $("section > div > div:eq(2)").addClass('active');
        } else if(h < top4-gap){
            $("section > div > div:eq(3)").addClass('active');
        } else if(h < top5-gap){
            $("section > div > div:eq(4)").addClass('active');
        } else if(h < top6-gap){
            $("section > div > div:eq(5)").addClass('active');
        }
    });
    $(window).trigger("scroll");
});