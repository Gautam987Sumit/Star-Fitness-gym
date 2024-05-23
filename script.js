// const video = document.getElementById('bgVideo');

// window.addEventListener('scroll', () => {
//     const scrollPosition = window.scrollY;
//     if (scrollPosition > 100) {
//         video.pause();
//     } else {
//         video.play();
//     }
// });

//     // Get the button element by its ID
// const button = document.getElementById('JOIN_US');

//         // Add a click event listener to the button
// button.addEventListener('click', openformS() {

//             // You can add your desired functionality here
// });

// document.querySelector("#JOIN_US").addEventListener("click",function(){
//     document.body.classList.add("active-overlay");
// });

// document.querySelector(".overlay .close").addEventListener("click",function(){
//     document.body.classList.remove("active-overlay");
// });

// ====================classes=============

function changeImage() {
    var currentImg = document.querySelector('.slideshow img:not([style*="display: none"])');
    var nextImg = currentImg.nextElementSibling || document.querySelector('.slideshow img:first-child');
    currentImg.style.display = 'none';
    nextImg.style.display = 'block';
}

// Change image every 3 seconds
setInterval(changeImage, 3000);

// ======================classes slideshow=============

let slideIndex = 0;

function showSlides() {
    const slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
}
slideIndex++;
if (slideIndex > slides.length) {slideIndex = 1}
slides[slideIndex - 1].style.display = "block";
setTimeout(showSlides, 2000); // Change image every 2 seconds
}

showSlides();



const mainmenu = document.querySelector('.mainmenu');
const closemenu = document.querySelector('.closemenu');
const openmenu = document.querySelector('.openmenu');

openmenu.addEventListener('click', show);
closemenu.addEventListener('click', close);

function show() {
    mainmenu.style.display = 'flex';
    mainmenu.style.top = '0%';
}

function close() {
    mainmenu.style.top = '-100%';
}
