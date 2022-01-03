$(document).ready(function(){
    $("#file").on('change',function(){
        var fileName = $("#file").val();
        $(".upload-name").val(fileName);
    });

    $("#useremail3").on('change',function(){
        var useremail = $("#useremail3").val();
        $("#useremail2").val(useremail);
    });


    $('div.button > button#submit').click(function() { 

        if( $("input[name='ok']:checked").val() == ("no") ) {
            $("input[name='ok']:checked").focus();
            
            alert("개인정보 취급방침에 동의 하신 후 이용 하실 수 있습니다."); 
            return false; 

        }else if( $('#titlename').val() == ("") ) {
            $('#titlename').focus();
            
            alert("제목을 입력해 주십시오."); 
            return false; 


        }else if( $('#username').val() == ("") ) {
            $('#username').focus();
            
            alert("이름을 입력해 주십시오."); 
            return false; 


        }else if( $('#vigidata').val() == ("") ) {
            $('#vigidata').focus();
            
            alert("방문일자를 확인해 주십시오."); 
            return false; 


        }else if( $('#ststore').val() == ("Sbasic") ) {
            $('#ststore').focus();
            
            alert("매장을 확인해 주십시오."); 
            return false; 


        }else if( $('#userid').val() == ("Pbasic") ) {
            $('#userid').focus();
            
            alert("번호를 확인해 주십시오."); 
            return false; 

            
        }else if( $('#number1').val() == ("") ) {
            $('#number1').focus();
            
            alert("번호를 확인해 주십시오."); 
            return false; 


        }else if( $('#number2').val() == ("") ) {
            $('#number2').focus();
            
            alert("번호를 확인해 주십시오."); 
            return false; 


        }else if( $('#useremail1').val() == ("") ) {
            $('#useremail1').focus();
            
            alert("이메일 주소를 확인해 주십시오."); 
            return false; 

           
        }else if( $('#useremail2').val() == ("") ) {
            $('#useremail2').focus();
            
            alert("이메일 주소를 확인해 주십시오."); 
            return false; 

           
        }else if( $('#useremail3').val() == ("") ) {
            $('#useremail3').focus();
            
            alert("이메일 주소를 확인해 주십시오."); 
            return false; 

           
        }else if( $('#usercontent').val() == ("") ) {
            $('#usercontent').focus();
            
            alert("문의내용을 입력해 주십시오."); 
            return false; 
        
        }else {
            $('#submit').focus();

            alert("전송되었습니다."); 

        }
        
    })

})