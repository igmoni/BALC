function toggleMenu() {
    const hamburger = document.querySelector('.hamburger');
    hamburger.classList.toggle('open');
  }

const slides = document.querySelector(".image-slider")
const slideCount = document.querySelectorAll(".slide").length
let currentSlide = 0

document.querySelector(".next").addEventListener("click", ()=> {
    currentSlide = (currentSlide + 1)% slideCount
    slides.style.transform = `translateX(-${currentSlide * 100}%)`
})

document.querySelector(".prev").addEventListener("click", ()=> {
    currentSlide = (currentSlide - 1) % slideCount
    slides.style.transform = `translateX(-${currentSlide * 100}%)`
})

setInterval(()=> {
    currentSlide = (currentSlide + 1) % slideCount
    slides.style.transform = `translateX(-${currentSlide*100}%)`
}, 3000)

