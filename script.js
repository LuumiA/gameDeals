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

const animatePromos = () => {
  const total = parseInt(totalPromos.textContent);
  const change = Math.floor(Math.random() * 5) - 2;
  totalPromos.textContent = total + change;
};

const animateSaved = () => {
  const newTotal = totalSaved.textContent.replace("M€", "");
  const total2 = parseFloat(newTotal);
  const change2 = Math.floor(Math.random() * 5) - 0.2;
  totalSaved.textContent = total2 + change2 + "M€";
};

// Lancer au chargement
setInterval(animatePromos, 2000);
setInterval(animateSaved, 2000);
createParticles();
