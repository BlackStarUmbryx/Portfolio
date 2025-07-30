document.addEventListener("DOMContentLoaded", () => {
  // Pricing toggle logic
  const billingToggle = document.getElementById("billing-toggle");
  billingToggle.addEventListener("change", () => {
    const prices = document.querySelectorAll(".plan .price");
    prices.forEach(price => {
      if (billingToggle.checked) {
        price.innerHTML = price.innerHTML.replace("₹499", "₹399");
      } else {
        price.innerHTML = price.innerHTML.replace("₹399", "₹499");
      }
    });
  });

  // Accordion logic
  const toggles = document.querySelectorAll(".accordion-toggle");
  toggles.forEach(toggle => {
    toggle.addEventListener("click", () => {
      const content = toggle.nextElementSibling;
      content.style.display = content.style.display === "block" ? "none" : "block";
    });
  });
});
