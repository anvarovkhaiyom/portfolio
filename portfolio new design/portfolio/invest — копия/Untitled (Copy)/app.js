const menu = document.getElementById("menu")
const navbar = document.getElementById("sidenav")

navbar.style.right = '-250px'

menu.onclick = function(){
    if(navbar.style.right == "-250px"){
        navbar.style.right = "0"
    }
    else{
        navbar.style.right = "-250px"
    }
}