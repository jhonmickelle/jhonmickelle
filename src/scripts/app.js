let work_description = document.querySelectorAll(".j-work__description");

work_description.forEach(descItem => {
    descItem.addEventListener('mouseenter', e => {
        descItem.parentElement.children[0].style.top = "-40%"
    })
    descItem.addEventListener('mouseleave', e => {
        descItem.parentElement.children[0].style.top = "-20%"
    })
});