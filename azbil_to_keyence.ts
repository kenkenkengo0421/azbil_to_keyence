
var btn = document.getElementById("btn") as HTMLElement;
btn.onclick = function() {
  
  var az_p :number = parseFloat((document.getElementById("in_az_p") as HTMLInputElement).value);
  var az_i :number = parseFloat((document.getElementById("in_az_i") as HTMLInputElement).value);
  var az_d :number = parseFloat((document.getElementById("in_az_d") as HTMLInputElement).value);
  var pv_temp_range :number = parseFloat((document.getElementById("in_pv_range") as HTMLInputElement).value);
  var mv_range :number = parseFloat((document.getElementById("in_mv_range") as HTMLInputElement).value);
  var key_p :number = 0;
  var key_i :number = 0;
  var key_d :number = 0;

  key_p = Math.round((mv_range * 100000) / (pv_temp_range * az_p));

  if (az_i == 0) {
    key_i = 30001;
  }else{
    key_i = Math.round(az_i * 10); 
  }

  key_d = Math.round(az_d * 100);

/*console.log("P:" + key_p + ", " + "I:" + key_i + ", " + "D:" + ", " + key_d) テスト用*/

  (document.getElementById("plc_p") as HTMLElement).innerText = key_p.toString();
  (document.getElementById("plc_i") as HTMLElement).innerText = key_i.toString();
  (document.getElementById("plc_d") as HTMLElement).innerText = key_d.toString();

};
