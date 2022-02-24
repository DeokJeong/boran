$(function(){
    var menu = $('#mainmenu > li');
    var subBackground = $(".subBackground");
    var wrap = $('nav.wrapper');
    var header = $('header');
    var pageURL = location.href;
    var button = $('#buttonList > li'); 
    var img = $('#brand_at > ul > li'); 
    var current = 0; 
    var lfbtn = $('button.leftbutton') 
    var rgbtn = $('button.rightbutton') 
    
    menu.on({
        mouseover:function(){ 
            var tg = $(this); 
            menu.addClass('on');
            subBackground.addClass('active');
            header.addClass('active');
            var th = tg.children('a').height() + tg.children('div.submenu').height(); 
            wrap.stop().animate({height:th},); 
        },
        mouseout:function(){ 
            var tg = $(this);
            menu.removeClass('on');
            subBackground.removeClass('active')
            header.removeClass('active')
            var th = tg.children('a').height(); 
            wrap.stop().animate({height:th}); 
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
 
    button.click(function(){ 
    	var tg = $(this); 
    	var i = tg.index(); 
    	
    	button.removeClass('on'); 
    	tg.addClass('on'); 
    	
    	move(i); 
    });
    
    function move(i){ 
    	img.eq(current).css('left', 0).stop().animate({left:'-100%'},1000); 
    	img.eq(i).css('left', '100%').stop().animate({left:0},1000); 
    	
    	current = i; 
    }

    lfbtn.click(function(){
        button.removeClass("on");

        if(current - 1 < 0){ 
            
            button.eq(button.size() - 1).addClass("on"); 

            img.eq(current).css('left', 0).stop().animate({left:'100%'},1000); 
            img.eq(button.size() - 1).css('left', '-100%').stop().animate({left:0},1000);

            current = button.size() - 1
        } else { 
            button.eq(current - 1).addClass("on"); 

            img.eq(current).css('left', 0).stop().animate({left:'100%'},1000); 
            img.eq(current - 1).css('left', '-100%').stop().animate({left:0},1000); 

            current = current - 1
        }
    });

    rgbtn.click(function(){
        button.removeClass("on"); 
        
        if(current + 1 == button.size()){ 
            button.eq(0).addClass("on");  

            img.eq(current).css('left', 0).stop().animate({left:'-100%'},1000); 
            img.eq(0).css('left', '100%').stop().animate({left:0},1000); 
            
            current = 0 
        } else { 
            button.eq(current + 1).addClass("on"); 

            img.eq(current).css('left', 0).stop().animate({left:'-100%'},1000);
            img.eq(current + 1).css('left', '100%').stop().animate({left:0},1000); 

            current = current + 1 
        }
    });
    
}); 




