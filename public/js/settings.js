/**
 * Created by Administrator on 2017/9/24.
 */
define(['jquery','template'],function($,template){
    $.ajax({
        type:'get',
        url:'/api/teacher/profile',
        dataType:'json',
        success:function(data){
            var html=template('settingsTpl',data.result);
            $('#settingsInfo').html(html);
        }

    })

})