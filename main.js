const slides = document.getElementsByClassName("carousel-item")
const prevBtn = document.getElementById("carousel-button-prev")
const nextBtn = document.getElementById("carousel-button-next")


let slidePosition = 0
const totalSlides = slides.length

function hideAllSlides(){
    for (let slide of slides){
        slide.classList.remove("carousel-item-visible")
        slide.classList.add("carousel-item-hidden")
    }
}
prevBtn.addEventListener("click", function moveToPrevSlide() {

})

nextBtn.addEventListener("click", function moveToNextSlide() {
    hideAllSlides()
    if (slidePosition === totalSlides -1){
        slidePosition = 0
    }else{
        slidePosition++
    }
    slides[slidePosition].classList.add("carousel-item-visible")
    
})

prevBtn.addEventListener("click", function moveToPrevSlide(){
    hideAllSlides()
    if (slidePosition === 0){
        slidePosition = totalSlides - 1
    }else{
        slidePosition--
    }
    slides[slidePosition].classList.add("carousel-item-visible")
})