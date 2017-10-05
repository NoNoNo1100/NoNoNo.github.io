/**
 * Created by Administrator on 2017/10/5.
 */
define(['jquery'],function($){
    $(document).ajaxStart(function(){
        $('.overlay').show();
    });
    $(document).ajaxStop(function(){
      setTimeout(function(){
          $('.overlay').hide();
      },500);
    });
})