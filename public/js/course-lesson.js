/**
 * Created by Administrator on 2017/10/5.
 */
define(['jquery','template','util','bootstrap','form'],function($,template,util){
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
                $('#addOrEditLesson').click(function(){
                    $('#lessonForm').ajaxSubmit({
                        type:'post',
                        url:'/api/course/chapter/add',
                        data:{ct_cs_id:csId},
                        dataType:'json',
                        success:function(data){
                            if(data.code==200){
                                location.reload();
                            }
                        }
                    })
                })
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
                        $('#addOrEditLesson').click(function(){
                            $('#lessonForm').ajaxSubmit({
                                type:'post',
                                url:'/api/course/chapter/modify',
                                data:{ct_cs_id:csId,ct_id:ctId},
                                dataType:'json',
                                success:function(data){
                                    if(data.code==200){
                                        location.reload();
                                    }
                                }
                            })
                        })
                    }
                })
            })
        }
    })
})