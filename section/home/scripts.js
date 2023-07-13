// function to show high description
var buttonShowCards = document.getElementById("btn-know-more");

buttonShowCards.addEventListener("click", function(){
    document.querySelector(".cards-dev").classList.toggle("show-cards");
    document.querySelector(".whoami").classList.toggle("showHighDescription");
    document.querySelector(".projects-section").classList.toggle("showProjectSection");
    document.querySelector(".contact-section").classList.toggle("showContactSection");
})