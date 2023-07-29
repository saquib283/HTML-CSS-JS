const txtara=document.getElementById("textarea");
const total=document.getElementById("total-counter");
const remaining=document.getElementById("remaining-counter");


function updateCounter(){
    total.innerText=txtara.value.length;
    remaining.innerText=txtara.getAttribute("maxLength") - txtara.value.length;
}
txtara.addEventListener("input",()=>{
    updateCounter()
});

