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
  totalPromos.textContent = total + 1;
};

// Lancer au chargement
setInterval(animatePromos, 2000);
createParticles();
