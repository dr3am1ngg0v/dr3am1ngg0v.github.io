// Mobile menu toggle
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Image slider for about section
const sliderContainer = document.querySelector('.about-image .slider');
const imagePaths = [
    './src/images/about-image/eldenring.webp',
    './src/images/about-image/portal2.avif',
    './src/images/about-image/minecraft.jpg',
    './src/images/about-image/godofwar.jpg',
    './src/images/about-image/crabik.webp'
];

// For testing with placeholder images (remove in production)
const placeholderPaths = [
    '/api/placeholder/600/400?text=Image 1',
    '/api/placeholder/600/400?text=Image 2',
    '/api/placeholder/600/400?text=Image 3',
    '/api/placeholder/600/400?text=Image 4',
    '/api/placeholder/600/400?text=Image 5'
];

// Create image elements
imagePaths.forEach((path, index) => {
    const img = document.createElement('img');
    img.classList.add('slider-img');
    
    // Use placeholder images for development/preview
    img.src = placeholderPaths[index];
    
    // In production, uncomment the line below to use actual images
    img.src = path;
    
    img.alt = `KEKW Circle Game Event ${index + 1}`;
    
    // Make the first image active initially
    if (index === 0) {
        img.classList.add('active');
    }
    
    sliderContainer.appendChild(img);
});

// Function to rotate images
let currentImageIndex = 0;
const sliderImages = document.querySelectorAll('.slider-img');

function rotateImages() {
    // Remove active class from current image
    sliderImages[currentImageIndex].classList.remove('active');
    
    // Increment index and loop back if necessary
    currentImageIndex = (currentImageIndex + 1) % sliderImages.length;
    
    // Add active class to new current image
    sliderImages[currentImageIndex].classList.add('active');
}

// Start the image rotation
setInterval(rotateImages, 3000);

// Floating KEKW images
function createFloatingKEKW() {
    const body = document.querySelector('body');
    const kekw = document.createElement('img');
    kekw.classList.add('floating-kekw');
    kekw.src = './src/images/animated/image.png';
    
    // For development/preview, you can use a placeholder
    // Comment this out when using the actual images
    kekw.src = '/api/placeholder/50/50?text=KEKW';
    
    kekw.alt = 'KEKW';
    
    // Random position, size and rotation
    const size = Math.random() * 30 + 20;
    const posX = Math.random() * window.innerWidth;
    const duration = Math.random() * 10 + 5;
    const rotation = Math.random() * 360;
    
    kekw.style.width = `${size}px`;
    kekw.style.height = `${size}px`;
    kekw.style.left = `${posX}px`;
    kekw.style.bottom = '-20px';
    kekw.style.animation = `floatKEKW ${duration}s linear forwards`;
    kekw.style.transform = `rotate(${rotation}deg)`;
    
    body.appendChild(kekw);
    
    // Remove element after animation completes
    setTimeout(() => {
        body.removeChild(kekw);
    }, duration * 1000);
}

// Create floating KEKW images periodically
setInterval(createFloatingKEKW, 3000);

// Scroll animation for sections
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('appear');
        }
    });
}, observerOptions);

document.querySelectorAll('.about-text, .about-image, .squad-content, .squad-card').forEach(el => {
    observer.observe(el);
});