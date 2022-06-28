const navbar = document.querySelector("nav")
const image = document.querySelector("img")
const sp = document.querySelector("span")



window.addEventListener("scroll", () => {

    if (window.scrollY > 120) {
        navbar.style.top = "0";
    } 
    else {
        navbar.style.top = "-100px";
    };

})

image.addEventListener("mouseenter", () => {

    image.style.filter = "brightness(50%)";
    
})

image.addEventListener("mouseout", () => {
    image.style.filter = "brightness(100%)";
    image.style.transform = "rotate(0deg)";
})

image.addEventListener("click", () => {

    image.style.transform = "rotate(360deg)";
    
})


sp.addEventListener("mouseenter", () => {
    sp.style.letterSpacing = "20px"
})

sp.addEventListener("mouseout", () => {
    sp.style.letterSpacing = "0px"
})









