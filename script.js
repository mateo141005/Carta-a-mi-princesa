function abrirCarta() {
  document.getElementById("cartaCerrada").style.display = "none";
  document.getElementById("cartaAbierta").style.display = "block";
  document.getElementById("musica").play();

  // Inicia corazones flotantes
  setInterval(crearCorazon, 300);
}

function crearCorazon() {
  const contenedor = document.querySelector(".heart-container");
  const corazon = document.createElement("div");
  corazon.classList.add("heart");

  corazon.style.left = Math.random() * 100 + "vw";
  corazon.style.animationDuration = (3 + Math.random() * 3) + "s";

  contenedor.appendChild(corazon);

  setTimeout(() => {
    corazon.remove();
  }, 6000);
}