let cart = [];

fetch("data/products.json")
  .then((response) => response.json())
  .then((data) => {
    const productSection = document.querySelector(".product-grid");
    const cartSection = document.querySelector(".cart-content");
    productSection.innerHTML = "";

    // Loop through the products and render them dynamically
    data.products.forEach((prod, index) => {
      const productCard = `
        <div class="product-card">
          <img src="${prod.image}" alt="${prod.name}" />
          <h3 class="product-name">${prod.name}</h3>
          <p class="product-price">$${prod.price}</p>
          <button class="add-to-cart-btn" data-index="${index}">Add to Cart</button>
        </div>
      `;
      productSection.innerHTML += productCard;
    });

    // Add event listeners to "Add to Cart" buttons
    const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");
    addToCartButtons.forEach((button) => {
      button.addEventListener("click", (event) => {
        const productIndex = event.target.getAttribute("data-index");
        addToCart(data.products[productIndex]);
      });
    });
  })
  .catch((error) => {
    console.log("Error fetching data:", error);
  });

// Function to add the product to the cart
function addToCart(product) {
  console.log("Adding to cart:", product);
  const existingProduct = cart.find((item) => item.name === product.name);
  if (existingProduct) {
    existingProduct.quantity += 1;
    existingProduct.price *= existingProduct.quantity;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  updateCartSection();
}

function updateCartSection() {
  const cartContent = document.querySelector(".cart-content");
  cartContent.innerHTML = "";

  cart.forEach((item) => {
    const cartItemHTML = `
      <div class="cart-item">
        <p class="cart-item-name">${item.name}</p>
        <p class="cart-item-price">$${item.price}</p>
        <input type="number" class="cart-item-quantity" value="${item.quantity}" min="1" />
      </div>
    `;
    cartContent.innerHTML += cartItemHTML;
  });

  console.log("Updated cart content:", cart);
}
// Get modal elements
const modal = document.getElementById("checkoutModal");
const closeModal = document.querySelector(".close-btn");
const checkoutButton = document.querySelector(".checkout-btn");
const confirmationMessage = document.getElementById("confirmationMessage");
const checkoutForm = document.getElementById("checkoutForm");

checkoutButton.addEventListener("click", () => {
  modal.style.display = "flex";
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

// Form submission handler
checkoutForm.addEventListener("submit", (event) => {
  event.preventDefault();
  modal.style.display = "none";
  confirmationMessage.classList.remove("hidden");
  confirmationMessage.style.display = "block";

  cart = [];
  updateCartSection();
});
