const menu = document.getElementById("menu")
const navbar = document.getElementById("sidenav")

navbar.style.left = '-300px'

menu.onclick = function(){
    if(navbar.style.left == "-300px"){
        navbar.style.left = "0"
    }
    else{
        navbar.style.left = "-300px"
    }
}