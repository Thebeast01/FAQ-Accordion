const accordions = document.querySelectorAll('.accordion'); //This will give all the element into and array



// not using for each loop

accordions.forEach(accordion => {
    const plusIcon = accordion.querySelector('.icon');
    const minusIcon = accordion.querySelector('.icon1');
    const answer = accordion.querySelector(".answer");

    accordion.addEventListener("click", ()=> {
            plusIcon.classList.toggle('hidden')
            minusIcon.classList.toggle("hidden")
            if(minusIcon.classList.contains('hidden')){
                answer.style.maxHeight = null;
            }
            else {
                answer.style.maxHeight = answer.scrollHeight + 'px'
            }
    })
})