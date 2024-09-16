const cards=document.querySelectorAll(".card");
cards.forEach((card)=>{
    card.addEventListener("click",()=>{
        removeActive();
        card.classList.add("active");
        const elementId = card.getAttribute('id');
        document.getElementById('animal').innerHTML=elementId+" image is clicked ";
    });
});

function removeActive(){
    cards.forEach((card)=>{
        card.classList.remove("active");
    })
}