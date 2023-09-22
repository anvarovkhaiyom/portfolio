// let SwitchMode = document.getElementById("SwithMode");
// SwitchMode.onclick = 
function change() {
    var theme = document.getElementById("theme")
    if(theme.getAttribute("href") == "../main/css/style.css"){
        theme.href = "../main/css/darkstyle.css"
    }
    else{
        theme.href = "../main/css/style.css"
    }
}
function time(){
    var x = document.getElementById("time")
    var d = new Date();
    var c = d.getDate();
    var mm = d.getMonth();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    m = nol(m)
    s = nol(s)
    h = nol(h)
    switch(mm){
        case 0:
            mm = ("Января");
        break;
        case 1:
            mm = ("Февраля");
        break;
        case 2:
            mm = ("Марта");
        break;
        case 3:
            mm = ("Апреля");
        break;
        case 4:
            mm = ("Мая");
        break;
        case 5:
            mm = ("Июня");
        break;
        case 6:
            mm = ("Июля");
        break;
        case 7:
            mm = ("Августа");
        break;
        case 8:
            mm = ("Сентября");
        break;
        case 9:
            mm = ("Октября");
        break;
        case 10:
            mm = ("Ноября");
        break;
        default:
            mm = ("Декабря")
        }
    x.innerHTML = c + "  " + mm + " " + h + ":" + m + ":" + s;
    setTimeout("time()", 1000)
};
time()
function nol(num){
    if(num<10){
        num  = "0" + num
    }
    return num
};
$(".none").click(function(){
    $('#main-time').hide();
    $('#none').show();
});
$(".show").click(function(){
    $('#main-time').show();
    $('#none').hide();
});
$('#header').animate({
    width: '100%',
    height: '100%',
});
ScrollReveal().reveal('#about', { delay: 620, scale: 1.2});
ScrollReveal().reveal('#about-me', { delay: 630, scale: 0.6 });
ScrollReveal().reveal('.projects-txt', { delay: 640,  scale: 1.2 });
ScrollReveal().reveal('.projects', { delay: 650, scale: 0.7 });
ScrollReveal().reveal(' #certificat', { delay: 660, scale: 0.8 });
ScrollReveal().reveal(' #footer', { delay: 670, scale: 1.3 });
ScrollReveal().reveal(' .certificat-cards', { delay: 670, scale: 0.5 });
