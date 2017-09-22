/**
 * Created by Administrator on 2017/9/20.
 */
define(['jquery','template'],function($,template){
    $.ajax({
        type:'get',
        url:'/api/teacher',
        dataType:'json',
        success:function(data){
            var html=template('teacherTpl',{list:data.result});
            $("#teacherInfo").html(html);

            $('.eod').click(function(){
                var that=this;
                var td=$(this).closest('td');
                var tcid=td.attr('data-tcId');
                var  status=td.attr('data-status');
                $.ajax({
                    type:'post',
                    url:'/api/teacher/handle',
                    data:{tc_id:tcid,tc_status:status},
                    dataType:'json',
                    success:function(data){
                      if(data.code==200){
                          console.log(data);
                          td.attr('data-status',data.result.tc_status);
                          if(data.result.tc_status==0){
                              $(that).text('注销');
                          }else{
                              $(that).text('启用');
                          }
                      }
                    }
                })

            })
        }
    })
});