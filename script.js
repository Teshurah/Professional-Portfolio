function showPage(pageId) {
  const pages = document.querySelectorAll(".page");

  pages.forEach(page => {
    page.classList.remove("active");
  });

  document.getElementById(pageId).classList.add("active");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

// Contact form interaction
const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", function(event) {
  event.preventDefault();

  alert("Thank you for your message. This form can be connected to email later.");

  contactForm.reset();
});
