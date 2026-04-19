"use strict";
var btn = document.getElementById("btn");
btn.onclick = function () {
    var az_p = parseFloat(document.getElementById("in_az_p").value);
    var az_i = parseFloat(document.getElementById("in_az_i").value);
    var az_d = parseFloat(document.getElementById("in_az_d").value);
    var pv_temp_range = parseFloat(document.getElementById("in_pv_range").value);
    var mv_range = parseFloat(document.getElementById("in_mv_range").value);
    var key_p = 0;
    var key_i = 0;
    var key_d = 0;
    key_p = Math.round((mv_range * 100000) / (pv_temp_range * az_p));
    if (az_i == 0) {
        key_i = 30001;
    }
    else {
        key_i = Math.round(az_i * 10);
    }
    key_d = Math.round(az_d * 100);
    /*console.log("P:" + key_p + ", " + "I:" + key_i + ", " + "D:" + ", " + key_d) テスト用*/
    document.getElementById("plc_p").innerText = key_p.toString();
    document.getElementById("plc_i").innerText = key_i.toString();
    document.getElementById("plc_d").innerText = key_d.toString();
};
