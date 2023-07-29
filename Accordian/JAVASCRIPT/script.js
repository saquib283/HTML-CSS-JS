const accordian = document.querySelectorAll('.accordian');

accordian.forEach(Element=>{
    const icon=Element.querySelector('.icon');
    const answer=Element.querySelector('.answer');

    Element.addEventListener('click',()=>{
        icon.classList.toggle('active');
        answer.classList.toggle('active');

    })
})