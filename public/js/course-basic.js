/**
 * Created by Administrator on 2017/9/25.
 */
define(['jquery','template','util','ckeditor','validate','form'],function($,template,util,CKEDITOR){
    util.setMenu('/course/add');
    var csId=util.qs('cs_id');
    var flag=util.qs('flag');
    $.ajax({
        type:'get',
        url:'/api/course/basic',
        data:{cs_id:csId},
        dataType:'json',
        success:function(data){
            if(flag){
                data.result.operate='课程编辑';
            }else{
                data.result.operate='课程添加';
            }
            var html=template('basicTpl',data.result);
            $('#basicInfo').html(html);
            $('#firstType').change(function(){
                var pid=$(this).val();
                $.ajax({
                    type:'get',
                    url:'/api/category/child',
                    data:{cg_id:pid},
                    dataType:'json',
                    success:function(data){
                       var tpl='<option value="">请选择二级分类...</option>{{each list}}<option value="{{$value.cg_id}}">{{$value.cg_name}}</option>{{/each}}';
                        var html=template.render(tpl,{list:data.result});
                        $('#secondType').html(html);
                    }
                })
            })
            /*处理富文本*/
            CKEDITOR.replace('editor');
            /*处理表单验证事件*/
            $('#basicForm').validate({
                sendForm:false,
                valid:function(){
                    for(var instance in CKEDITOR.instances){
                        CKEDITOR.instances[instance].updateElement();
                    }
                    $(this).ajaxSubmit({
                        type:'post',
                        url:'/api/course/update/basic',
                        data:{cs_id:csId},
                        dataType:'json',
                        success:function(data){
                        if(data.code==200){
                            location.href='/course/picture?cs_id='+data.result.cs_id;
                        }
                        }
                    })
                }
            })
        }
    })

})