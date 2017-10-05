/**
 * Created by Administrator on 2017/10/5.
 */
define(['jquery','template','util','bootstrap'],function($,template,util){
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
          /*  ����ӿ�ʱ�¼�*/
            $('#addLesson').click(function(){
                var html=template('modalTpl',{operate:'��ӿ�ʱ'});
                $('#modalInfo').html(html);
                $('#chapterModal').modal();
            });
         /*   �༭��ʱ*/
            $('.editBtn').click(function(){
                var ctId=$(this).attr('data-ctId');
                $.ajax({
                    type:'get',
                    url:'/api/course/chapter/edit',
                    data:{ct_id:ctId},
                    dataType:'json',
                    success:function(data){
                        data.result.operate='�༭��ʱ';
                       var html=template('modalTpl',data.result);
                        $('#modalInfo').html(html);
                        $('#chapterModal').modal();
                    }
                })
            })
        }
    })
})