var open = document.querySelector(".open");
var close = document.querySelector(".close");
var ul = document.querySelector("ul");


open.addEventListener("click", ()=>{
    ul.style.display = "block";
})

close.addEventListener("click", ()=>{
    ul.style.display = "none";
})