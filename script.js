function myTime() {
  const d = new Date();
  let h=d.getHours();
  let m=d.getMinutes();
  let s=d.getSeconds();
  document.getElementById("min").innerHTML=m;
  document.getElementById("sec").innerHTML=s;
  if (m<10){
    document.getElementById("min").innerHTML = "0" + m;
  }
  if (s<10){
    document.getElementById("sec").innerHTML = "0" + s;
  }  
  if (d.getHours()>11){
    document.getElementById("ampm").innerHTML = "PM"
  }
  if (h>12){
    document.getElementById("hr").innerHTML = "0" + (d.getHours()-12);
  }else if(h==12){
    document.getElementById("hr").innerHTML = h;
  }else if (h<10){
    document.getElementById("hr").innerHTML = "0" + h;
  } 
}
setInterval(myTime,1000)
