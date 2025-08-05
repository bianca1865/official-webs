//SLIDESHOW FOR HOME
let slideIndex = 0;
const slides = document.getElementsByClassName("slide");

function showSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000); // change every 3 seconds
}

window.onload = showSlides;

//COLOUR SELECTION FOR COLLECTION
document.querySelectorAll('.color-options').forEach(group => {
  group.querySelectorAll('.color-swatch').forEach(swatch => {
    swatch.addEventListener('click', () => {
      // Unselect all
      group.querySelectorAll('.color-swatch').forEach(s => s.classList.remove('selected'));
      // Select clicked
      swatch.classList.add('selected');
      // Set hidden input value
      group.parentElement.querySelector('.selected-color').value = swatch.dataset.color;
    });
  });
});
