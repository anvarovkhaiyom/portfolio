const menu = document.getElementById("menu")
const bar = document.getElementById("bar")

bar.style.right = '-400px'

menu.onclick = function(){
    if(bar.style.right == "-400px"){
        bar.style.right = "0"
    }
    else{
        bar.style.right = "-400px"
    }
}