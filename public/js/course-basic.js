/**
 * Created by Administrator on 2017/9/25.
 */
define(['jquery','template','util','ckeditor'],function($,template,util,CKEDITOR){
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
                console.log(123)
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
        }
    })
})