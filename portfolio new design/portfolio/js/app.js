$('.txt').tilt({
    glare: true,
    maxGlare: .3,
    scale: 1,
    duration: 4000,
});
$('#header').animate({
    width: '100%',
    height: '100%',
})
$(".txt").animate({
    width: '50%',
})
function may(){
    var fifth = document.getElementById("name")
    var first = prompt("user name")
    if(first!=null && first!==""){
        fifth.innerHTML =  first;
    }
    else{
        alert("Вы не заполнили имя")
        fifth.innerHTML =  "user"
    }
}

 may()