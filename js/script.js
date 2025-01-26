var slideIndex = 0;
var out = showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    if (slideIndex > slides.length - 1) { slideIndex = 0 }
    if (slideIndex < 0) {
        slideIndex = slides.length - 1
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex].style.display = "block";
    dots[slideIndex].className += " active";
    timeout = setTimeout(showSlides, 4000);
    slideIndex++;
    return timeout;
}

//点击

function plusSlides(n) {
    clearTimeout(timeout)
    slideIndex = slideIndex + n - 1;
    showSlides();
}

function currentSlide(n) {
    clearTimeout(timeout)
    slideIndex = n
    showSlides();
}
