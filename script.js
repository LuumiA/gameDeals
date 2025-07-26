// @ts-nocheck

const totalPromos = document.getElementById("totalPromos");
const totalSaved = document.getElementById("totalSaved");
const filter = document.querySelectorAll("[data-filter]");
const hotDeals = document.querySelector(".hot-deals");
const commandCenter = document.querySelector(".command-center");
const gameGrid = document.querySelector(".game-grid");
const search = document.querySelector(".search");
const heroStats = document.querySelectorAll(".hero-stat-number");
const commandStats = document.querySelectorAll(".stat-value");
const searchInput = document.querySelector(".search input");
const platformSelect = document.getElementById("support-select");

platformSelect.addEventListener("change", () => {
  const selectedPlatform = platformSelect.value.toLowerCase();
  console.log("Valeur sélectionnée:", selectedPlatform);

  const gameCards = document.querySelectorAll(".card-grid-games");

  gameCards.forEach((card, index) => {
    const game = games[index];

    if (selectedPlatform === "all") {
      card.style.display = "block";
    } else {
      for (let platforms of game.platforms) {
        if (platforms.toLowerCase() === selectedPlatform) {
          card.style.display = "block";
          break;
        } else {
          card.style.display = "none";
        }
      }
    }
  });
});

const games = [
  {
    title: "Cyberpunk 2077",
    originalPrice: 59.99,
    currentPrice: 19.99,
    discount: 67,
    rating: 4.2,
    platforms: ["Steam", "Epic", "GOG"],
    icon: "🎮",
  },
  {
    title: "The Witcher 3",
    originalPrice: 49.99,
    currentPrice: 29.99,
    discount: 40,
    rating: 4.8,
    platforms: ["Steam", "Epic"],
    icon: "⚔️",
  },
  {
    title: "DOOM Eternal",
    originalPrice: 59.99,
    currentPrice: 39.99,
    discount: 33,
    rating: 4.5,
    platforms: ["Steam", "Bethesda"],
    icon: "🎮",
  },
  {
    title: "Hades",
    originalPrice: 24.99,
    currentPrice: 19.99,
    discount: 20,
    rating: 4.9,
    platforms: ["Steam", "Epic"],
    icon: "⚔️",
  },
  {
    title: "Minecraft",
    originalPrice: 19.99,
    currentPrice: 14.99,
    discount: 25,
    rating: 4.9,
    platforms: ["Microsoft"],
    icon: "⛏️",
  },
  {
    title: "GTA5",
    originalPrice: 29.99,
    currentPrice: 19.99,
    discount: 25,
    rating: 4.9,
    platforms: ["Rockstar", "Steam"],
    icon: "🎮",
  },
  {
    title: "Fifa25",
    originalPrice: 69.99,
    currentPrice: 39.99,
    discount: 25,
    rating: 4.9,
    platforms: ["EA", "playstation", "Xbox"],
    icon: "🎮",
  },
];

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

const animatedHeroStats = () => {
  const current1 = parseInt(heroStats[0].textContent);
  const changeCurrent1 = Math.floor(Math.random() * 5) - 2;
  heroStats[0].textContent = current1 + changeCurrent1;
  const current2 = heroStats[1].textContent.replace("M€", "");
  const totalCurrent2 = parseFloat(current2);
  const change2 = Math.floor(Math.random() * 5) - 0.2;
  const newValue = Math.round((totalCurrent2 + change2) * 10) / 10; // Arrondi à 1 décimale
  heroStats[1].textContent = newValue + "M€";
  const current3 = parseInt(heroStats[2].textContent);
  const changeCurrent3 = Math.floor(Math.random() * 5) - 2;
  heroStats[2].textContent = current3 + changeCurrent3;
};

const animateCommandStats = () => {
  const current1 = parseInt(commandStats[0].textContent);
  const changeCurrent1 = Math.floor(Math.random() * 5) - 2;
  commandStats[0].textContent = current1 + changeCurrent1;
  const current2 = parseInt(commandStats[1].textContent);
  const changeCurrent2 = Math.floor(Math.random() * 5) - 2;
  commandStats[1].textContent = current2 + changeCurrent2;
  const current3 = commandStats[2].textContent.replace("%", "");
  const totalCurrent3 = parseFloat(current3);
  const change3 = Math.floor(Math.random() * 5) - 0.2;
  const newValue = Math.round((totalCurrent3 + change3) * 10) / 10; // Arrondi à 1 décimale
  commandStats[2].textContent = newValue + "%";
  const current4 = parseInt(commandStats[3].textContent);
  const changeCurrent4 = Math.floor(Math.random() * 5) - 2;
  commandStats[3].textContent = current4 + changeCurrent4;
};

searchInput.addEventListener("input", () => {
  const inputValue = searchInput.value.toLowerCase();
  cardGame.forEach((card) => {
    const h3 = card.querySelector("h3");
    const gameTitle = h3.textContent.toLowerCase();
    if (gameTitle.includes(inputValue)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});

const generateGameCards = () => {
  const container = document.querySelector(".container-jeux");
  container.innerHTML = "";

  games.forEach((game) => {
    const gameCard = document.createElement("div");
    gameCard.className = "card-grid-games";
    gameCard.innerHTML = ` <div class="badge">-${game.discount}%</div>
            <i class="fa-solid fa-gamepad"></i>
            <h3>${game.title}</h3>
            <span style="font-size: 2.5rem">${game.icon}</span> 
            <p>Platform: ${game.platforms.join(", ")}</p>
            <p><span style="text-decoration: line-through">$${
              game.originalPrice
            }</span></p>
            <p><span class="prix-actuel">$${game.currentPrice}</span></p>
            <ul>
              <li>${game.platforms[0]}</li>
              <li>${game.platforms[1]}</li>
              <li>${game.platforms[2] || ""}</li>
            </ul>
            <button>Voir les offres</button>
          </div>`;
    container.appendChild(gameCard);
  });
};

// Lancer au chargement
createParticles();
generateGameCards();
const cardGame = document.querySelectorAll(".card-grid-games");
setInterval(animatePromos, 2000);
setInterval(animateSaved, 2000);
setInterval(animatedHeroStats, 2000);
setInterval(animateCommandStats, 2000);
