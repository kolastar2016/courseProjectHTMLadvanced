
document.addEventListener("DOMContentLoaded", function () {
const carouselContainer = document.querySelector('.carousel-container');
const carouselImg = document.querySelector('.carousel-img img');
const leftButton = document.querySelector('.carousel-left');
const rightButton = document.querySelector('.carousel-right');

const images = [
    'assets/images/main-pizza.jpg',
    'assets/images/pizza-second.png',
    'assets/images/pizza-third.png',
    'assets/images/pizza-fourth.png',
    'assets/images/pizza-fifth.png',
    'assets/images/pizza-sixth.png'
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



const menuGrid = document.getElementById("menuPizzanio");
const prevPage = document.getElementById("prevPage");
const nextPage = document.getElementById("nextPage");
const currentPage = document.getElementById("currentPage");
const totalPages = document.getElementById("totalPages");

const pizzas = [
    { name: "Lorem ipsum 1", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et", btn: "Lorem ipsum", price: "120 грн", img: "main-pizza.jpg" },
    { name: "Lorem ipsum 2", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et", btn: "Lorem ipsum", price: "120 грн", img: "pizza-second.png" },
    { name: "Lorem ipsum 3", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et", btn: "Lorem ipsum", price: "120 грн", img: "pizza-sixth.png" },
    { name: "Lorem ipsum 4", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et", btn: "Lorem ipsum", price: "120 грн", img: "pizza-fifth.png" },
    { name: "Lorem ipsum 5", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et", btn: "Lorem ipsum", price: "120 грн", img: "pizza-second.png" },
    { name: "Lorem ipsum 6", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et", btn: "Lorem ipsum", price: "120 грн", img: "main-pizza.jpg" },
    { name: "Lorem ipsum 7", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et", btn: "Lorem ipsum", price: "120 грн", img: "pizza-fourth.png" },
    { name: "Lorem ipsum 8", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et", btn: "Lorem ipsum", price: "120 грн", img: "pizza-sixth.png" },
    { name: "Lorem ipsum 9", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et", btn: "Lorem ipsum", price: "120 грн", img: "pizza-fifth.png" },
    { name: "Lorem ipsum 10", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et", btn: "Lorem ipsum", price: "120 грн", img: "main-pizza.jpg" },
    { name: "Lorem ipsum 11", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et", btn: "Lorem ipsum", price: "120 грн", img: "pizza-third.png" },
    { name: "Lorem ipsum 12", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et", btn: "Lorem ipsum", price: "120 грн", img: "main-pizza.jpg" },
    { name: "Lorem ipsum 13", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et", btn: "Lorem ipsum", price: "120 грн", img: "pizza-fourth.png" },
    { name: "Lorem ipsum 14", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et", btn: "Lorem ipsum", price: "120 грн", img: "pizza-second.png" },
    { name: "Lorem ipsum 15", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et", btn: "Lorem ipsum", price: "120 грн", img: "pizza-sixth.png" },
    { name: "Lorem ipsum 16", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et", btn: "Lorem ipsum", price: "120 грн", img: "pizza-fifth.png" },
    { name: "Lorem ipsum 17", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et", btn: "Lorem ipsum", price: "120 грн", img: "pizza-third.png" },
    { name: "Lorem ipsum 18", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et", btn: "Lorem ipsum", price: "120 грн", img: "main-pizza.jpg" },
    { name: "Lorem ipsum 19", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et", btn: "Lorem ipsum", price: "120 грн", img: "pizza-fourth.png" },
    { name: "Lorem ipsum 20", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et", btn: "Lorem ipsum", price: "120 грн", img: "pizza-second.png" },
    { name: "Lorem ipsum 21", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et", btn: "Lorem ipsum", price: "120 грн", img: "main-pizza.jpg" },
    { name: "Lorem ipsum 22", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et", btn: "Lorem ipsum", price: "120 грн", img: "pizza-fifth.png" },
    { name: "Lorem ipsum 23", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et", btn: "Lorem ipsum", price: "120 грн", img: "pizza-fourth.png" },
    { name: "Lorem ipsum 24", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et", btn: "Lorem ipsum", price: "120 грн", img: "main-pizza.jpg" },
    { name: "Lorem ipsum 25", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et", btn: "Lorem ipsum", price: "120 грн", img: "pizza-third.png" },
    { name: "Lorem ipsum 26", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et", btn: "Lorem ipsum", price: "120 грн", img: "pizza-sixth.png" },
    { name: "Lorem ipsum 27", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et", btn: "Lorem ipsum", price: "120 грн", img: "pizza-second.png" },
];

const itemsPerPage = 9;
let currentPageNumber = 1;
const totalPageCount = Math.ceil(pizzas.length / itemsPerPage);

totalPages.textContent = totalPageCount;

function renderMenuPage(pageNumber) {
    menuGrid.innerHTML = "";

    const start = (pageNumber - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const pageItems = pizzas.slice(start, end);

    pageItems.forEach((pizza) => {
        const pizzaCard = document.createElement("div");
        pizzaCard.className = "pizza-card";
        pizzaCard.innerHTML = `
            <img src="../assets/images/${pizza.img}" alt="${pizza.name}" class="pizza-img">
            <h3>${pizza.name}</h3>
            <p>${pizza.description}</p>
            <span class="price">${pizza.price}</span>
            <button class="button">${pizza.btn}</button>
        `;
        menuGrid.appendChild(pizzaCard);
    });

    currentPage.textContent = pageNumber;
}

prevPage.addEventListener("click", () => {
    if (currentPageNumber > 1) {
        currentPageNumber--;
        renderMenuPage(currentPageNumber);
    }
});

nextPage.addEventListener("click", () => {
    if (currentPageNumber < totalPageCount) {
        currentPageNumber++;
        renderMenuPage(currentPageNumber);
    }
});

renderMenuPage(currentPageNumber);



const form = document.getElementById('loremForm');
const modal = document.getElementById('modal');
const closeButton = document.querySelector('.close-button');

form.addEventListener('submit', function (event) {
  event.preventDefault(); 

  if (form.checkValidity()) {
    modal.style.display = 'flex';

    form.reset();
  }
});

closeButton.addEventListener('click', function () {
  modal.style.display = 'none';
});

window.addEventListener('click', function (event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});