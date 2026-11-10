
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


/* CUENTA REGRESIVA FRIKICRAFT */

const fechaApertura = new Date("2026-11-13T19:00:00-06:00").getTime();

const countdown = document.getElementById("countdown");
const finalizado = document.getElementById("countdown-finished");

if (countdown && finalizado) {

  function actualizarContador() {
    const ahora = Date.now();
    const diferencia = fechaApertura - ahora;

    if (diferencia <= 0) {
      countdown.hidden = true;
      finalizado.hidden = false;
      return;
    }

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferencia / (1000 * 60)) % 60);
    const segundos = Math.floor((diferencia / 1000) % 60);

    document.getElementById("dias").textContent =
      String(dias).padStart(2, "0");

    document.getElementById("horas").textContent =
      String(horas).padStart(2, "0");

    document.getElementById("minutos").textContent =
      String(minutos).padStart(2, "0");

    document.getElementById("segundos").textContent =
      String(segundos).padStart(2, "0");
  }

  actualizarContador();

  const intervaloContador = setInterval(() => {
    actualizarContador();

    if (Date.now() >= fechaApertura) {
      clearInterval(intervaloContador);
    }
  }, 1000);

}
