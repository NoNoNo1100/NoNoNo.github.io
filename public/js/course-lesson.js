/**
 * Created by Administrator on 2017/10/5.
 */
define(['jquery','template','util'],function($,template,util){
    util.setMenu('/course/add');
    var csId=util.qs('cs_id');
    $.ajax({
        type:'get',
        url:'/api/course/lesson',
        data:{cs_id:csId},
        dataType:'json',
        success:function(data){
            var html=template('lessonTpl',data.result);
            $('#lessonInfo').html(html);
        }
    })
})