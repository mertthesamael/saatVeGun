'use strict' ;
let _name = prompt("İsminizi Girin")


document.querySelector("#welcome").innerHTML = `Merhaba ! <i> <span style="color:#40DFFF;">${_name}</i></span> <br>
Şu anda saat `

function showTime(){
    let date = new Date();
    let h = date.getHours(); // 0 - 23
    let m = date.getMinutes(); // 0 - 59
    let s = date.getSeconds(); // 0 - 59
    let d = date.getDay()//Monday - Sunday
    let session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    switch (d){
        case 1: d = " Pazartesi" ;
        break;
        case 2: d = " Salı";
        break;
        case 3: d = " Çarşamba";
        break;
        case 4: d = " Perşembe";
        break;
        case 5: d = " Cuma";
        break;
        case 6: d = " Cumartesi"
        break;
        case 7: d = " Pazar"
        break;
    }
     
    
    var time = h + ":" + m + ":" + s +  " " + session;
    document.getElementById("title").innerText = time;
    document.getElementById("title").textContent = time;
    document.getElementById("title").innerText += d
    setTimeout(showTime, 1000);
    
}

showTime();