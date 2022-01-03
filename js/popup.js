$(document).ready(function(){
    $('#about').append("<div id='glayLayer'></div>");
        $(".info_popup").click(function(){
            $(this).hide();
            $("#glayLayer").hide();
        });
        $("#infographic").click(function(){
            $(".info_popup").show();
            $("#glayLayer").show();
            return false;
        });
        
    $('#banner').append("<div id='popup_bg'></div>");
    $(".close_popup, #popup_bg").click(function(){
        $('.tea_popup, .cake_popup, .stamp_popup, .blf_popup, .car_popup').hide();
        $("#popup_bg").hide();
    });
    $(".popupopen_tea").click(function(){
        $(".tea_popup").show();
        $("#popup_bg").show();
        return false;
    });
    $(".popupopen_cake").click(function(){
        $(".cake_popup").show();
        $("#popup_bg").show();
        return false;
    });
    $(".popupopen_stamp").click(function(){
        $(".stamp_popup").show();
        $("#popup_bg").show();
        return false;
    });
    $(".popupopen_blf").click(function(){
        $(".blf_popup").show();
        $("#popup_bg").show();
        return false;
    });
    $(".popupopen_car").click(function(){
        $(".car_popup").show();
        $("#popup_bg").show();
        return false;
    });
    });