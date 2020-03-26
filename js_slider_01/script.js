// get elements
let btnPrev = document.querySelector('#btn-prev');
let btnNext = document.querySelector('#btn-next');
let sliderImgs = document.querySelector('.slider-imgs');
let navButtons2 = document.querySelectorAll('.nav-buttons-2');

// announce events
btnPrev.addEventListener('click', prevImage);
btnNext.addEventListener('click', nextImage);

// create array with url's of images and variable with current index
let urlsOfImages = ['img/car1.jpg', 'img/car2.jpg', 'img/car3.jpg', 'img/car4.jpg', 'img/car5.jpg', 'img/car6.jpg', ];
let currentIndex = 0;

// start slider images and navButton
sliderImgs.src = urlsOfImages[currentIndex];
navButtons2[currentIndex].style.background = 'white';
navButtons2[currentIndex].style.boxShadow = '0 0 10px white';

// ---------------listeners
function prevImage() {
    // add prev url to sliderImgs (if it possible)
    if (currentIndex > 0) {
        currentIndex--;
        sliderImgs.src = urlsOfImages[currentIndex];

        // index btn corresponds to index img
        for (let i = 0; i < navButtons2.length; i++) {
            navButtons2[i].style.background = 'black';
            navButtons2[i].style.boxShadow = '0 0 10px black';
        }
        navButtons2[currentIndex].style.background = 'white';
        navButtons2[currentIndex].style.boxShadow = '0 0 10px white';

        // remove slider end indicator on BTNNEXT
        btnNext.classList.remove('end-of-slider');
    } else {
        // add slider end indicator on btnPrev
        btnPrev.classList.add('end-of-slider');
    }
}

function nextImage() {
    // add next url to sliderImgs (if it possible)
    if (currentIndex < urlsOfImages.length - 1) {
        currentIndex++;
        sliderImgs.src = urlsOfImages[currentIndex];

        // index btn corresponds to index img
        for (let i = 0; i < navButtons2.length; i++) {
            navButtons2[i].style.background = 'black';
            navButtons2[i].style.boxShadow = '0 0 10px black';
        }
        navButtons2[currentIndex].style.background = 'white';
        navButtons2[currentIndex].style.boxShadow = '0 0 10px white';

        // remove slider end indicator on BTNPREV
        btnPrev.classList.remove('end-of-slider');
    } else {
        // add slider end indicator on btnNext
        btnNext.classList.add('end-of-slider');
    }
}


// creating lower bar navigation
navButtons2.forEach((button, index) => {
    button.onclick = () => {
        // add url, equal in index to the selected button
        currentIndex = index;
        sliderImgs.src = urlsOfImages[index];

        // idex btn corresponds to index img
        for (let i = 0; i < navButtons2.length; i++) {
            navButtons2[i].style.background = 'black';
            navButtons2[i].style.boxShadow = '0 0 10px black';
        }
        button.style.background = 'white';
        button.style.boxShadow = '0 0 10px white';
    };
})