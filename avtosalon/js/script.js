const menu = document.getElementById("right-top")
const navbar = document.getElementById("center-top")

navbar.style.top = '-250px'

menu.onclick = function(){
    if(navbar.style.top == "-250px"){
        navbar.style.top = "0"
    }
    else{
        navbar.style.top = "-250px"
    }
}