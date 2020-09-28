var deg = 6;

var hr = document.querySelector('#hr');

var mn = document.querySelector('#mn');

var sc = document.querySelector('#sc');

var hour = document.querySelector('#hour');

var min = document.querySelector('#min');

var sec = document.querySelector('#sec');

var ampm = document.querySelector('#ampm');

setInterval(() => {

    var day = new Date();

    var hh = day.getHours() * 30;

    var mm = day.getMinutes() * deg;

    var ss = day.getSeconds() * deg;

    var h = day.getHours();

    var m = day.getMinutes();

    var s = day.getSeconds();

    var amp = "AM";

    hr.style.transform = `rotateZ(${(hh) + (mm * (1/12))}deg)`;

    mn.style.transform = `rotateZ(${(mm)  + (ss / 60)}deg)`;

    sc.style.transform = `rotateZ(${ss}deg)`;

    

    // Single to double

    h = (h < 10) ? "0" + h : h;

    m = (m < 10) ? "0" + m : m;

    s = (s < 10) ? "0" + s : s;

    // AM/PM

    amp = (h >= 12) ? "PM" : "AM";

    h = h % 12;

    h = h ? h : 12;

    hour.innerHTML = h+':';

    min.innerHTML = m+':';

    sec.innerHTML = s+'&nbsp;';

    ampm.innerHTML = amp;

})

function toggle(){

    var theme = document.getElementById("bd").classList;

 if (theme.contains("light")) {

    theme.remove("light");

    document.getElementById("tgbtn").innerHTML = '<i class="fas fa-circle"></i>&nbsp;&nbsp;&nbsp;Light Mode';

 } else {

    theme.add("light");

    document.getElementById("tgbtn").innerHTML = '<i class="fas fa-circle"></i>&nbsp;&nbsp;&nbsp;Dark Mode';

 }

}
