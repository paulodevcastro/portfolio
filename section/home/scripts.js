var buttonShowCards = document.getElementById("btn-know-more");

buttonShowCards.addEventListener("click", function(){
    document.querySelector(".cards-dev").classList.toggle("show-cards");
})

buttonShowCards.addEventListener("click", function(){
    document.querySelector(".whoami").classList.toggle("showHighDescription");
})
