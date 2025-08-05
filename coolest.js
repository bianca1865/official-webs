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
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.color-options').forEach(group => {
    const swatches = group.querySelectorAll('.color-swatch');
    const hiddenInput = group.closest('.product-card').querySelector('.selected-color');

    swatches.forEach(swatch => {
      swatch.addEventListener('click', () => {
        // Unselect all swatches in this group
        swatches.forEach(s => s.classList.remove('selected'));

        // Select the clicked swatch
        swatch.classList.add('selected');

        // Update the hidden input value
        if (hiddenInput) {
          hiddenInput.value = swatch.dataset.color;
        }
      });
    });
  });
});



//TOTAL FOR CART
function updateCartTotal() {
  let total = 0;
  document.querySelectorAll('.cart-item').forEach(item => {
    const price = parseFloat(item.querySelector('.item-price').textContent);
    const quantity = parseInt(item.querySelector('.quantity-input').value);
    const subtotal = price * quantity;
    item.querySelector('.item-subtotal').textContent = subtotal.toFixed(2);
    total += subtotal;
  });
  document.getElementById('total-price').textContent = total.toFixed(2);
}

document.querySelectorAll('.quantity-input').forEach(input => {
  input.addEventListener('input', updateCartTotal);
});

window.addEventListener('DOMContentLoaded', updateCartTotal);

