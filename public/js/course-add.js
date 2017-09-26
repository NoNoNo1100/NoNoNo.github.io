/**
 * Created by Administrator on 2017/9/25.
 */
define(['jquery','util','form'],function($,util){
    util.setMenu(location.pathname);
    $('#courseBtn').click(function(){
        $('#courseForm').ajaxSubmit({
            type:'post',
            url:'/api/course/create',
            dataType:'json',
            success:function(data){
                if(data.code==200){
                    location.href='/course/basic?cs_id='+data.result.cs_id;
                }
            }
        })
    })

});