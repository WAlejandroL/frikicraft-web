
document.querySelectorAll(".roles").forEach((carousel) => {
  const track = carousel.querySelector(".roles-track");
  const slides = [...track.querySelectorAll(".role-slide")];
  const prev = carousel.querySelector(".roles-prev");
  const next = carousel.querySelector(".roles-next");
  const dotsContainer = carousel.querySelector(".roles-dots");

  let current = 0;

  slides.forEach((slide, index) => {
    const dot = document.createElement("button");

    dot.className = "roles-dot";
    dot.type = "button";
    dot.setAttribute(
      "aria-label",
      `Mostrar administrador ${index + 1}`
    );

    dot.addEventListener("click", () => showSlide(index));
    dotsContainer.appendChild(dot);
  });

  const dots = [...dotsContainer.querySelectorAll(".roles-dot")];

  function showSlide(index) {
    current = (index + slides.length) % slides.length;

    track.style.transform = `translateX(-${current * 100}%)`;

    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === current);
      dot.setAttribute("aria-current", i === current ? "true" : "false");
    });
  }

  prev.addEventListener("click", () => showSlide(current - 1));
  next.addEventListener("click", () => showSlide(current + 1));

  showSlide(0);
});
