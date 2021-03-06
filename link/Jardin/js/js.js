$(function(){
    //글로벌 변수 : 어디에서든 쓸 수 있음
    var menu = $('nav.wrapper > ul > li#inside_jardin'); // 큰 메뉴
    var wrap = $('.logoArea'); // 큰 메뉴를 감싸고있는 div
    var pageURL = location.href; //새로운 페이지로 이동하다.
    var activeMenu;
  
    menu.on({
        mouseover:function(){ // 마우스 오버시
            //로컬 변수 : 이 안에서만 사용 할 수 있는 변수
            var tg = $(this); 
            menu.removeClass('on'); // 모든 메뉴의 class'on'을 지운다.
            tg.addClass('on'); // 마우스가 있는곳의 메뉴에 class"on"을 넣는다.
            var th = tg.children('a').height() + tg.children('.submenu').height(); // th는 tg안에 있는 a의 높이값 + 그 아래에 있는 값의 높이값을 더한 값이다.
            wrap.stop().animate({height:th}); // th의 높이값을 준다.
        },
        mouseout:function(){ // 마우스 아웃시
            var tg = $(this);
            tg.removeClass('on'); // 마우스 오버한곳의 class를 지운다.
            var th = tg.children('a').height(); // th는 tg안에 있는 a의 높이값만 주어진다.
            wrap.stop().animate({height:th}); // th의 높이값을 준다.
        }
    });
            
        menu.each(function(){ //각각의 메뉴에 적용한다.
            var tg = $(this);
            var sub = tg.find('> .inside_jardin > ul > li'); // menu 안의 세부 루트를 지정한다.
            var menuURL = tg.children('a').attr('href'); // tg안에 있는 a에게 href를 읽어온다.
            var active = pageURL.indexOf(menuURL); // 몇번째 메뉴인지 확인하고 이동한다.
            if(active > -1) activeMenu = tg; // active가 있다면 무조건 -1보다 높다 없다면 -1
            sub.each(function(j){
                var tg = $(this);
                var subURL = tg.children('a').attr('href');
                active = pageURL.indexOf(subURL); // 이미 지정한 변수의 속성을 변경한다.(속성만 변경 할 수 있음)
                if(active > -1) activeMenu = tg;

        });
        sub.on({
            mouseover:function(event){ //마우스 오버시 이벤트 발생
                var tg = $(this);
                sub.removeClass('on');
                tg.addClass('on');
            },
            mouseout:function(){
                var tg = $(this);
                tg.removeClass('on');
            }
        });
    });
});



