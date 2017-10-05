/** * Created by Administrator on 2017/9/26.
 */
define(['jquery','template','util','uploadify','jcrop','form'],function($,template,util){

util.setMenu('/course/add');
var csId=util.qs('cs_id');
    $.ajax({
        type:'get',
        url:'/api/course/picture',
        data:{cs_id:csId},
        dataType:'json',
        success:function(data){
          var html=template('pictureTpl',data.result);
            $('#pictureInfo').html(html);
            var nowcrop=null;
            var img=$('.preview img').eq(0);
            $('#myfile').uploadify({
                width:80,
                height:'auto',
                itemTemplate:'<span></span>',
                buttonText:'选择图片',
                buttonClass:'btn btn-success btn-sm',
                swf:'/public/assets/uploadify/uploadify.swf',
                uploader:'/api/uploader/cover',
                fileObjName:'cs_cover_original',
                formData:{cs_id:csId},
                onUploadSuccess:function(a,b,c){
                   var obj=JSON.parse(b.trim());
                    $('.preview img').attr('src',obj.result.path);
                  /*  上传成功后出现裁切框*/
                    cropImg();
                    $('#cropBtn').text('保存图片').attr('data-flag',true);
                }
            })

            //裁切
            $('#cropBtn').click(function(){
                var flag=$(this).attr('data-flag');
                if(flag){
                    $('#cropForm').ajaxSubmit({
                        type:'post',
                        url:'/api/course/update/picture',
                        data:{cs_id:csId},
                        dataType:'json',
                        success:function(data){
                            if(data.code==200){
                                location.href='/course/lesson?cs_id='+data.result.cs_id;
                            }

                        }
                    })
                }else{
                    $(this).text('保存图片').attr('data-flag',true);
                    cropImg();
                }
            });
           /* 封装函数*/

            function cropImg(){
                img.Jcrop({
                   /* setSelect:[100,100,300,100],*/
                    aspectRatio:2
                },function(){
                    nowcrop&&nowcrop.destroy();
                    nowcrop=this;
                    var width=this.ui.stage.width;
                    var height=this.ui.stage.height;
                    var x=0;
                    var y=(height-width/2)/2;
                    var w=width;
                    var h=width/2;
                 /*   初始化默认选区*/
                    var aInput=$('#cropform').find('input');
                    aInput.eq(0).val(x);
                    aInput.eq(1).val(y);
                    aInput.eq(2).val(w);
                    aInput.eq(3).val(h);
                    this.newSelection();
                    this.setSelect([x,y,w,h]);
                    this.initComponent('Thumbnailer',{
                        width:240,
                        height:120,
                        mythumb:'.thumb'
                    });
                    $('.jcrop-thumb').css({
                        position:'absolute',
                        top:0,
                        left:0
                    });
              /*   选区*/
                    img.parent().on('cropstart cropmove cropend',function(a,b,c){
                        var aInput=$('#cropform').find('input');
                        aInput.eq(0).val(c.x);
                        aInput.eq(1).val(c.y);
                        aInput.eq(2).val(c.w);
                        aInput.eq(3).val(c.h);
                    })
                });
            }
        }
    })
})