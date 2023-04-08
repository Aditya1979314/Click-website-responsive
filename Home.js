const btnNavEl = document.querySelector(".Btn-mobile-nav");
const nav = document.querySelector(".main-nav");

btnNavEl.addEventListener("click",function(){
    nav.classList.toggle("nav-open");
})