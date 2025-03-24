document.addEventListener("DOMContentLoaded", function () {
    // SMOOTH SCROLL para anclas
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  
    // BOTONES CTA
    const ctaButtons = document.querySelectorAll(".cta-button");
    ctaButtons.forEach(button => {
      button.addEventListener("click", function () {
        console.log("CTA button clicked");
      });
    });
  
    // CAMBIO DE SECCIÓN ACTIVA AL SCROLLEAR
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links a");
  
    window.addEventListener("scroll", function () {
      let current = "";
  
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 60) {
          current = section.getAttribute("id");
        }
      });
  
      navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href")?.substring(1) === current) {
          link.classList.add("active");
        }
      });
    });
  
    // CARRUSEL DE SLIDES
    const carousel = document.querySelector(".carousel");
    const slides = document.querySelectorAll(".slide");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    let currentIndex = 0;
  
    function updateCarousel() {
      if (carousel) {
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
      }
    }
  
    if (nextButton && prevButton) {
      nextButton.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateCarousel();
      });
  
      prevButton.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateCarousel();
      });
    }
  
    // Auto-slide (opcional)
    setInterval(() => {
      currentIndex = (currentIndex + 1) % slides.length;
      updateCarousel();
    }, 5000);
  
    // TESTIMONIOS INTERACTIVOS
    const testimonials = {
      "Sergio Torres": "El servicio que le dieron a mi perrito Max fue excelente. Se resolvió la urgencia y salió todo bien 😊",
      "Sabrina Carpenter": "Gracias a Dooki, mi gatita recibió un trato increíble. Muy recomendado 💕",
      "Kendrick Lamar": "Servicio de primera clase, mi perro ahora está más saludable que nunca. 🔥"
    };
  
    const testimonialTitles = {
      "Sergio Torres": "Dooki es lo mejor",
      "Sabrina Carpenter": "Agradecida con Dooki",
      "Kendrick Lamar": "No hay como Dooki"
    };
  
    const clientElements = document.querySelectorAll(".client");
    const testimonialText = document.querySelector(".testimonial-card h3");
    const testimonialTitle = document.querySelector(".testimonial-card h1");
    const testimonialCard = document.querySelector(".testimonial-card");
  
    clientElements.forEach(client => {
      client.addEventListener("click", function () {
        clientElements.forEach(c => {
          c.style.backgroundColor = "rgba(149, 230, 233, 0.20)";
        });
  
        testimonialCard.style.opacity = "0";
  
        setTimeout(() => {
          const clientName = this.querySelector(".client-span").textContent;
          testimonialText.textContent = testimonials[clientName];
          testimonialTitle.textContent = testimonialTitles[clientName];
          testimonialCard.style.opacity = "1";
        }, 300);
  
        this.style.backgroundColor = "#95E6E9";
      });
    });
  });
  