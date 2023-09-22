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
window.onclick = function(event) {
  if (event.target == navbar) {
    navbar.style.display = "none";
  }
}
var modalBtn = document.getElementById("modalBtn");
var modal = document.getElementById("myModal");
var closeBtn = document.getElementsByClassName("close")[0];
modalBtn.onclick = function() {
  modal.style.display = "block";
}
closeBtn.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
$(document).ready(function() {
  var sliderImages = $('.catalog-card-img');
  var prevButton = $('.prev-button');
  var nextButton = $('.next-button');
  
  var imageCount = sliderImages.children().length;
  var currentIndex = 0;
  
  // Добавьте обработчики событий на кнопки
  prevButton.on('click', function() {
    showSlide(currentIndex - 1);
  });
  
  nextButton.on('click', function() {
    showSlide(currentIndex + 1);
  });
  
  // Функция для показа определенного слайда
  function showSlide(index) {
    if (index < 0) {
      index = imageCount - 1;
    } else if (index >= imageCount) {
      index = 0;
    }
    currentIndex = index;
    
    // Прокрутка к выбранному слайду
    sliderImages.scrollLeft(sliderImages.children().eq(index).position().left);
    
    //Обновление состояния кнопок
    updateButtonState();
  }
  
  // Функция для обновления состояния кнопок
  function updateButtonState() {
    prevButton.prop('disabled', currentIndex === 0);
    nextButton.prop('disabled', currentIndex === imageCount-1);
  }
  
  // Инициализация слайдера
  updateButtonState();
});
