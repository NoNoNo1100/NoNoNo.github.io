/**
 * Created by Administrator on 2017/9/25.
 */
define(['jquery','template','util'],function($,template,util){
    util.setMenu('/course/add');
    var csId=util.qs('cs_id');
    var flag=util.qs('flag');
    $.ajax({
        type:'get',
        url:'/api/course/basic',
        data:{cs_id:csId},
        dataType:'json',
        success:function(data){
            console.log(data)
            if(flag){
                data.result.operate='课程编辑';
            }else{
                data.result.operate='课程添加';
            }
            var html=template('basicTpl',data.result);
            $('#basicInfo').html(html);
        }
    })
})