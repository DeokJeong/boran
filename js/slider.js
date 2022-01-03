$(document).ready(function(){  
    
    $('.btn_img > div').fadeOut(0);
    

    $('.btn_list a').click(function(){
        var i = $(this).parent().index()
            
        $('.btn_img > div').fadeOut(0);
        $('.btn_img > div').eq(i).fadeIn(0);
        $('.btn_img > div').animate("display","none")
        $('.btn_list a').removeClass('color')
        $(this).addClass('color')
        
    })

    $('.btn_img > div').hover(function(){
        $(this).css("animation-play-state","paused");
    },function(){
        $(this).css("animation-play-state","running");
    })

    // $('.logo_btn').click(function(){
    //     
    // 
    // 

	
	$('.menu-trigger').on('click', function(e){
		e.preventDefault();
		$('.menu-trigger').toggleClass('active');
        $('.wrapper ul').slideToggle('slow')
    });
    $('.wrapper ul li a').click(function(){
        $('.wrapper ul').slideUp()
        $('.menu-trigger').removeClass('active');
    });

});

