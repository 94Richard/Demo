/*
风象WebApp中间件
Author:cunjing
Date:20180719
*/

(function () {
    function Fx(opts) {
        this.loginUrl = opts.loginUrl;
        this.callback = opts.callback;
        this.init();
    }
    Fx.prototype = {
        //初始化
        init: function() {
            //预留
        },
        //展示消息
        showMsg: function (msg) {
            //后期有空再优化Msg窗体
            alert(msg);
        },
        //验证Api结果
        checkApiResult: function (result) {
            if (result.status == 0) {
                return true;
            }else if (result.status == 99) {
                this.showMsg(result.msg);
                window.location.href = this.loginUrl;
            } else if (result.status < 0) {
                this.showMsg(result.msg);
            }
            return false;
        }
    };
    window.Fx = Fx;
})();

jQuery.extend({
    "Fx": function () {
        return new window.Fx({ loginUrl: $.FxUrl().LoginUrl });
    },
    "FxUrl": function () {
        return new window.FxUrl();
    },
    "get_fx": function (url, arg, successFn) {
        ///<summary>
        /// GET方式-->[url:请求地址|arg:请求参数（JSON对象）|successFn:操作成功，回调函数]-->return JSON对象
        ///</summary>
		$.ajax({
            type: 'GET',
            url: url,
            headers:{"uid":localStorage.getItem("uid"),"token":localStorage.getItem("token")},
            data:arg,
            success: function(result){
				if (!$.Fx().checkApiResult(JSON.parse(result))) return;
                if (successFn) {
                    if (Object.prototype.toString.call(successFn) === "[object Function]") {
                        successFn(JSON.parse(result));
                    } else {
                        console.log("post_fx-->successFn is not a function");
                    }
                }
            },
            error: function(xhr, type){
                alert('请求失败');
            }
		});
        /*$.getJSON(url,
            arg,
            function (result) {
                if (!$.Fx().checkApiResult(result)) return;
                if (successFn) {
                    if (Object.prototype.toString.call(successFn) === "[object Function]") {
                        successFn(result);
                    } else {
                        console.log("get_fx-->successFn is not a function");
                    }
                }
            });*/
    },
    "post_fx": function(url, arg, successFn) {
        ///<summary>
        /// POST方式-->[url:请求地址|arg:请求参数（JSON对象）|successFn:操作成功，回调函数]-->return JSON对象
        ///</summary>
		$.ajax({
            type: 'POST',
            url: url,
            headers:{"uid":localStorage.getItem("uid"),"token":localStorage.getItem("token")},
            data:arg,

            success: function(result){
				if (!$.Fx().checkApiResult(JSON.parse(result))) return;
                if (successFn) {
                    if (Object.prototype.toString.call(successFn) === "[object Function]") {
                        successFn(JSON.parse(result));
                    } else {
                        console.log("post_fx-->successFn is not a function");
                    }
                }
            },
            error: function(xhr, type){
                alert('请求失败');
            }
		});
        /*$.post(url,
            arg,
            function (result) {
                if (!$.Fx().checkApiResult(JSON.parse(result))) return;
                if (successFn) {
                    if (Object.prototype.toString.call(successFn) === "[object Function]") {
                        successFn(JSON.parse(result));
                    } else {
                        console.log("post_fx-->successFn is not a function");
                    }
                }
            });*/
    },
    "get_cross_domain_fx": function (url, arg, successFn) {
        ///<summary>
        /// GET方式-->[url:请求地址|arg:请求参数（JSON对象）|successFn:操作成功，回调函数]-->return JSON对象
        ///</summary>
        $.getJSON(url + "?callback=?",
            arg,
            function (result) {
                if (!$.Fx().checkApiResult(result)) return;
                if (successFn) {
                    if (Object.prototype.toString.call(successFn) === "[object Function]") {
                        successFn(result);
                    } else {
                        console.log("get_cross_domain-->successFn is not a function");
                    }
                }
            });
    }
});
