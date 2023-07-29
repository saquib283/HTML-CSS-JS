const togglebutton=document.getElementById('nav-toggle');
const navlinks=document.getElementById('nav-links');

togglebutton.addEventListener('click',()=>{
    navlinks.classList.toggle('active');
})