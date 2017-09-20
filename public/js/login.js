/**
 * Created by Administrator on 2017/9/20.
 */
define(['jquery','cookie'],function($){

    $('#loginBtn').click(function(){
        $.ajax({
            type : 'post',
            url : '/api/login',
            data : $('#loginForm').serialize(),

            dataType: 'json',
            success:function(data){
                if(data.code==200){
                    location.href='/main/index';
                    $.cookie('loginInfo',JSON.stringify(data.result),{path:'/'});

                }
            }
        });

        return false;
    });

})