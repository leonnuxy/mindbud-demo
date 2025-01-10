
const images = [
    'images/image1.jpg',
    'images/image2.jpg',
    'images/image3.jpg'
];

let currentIndex = 0;
const carouselImage = document.getElementById('carousel-image');

function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    carouselImage.src = images[currentIndex];
}

setInterval(showNextImage, 3000); // Change image every 3 seconds

document.getElementById('get-started-btn').addEventListener('click', function() {
    document.getElementById('form-section').style.display = 'block';
});

document.getElementById('get-started-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Form submitted!');
    // You can add more form submission logic here
});