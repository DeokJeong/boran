$(document).ready(function () {
  
    $('#carousel').waterwheelCarousel();

    $('#carousel > img').click(function(){
      var i = $(this).index();
      $('.sub > div').fadeOut(0);
      $('.sub > div').eq(i).fadeIn(0);
    })
    $(window).resize(function(){
      var w = $(window).width();
      if(w > 320 && $('#carousel > img').is(':hidden')){
        location.reload('#carousel img');
      }else{
        location.reload('#carousel img');
      }
  });
});
