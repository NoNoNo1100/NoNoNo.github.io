/**
 * Created by Administrator on 2017/9/22.
 */
define(['jquery','template','util'],function($,template,util){
var tcId=util.qs('tc_id');
    if(tcId){
       /* ±à¼­½²Ê¦*/
        $.ajax({
            type:'get',
            url:'/api/teacher/edit',
            data:{tc_id:tcId},
            dataType:'json',
            success:function(data){
                data.result.operate='±à¼­½²Ê¦';
                var html=template('teacherTpl',data.result);
                $('#teacherInfo').html(html);
            }

        })
    }else{
    /*    Ìí¼Ó½²Ê¦*/
        var html=template('teacherTpl',{operate:'Ìí¼Ó½²Ê¦'});
        $('#teacherInfo').html(html);
    }

})