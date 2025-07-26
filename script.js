// @ts-nocheck
// Créer les particules
function createParticles() {
  const particlesContainer = document.getElementById("particles");
  for (let i = 0; i < 80; i++) {
    // Plus de particules !
    const particle = document.createElement("div");
    particle.className = "particle";
    particle.style.left = Math.random() * 100 + "%";
    particle.style.animationDelay = Math.random() * 15 + "s";
    particle.style.animationDuration = Math.random() * 10 + 10 + "s"; // Durées variées
    particlesContainer.appendChild(particle);
  }
}

const totalPromos = document.getElementById("totalPromos");
const totalSaved = document.getElementById("totalSaved");
const filter = document.querySelectorAll("[data-filter]");
const hotDeals = document.querySelector(".hot-deals");
const commandCenter = document.querySelector(".command-center");
const gameGrid = document.querySelector(".game-grid");
const search = document.querySelector(".search");

const animatePromos = () => {
  const total = parseInt(totalPromos.textContent);
  const change = Math.floor(Math.random() * 5) - 2;
  totalPromos.textContent = total + change;
};

const animateSaved = () => {
  const newTotal = totalSaved.textContent.replace("M€", "");
  const total2 = parseFloat(newTotal);
  const change2 = Math.floor(Math.random() * 5) - 0.2;
  const newValue = Math.round((total2 + change2) * 10) / 10; // Arrondi à 1 décimale
  totalSaved.textContent = newValue + "M€";
};

filter.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    filter.forEach((e) => e.classList.remove("active"));
    btn.classList.add("active");
    const filterValue = btn.getAttribute("data-filter");
    if (filterValue === "deals") {
      hotDeals.style.display = "block";
      commandCenter.style.display = "block";
      gameGrid.style.display = "none";
      search.style.display = "none";
    } else if (filterValue === "all") {
      hotDeals.style.display = "none";
      commandCenter.style.display = "none";
      gameGrid.style.display = "block";
      search.style.display = "block";
    } else if (filterValue === "compare") {
      gameGrid.style.display = "block";
      search.style.display = "block";
      hotDeals.style.display = "none";
      commandCenter.style.display = "none";
    }
  });
});

// Lancer au chargement
setInterval(animatePromos, 2000);
setInterval(animateSaved, 2000);
createParticles();
