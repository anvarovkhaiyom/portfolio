const menu = document.getElementById("menu")
const navbar = document.getElementById("sidenav")

navbar.style.right = '-250px'

menu.onclick = function(){
    if(navbar.style.right == "-250px"){
        navbar.style.right = "0"
    }
    else{
        navbar.style.right = "-250px";
    }
}
$(".answer-1").hide();
$(".tarif-question").click(function(){
    $(".answer-1").fadeToggle();
})
$(".answer-2").hide();
$(".tarif-question-1").click(function(){
    $(".answer-2").fadeToggle();
})
$(".answer-3").hide();
$(".tarif-question-2").click(function(){
    $(".answer-3").fadeToggle();
})
$(".answer-4").hide();
$(".tarif-question-3").click(function(){
    $(".answer-4").fadeToggle();
})