/**
 * Created by Administrator on 2017/9/22.
 */
define(['jquery','template','util'],function($,template,util){
var tcId=util.qs('tc_id');
    if(tcId){
       /* �༭��ʦ*/
        $.ajax({
            type:'get',
            url:'/api/teacher/edit',
            data:{tc_id:tcId},
            dataType:'json',
            success:function(data){
                data.result.operate='�༭��ʦ';
                var html=template('teacherTpl',data.result);
                $('#teacherInfo').html(html);
            }

        })
    }else{
    /*    ���ӽ�ʦ*/
        var html=template('teacherTpl',{operate:'���ӽ�ʦ'});
        $('#teacherInfo').html(html);
    }

})