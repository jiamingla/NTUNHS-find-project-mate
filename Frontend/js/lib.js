{
    var pMonth = [
        "一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"
    ]

    var pWeek1 = [
        "日", "一", "二", "三", "四", "五", "六"
    ]
    var pWeek2 = [
        "星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"
    ]
    
    $.getDatas = function (lib_datas, lib_function) {
        var lib_deferred = $.Deferred();
        $.ajax({
            async: lib_datas.async, // Default True, False=>非同步
            url: lib_datas.url,
            method: "POST",
            dataType: "JSON",
            dataType: lib_datas.dataType,
            data: lib_datas.data,
            success: function (vres) {
                if ($.isFunction(lib_function)) {
                    if (typeof (vres) != "object") {
                        if (vres.indexOf("{") < 0) {
                            var pres = vres;
                        } else {
                            var pres = vres.substr(vres.indexOf("{"));
                        }

                        pres = $.parseJSON(pres);
                    }
                    this.useFunction = lib_function;
                    this.useFunction(pres);
                }
                lib_deferred.res = pres;
                lib_deferred.resolve();
            },
            error: function (err) {
                lxp_json = err;
                lib_deferred.resolve();
            }
        })
        return (lib_deferred);
    }
    $.randStr = function (len = 3) {
        var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        var var_size = chars.length;
        var str = "";
        for (var x = 0; x < len; x++) {
            var random_str = chars[Math.floor(Math.random() * var_size)];
            str += random_str;
        }
        return str;
    }
}