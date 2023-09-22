const menu = document.getElementById("menu")
const navbar = document.getElementById("sidenav")

navbar.style.right = '-350px'

menu.onclick = function(){
    if(navbar.style.right == "-350px"){
        navbar.style.right = "0"
    }
    else{
        navbar.style.right = "-350px"
    }
}