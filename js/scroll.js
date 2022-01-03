$(function(){
    var lev1=$('#about').offset().top;
	$(window).scroll(function(){
        var h = $(window).scrollTop();
        if( h < lev1-300){
            $('.side_nav').css('display','none');
        }else{
            $('.side_nav').css('display','block');
        }
    });

    
    var top=$('#mainpage').offset().top;
    var top1=$('#about').offset().top;
    var top2=$('#skills').offset().top;
    var top3=$('#portfolio').offset().top;
    var top4=$('#banner').offset().top;
    var top5=$('#promotion').offset().top;
    var top6=$('#contact').offset().top;

    
    $(window).scroll(function(){
      var h = $(window).scrollTop();
      if(h < top1-300){
        $(".graph").removeClass('active');
        $(".info > ul > li").removeClass('on');
        
      }else if(h < top1+300){
        $(".graph").removeClass('active');
        $(".info > ul > li").addClass('on');
        $('.side_nav ul li a').removeClass('color')
        $('.side_nav ul li.about_nav a').addClass('color')

      }else if(h < top2+300){
        $(".graph").addClass('active');
        $('.side_nav ul li a').removeClass('color')
        $('.side_nav ul li.skills_nav a').addClass('color')

      }else if(h < top3+300){
        $(".graph").removeClass('active');
        $(".info > ul > li").removeClass('on');
        $('.side_nav ul li a').removeClass('color')
        $('.side_nav ul li.portfolio_nav a').addClass('color')

      }else if(h < top4+300){
        $(".graph").removeClass('active');
        $(".info > ul > li").removeClass('on');
        $('.side_nav ul li a').removeClass('color')
        $('.side_nav ul li.banner_nav a').addClass('color')

      }else if(h < top5+300){
        $(".graph").removeClass('active');
        $(".info > ul > li").removeClass('on');
        $('.side_nav ul li a').removeClass('color')
        $('.side_nav ul li.promotion_nav a').addClass('color')

      }else if(h < top6+300){
        $(".graph").removeClass('active');
        $(".info > ul > li").removeClass('on');
        $('.side_nav ul li a').removeClass('color')
        $('.side_nav ul li.contact_nav a').addClass('color')
      }
      
  })
});