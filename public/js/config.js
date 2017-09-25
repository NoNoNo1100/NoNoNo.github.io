/**
 * Created by Administrator on 2017/9/20.
 */
require.config({
    baseUrl:'/public/assets',
    paths:{
        jquery:'jquery/jquery',
        cookie:'jquery-cookie/jquery.cookie',
        template:'artTemplate/template-web',
        bootstrap:'bootstrap/js/bootstrap.min',
        common:'../js/common',
        datepicker:'bootstrap-datepicker/js/bootstrap-datepicker',
        language:'bootstrap-datepicker/locales/bootstrap-datepicker.zh-CN.min',
        validate:'validate/jquery-validate',
        uploadify:'uploadify/jquery.uploadify.min',
        form:'jquery-form/jquery.form',
        util:'../js/util',
        login:'../js/login',
        teacherlist:'../js/teacher-list',
        teacheradd:'../js/teacher-add',
        settings:'../js/settings',
        region:'jquery-region/jquery.region',
        ckeditor:'ckeditor'

    },
    shim:
    {
        bootstrap:{
            deps:['jquery']
        },
        language:{
            deps:['jquery','datepicker']
        },
        validate:{
            deps:['jquery']
        },
        uploadify:{
            deps:['jquery']
        },
        ckeditor:{
            exports:'CKEDITOR'
        }
    }

});
