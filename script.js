// ================For navigation=============

const hamburger = document.getElementById('nav-portfolio-hamburger');
const navLinks = document.getElementById('nav-portfolio-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});




document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".social-img"); // Select all images
  let currentIndex = 0;

  const showImagesSequentially = () => {
    if (currentIndex < images.length) {
      // Add "visible" class to the next image
      images[currentIndex].classList.add("visible");
      currentIndex++;

      // Continue showing the next image after 1 second
      setTimeout(showImagesSequentially, 1000);
    }
  };

  // Start the sequence
  showImagesSequentially();
});
/////////////////////////////////////

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.skill-level').forEach(skill => {
      const level = skill.getAttribute('data-level');
      skill.style.width = `${level}%`;
    });
  });
