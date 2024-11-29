const icons = [...document.querySelectorAll('.icons')];
const nxtBtnTestimonial = [...document.querySelectorAll('.next')];
const preBtnTestimonial = [...document.querySelectorAll('.prev')];

icons.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtnTestimonial[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtnTestimonial[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})