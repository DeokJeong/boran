$(document).ready(function(){
    var button = $('#buttonList > li'); 
    var img = $('.event > ul > li'); 
    var current = 0; 
    var lfbtn = $('button.leftbutton') 
    var rgbtn = $('button.rightbutton') 
    
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
})