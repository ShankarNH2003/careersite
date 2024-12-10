// // Background Animation (Dynamic Bubbles)
// const heroBg = document.querySelector('.hero-bg');

// function createBubble() {
//   const bubble = document.createElement('div');
//   bubble.classList.add('bubble');
//   bubble.style.left = Math.random() * 100 + 'vw';
//   bubble.style.animationDuration = Math.random() * 3 + 2 + 's';
//   heroBg.appendChild(bubble);

//   setTimeout(() => {
//     bubble.remove();
//   }, 5000);
// }

// setInterval(createBubble, 300);

// // Form Submission (Send Email)
// document.querySelector('.contact-form').addEventListener('submit', (e) => {
//   e.preventDefault();
  
//   const form = e.target;
//   const formData = new FormData(form);

//   fetch('https://formspree.io/f/yourFormID', {
//     method: 'POST',
//     body: formData,
//     headers: {
//       'Accept': 'application/json',
//     },
//   })
//     .then((response) => {
//       if (response.ok) {
//         alert('Thank you for contacting us! We will get back to you soon.');
//         form.reset();
//       } else {
//         alert('Something went wrong. Please try again.');
//       }
//     })
//     .catch(() => {
//       alert('Error connecting to the server.');
//     });
// });



function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  const profileSection = document.getElementById("profileSection");

  // Toggle visibility of nav-links and profile section
  navLinks.classList.toggle("active");
  profileSection.classList.toggle("active");
}

// Image Slider functionality
let currentIndex = 0;
const slides = document.querySelectorAll(".slides img");
const totalSlides = slides.length;

function showSlide() {
    const offset = -currentIndex * 100;
    document.querySelector(".slides").style.transform = `translateX(${offset}%)`;
}


// sliding images
function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide();
}

// Auto slide every 3 seconds
setInterval(nextSlide, 3000);

// Add next/prev navigation buttons
const nextButton = document.createElement("button");
nextButton.innerText = "Next";
nextButton.classList.add("slider-button");
nextButton.onclick = nextSlide;

const prevButton = document.createElement("button");
prevButton.innerText = "Prev";
prevButton.classList.add("slider-button");
prevButton.onclick = prevSlide;

document.querySelector(".image-slider").appendChild(nextButton);
document.querySelector(".image-slider").appendChild(prevButton);

// Initial display
showSlide();
