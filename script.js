const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const bars = document.getElementById('bars');
const xmark = document.getElementById('xmark');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  
  if (navMenu.classList.contains('active')) {
    bars.style.display = "none";
    xmark.style.display = "block";
  }
  else {
    xmark.style.display = "none";
    bars.style.display = "block";
  }
});

// ✅ Initialize EmailJS (Get your userID from https://www.emailjs.com/)
(function(){
  emailjs.init("n76Pb1hnj7CbSjx4r"); 
})();

document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = this.name.value;
  let phone = this.phone.value;
  let email = this.email.value;
  let message = this.message.value;

  // --- 1. Send Email using EmailJS ---
  emailjs.send("BlackStarServiceByFS", "BlackStarTemplateByFS", {
    name: name,
    phone: phone,
    email: email,
    message: message
  }).then(() => {
    alert("✅ Message sent to Email!");
  }).catch((err) => {
    alert("❌ Email failed: " + JSON.stringify(err));
  });

  // --- 2. Send WhatsApp Message ---
  let text = `New Message:\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message}`;
  let whatsappUrl = `https://wa.me/918724074004?text=${encodeURIComponent(text)}`;
  window.open(whatsappUrl, "_blank");
});
