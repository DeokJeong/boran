$(function(){
    var menu = $('#mainmenu > li');
    var subBackground = $(".subBackground");
    var wrap = $('nav.wrapper');
    var header = $('header');
    var pageURL = location.href;
    var submenu = $('.submenu');

    
    menu.on({
        mouseover:function(){ 
            var width = $(window).width();

            if(width > 764){
                var tg = $(this);   
                menu.addClass('on');
                subBackground.addClass('active');
                header.addClass('active');
                var th = tg.children('a').height() + tg.children('div.submenu').height(); 
                wrap.stop().animate({height:th});   
            } else {
                
            }
        },
        mouseout:function(){ 
            var width = $(window).width();

            if(width > 764){
            var tg = $(this);

            menu.removeClass('on');
            subBackground.removeClass('active')
            header.removeClass('active')

            var th = tg.children('a').height(); 
            wrap.stop().animate({height:th}); 
            } else {
                 
            }
        }   
    });


            
    menu.each(function(){
        var tg = $(this);
        var sub = tg.find('> .submenu > ul > li'); 
        var menuURL = tg.children('a').attr('href');
        var active = pageURL.indexOf(menuURL); 
        if(active > -1) activeMenu = tg; 
        sub.each(function(j){
            var tg = $(this);
            var subURL = tg.children('a').attr('href');
            active = pageURL.indexOf(subURL); 
            if(active > -1) activeMenu = tg;

        });
        sub.on({
            mouseover:function(e){ 
                var tg = $(this);
                tg.addClass('on');
            },
            mouseout:function(){
                var tg = $(this);
                tg.removeClass('on');
            }
        });
    });

    var nawa = $('#nawa');
    var wrap = $('.wrapper');
    nawa.on('click',function(e){
        e.preventDefault();
        wrap.slideToggle();

    });
    
    $(window).resize(function(){
        var w = $(window).width();
        if(w > 320 && wrap.is(':hidden')){
            wrap.removeAttr('style');
        }
    });
});




