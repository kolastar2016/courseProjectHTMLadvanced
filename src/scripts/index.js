console.log('test');

document.addEventListener("DOMContentLoaded", function () {
    const carouselContainer = document.querySelector('.carousel-container');
    const carouselImg = document.querySelector('.carousel-img img');
    const leftButton = document.querySelector('.carousel-left');
    const rightButton = document.querySelector('.carousel-right');

    const images = [
        'assets/images/main-pizza.jpg',
        'assets/images/main-icon.jpg',
        'assets/images/icon-brouser.jpg'
    ];
    let currentIndex = 0;
    let interval;

    function changeImage(index) {
        carouselImg.src = images[index];
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        changeImage(currentIndex);
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        changeImage(currentIndex);
    }

    function startAutoRotate() {
        interval = setInterval(nextImage, 2000); 
    }

    function stopAutoRotate() {
        clearInterval(interval);
    }
    
    rightButton.addEventListener('click', function () {
        stopAutoRotate();
        nextImage();
        startAutoRotate();
    });

    leftButton.addEventListener('click', function () {
        stopAutoRotate();
        prevImage();
        startAutoRotate();
    });

    changeImage(currentIndex);
    startAutoRotate();
});