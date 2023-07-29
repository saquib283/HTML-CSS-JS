const hourElm = document.getElementById("hours");
const minuteElm = document.getElementById("minutes");
const secondElm = document.getElementById("seconds");
const amPmElm = document.getElementById("ampm");

function updateClock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    let ampm="AM";


    if(h>12){
        h=h-12;
        ampm="PM";

    };
  
    

    hourElm.innerText=h;
    minuteElm.innerText=m;
    secondElm.innerText=s;
    amPmElm.innerText=ampm;


    setTimeout(()=>{
        updateClock()
    },1000)
}
updateClock();