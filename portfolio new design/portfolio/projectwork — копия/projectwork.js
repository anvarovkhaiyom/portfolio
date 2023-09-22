const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

navbar.style.left = "-700px";
menuBtn.onclick = function() {
    if(navbar.style.left == "-700px"){
        navbar.style.left = "0";
    }
    else {
        navbar.style.left = "-700px";
    }
}