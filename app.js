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
