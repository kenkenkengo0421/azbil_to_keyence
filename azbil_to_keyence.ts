
var az_p :number = 0;
var az_i :number = 0;
var az_d :number = 0;
var key_p :number = 0;
var key_i :number = 0;
var key_d :number = 0;
var pv_temp_range :number = 0;
var mv_range :number = 0;

key_p = Math.round((mv_range * 100000) / (pv_temp_range * az_p));

if (az_i == 0) {
  key_i = 30001;
}else{
  key_i = Math.round(az_i * 10); 
}

key_d = Math.round(az_d * 100);

/*console.log("P:" + key_p + ", " + "I:" + key_i + ", " + "D:" + ", " + key_d) テスト用*/
