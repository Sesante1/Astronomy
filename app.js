// const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//             entry.target.classList.add('show');
//         } else {
//             entry.target.classList.remove('show');
//         }
//     });
// });

// const hiddenElements = document.querySelector('.observatory');
// hiddenElements.forEach((el) => observer.observe(el));
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');  
        } else {
            entry.target.classList.remove('show'); 
        }
    });
});

const observatoryElement = document.querySelector('.definition');
observer.observe(observatoryElement);

const titleElement = document.querySelector('#title');
observer.observe(titleElement);

const history = document.querySelector('.history-description');
observer.observe(history);

const discovery = document.querySelector('.discoveries');
observer.observe(discovery);

const discriptions = document.querySelector('.description');
observer.observe(discriptions);

// SLIDER

let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let slider = document.querySelector('.slider');

next.addEventListener('click', function() {
    let slides = document.querySelectorAll('.slides');
    slider.appendChild(slides[0]);
})

prev.addEventListener('click', function() {
    let slides = document.querySelectorAll('.slides');
    slider.prepend(slides[slides.length - 1]);
})

//scroll to elements

function scrollToElement(elementSelector, instance = 0) {
    const elements = document.querySelectorAll(elementSelector);

    if (elements.length > instance){
        elements[instance].scrollIntoView({ behavior: 'smooth'});
    }
}

const link1 = document.getElementById("intro");
const link2 = document.getElementById("history");
const link3 = document.getElementById("news");
const link4 = document.getElementById("solar");
const link5 = document.getElementById("tech");

link1.addEventListener('click', () => {
    scrollToElement('.container2');
});

link2.addEventListener('click', () => {
    scrollToElement('.container3');
});

link3.addEventListener('click', () => {
    scrollToElement('.container-4');
});

link4.addEventListener('click', () => {
    scrollToElement('.container-5');
});

link5.addEventListener('click', () => {
    scrollToElement('.container-6');
});