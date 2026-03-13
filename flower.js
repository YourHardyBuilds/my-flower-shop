const input = document.querySelector(".input");
const adds = document.querySelectorAll(".add");
const p = document.querySelector("#p");

input.addEventListener("input", () => {
  let visibleCount = 0;
  const cards = document.querySelectorAll(".flower-card");
  
  cards.forEach((card) => {
    const image = card.querySelector(".image");
    if (image.alt.toUpperCase().includes(input.value.toUpperCase())) {
      visibleCount++;
      card.style.display = "flex";
    } else {
      card.style.display = "none";
    }
  });
  p.style.display = (visibleCount === 0) ? "block" : "none";
});

adds.forEach((add) => {
  add.addEventListener("click", () => {
    const card = add.parentElement;
    const name = card.querySelector("h2").textContent;
    const price = card.querySelector(".price").textContent;
    
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ name, price });
    localStorage.setItem("cart", JSON.stringify(cart));
    
    alert(name + " added to cart!");
  });
});

const whatsappButtons = document.querySelectorAll(".order-whatsapp");
whatsappButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const card = btn.parentElement;
    const name = card.querySelector("h2").textContent;
    const price = card.querySelector(".price").textContent;
    const message = `Hello! I want to order: ${name} - ${price}. Please confirm.`;
    const phone = "917503688751"; // your number (with country code, no +)
    const url = `https://wa.me/\( {phone}?text= / ){encodeURIComponent(message)}`;
    window.open(url, "_blank");
  });
});
const toggleBtn = document.getElementById("dark-toggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  // Change icon
  toggleBtn.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});