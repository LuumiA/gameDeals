// @ts-nocheck

// ====================================
// CONFIGURATION ET DONNÉES
// ====================================

// Base de données des jeux - ici on stocke tous nos jeux avec leurs infos

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
  {
    title: "Red Dead Redemption 2",
    originalPrice: 59.99,
    currentPrice: 29.99,
    discount: 50,
    rating: 4.8,
    platforms: ["Steam", "Rockstar", "Epic"],
    icon: "🤠",
  },
  {
    title: "Elden Ring",
    originalPrice: 69.99,
    currentPrice: 49.99,
    discount: 29,
    rating: 4.7,
    platforms: ["Steam", "PlayStation", "Xbox"],
    icon: "🛡️",
  },
  {
    title: "Starfield",
    originalPrice: 69.99,
    currentPrice: 44.99,
    discount: 36,
    rating: 4.3,
    platforms: ["Steam", "Microsoft"],
    icon: "🚀",
  },
  {
    title: "Resident Evil 4 Remake",
    originalPrice: 59.99,
    currentPrice: 39.99,
    discount: 33,
    rating: 4.6,
    platforms: ["Steam", "PlayStation", "Xbox"],
    icon: "🧟",
  },
  {
    title: "Baldur’s Gate 3",
    originalPrice: 69.99,
    currentPrice: 59.99,
    discount: 14,
    rating: 4.9,
    platforms: ["Steam", "GOG"],
    icon: "🎲",
  },
  {
    title: "Sekiro: Shadows Die Twice",
    originalPrice: 59.99,
    currentPrice: 29.99,
    discount: 50,
    rating: 4.7,
    platforms: ["Steam"],
    icon: "🗡️",
  },
  {
    title: "Hogwarts Legacy",
    originalPrice: 69.99,
    currentPrice: 39.99,
    discount: 43,
    rating: 4.5,
    platforms: ["Steam", "PlayStation", "Xbox"],
    icon: "🪄",
  },
  {
    title: "Dark Souls III",
    originalPrice: 59.99,
    currentPrice: 14.99,
    discount: 75,
    rating: 4.6,
    platforms: ["Steam"],
    icon: "💀",
  },
  {
    title: "God of War",
    originalPrice: 49.99,
    currentPrice: 29.99,
    discount: 40,
    rating: 4.9,
    platforms: ["Steam", "PlayStation"],
    icon: "🔨",
  },
  {
    title: "Stray",
    originalPrice: 29.99,
    currentPrice: 19.99,
    discount: 33,
    rating: 4.4,
    platforms: ["Steam", "PlayStation"],
    icon: "🐱",
  },
  {
    title: "Assassin's Creed Valhalla",
    originalPrice: 59.99,
    currentPrice: 23.99,
    discount: 60,
    rating: 4.4,
    platforms: ["Ubisoft", "Epic", "PlayStation", "Xbox"],
    icon: "🪓",
  },
  {
    title: "No Man's Sky",
    originalPrice: 49.99,
    currentPrice: 24.99,
    discount: 50,
    rating: 4.3,
    platforms: ["Steam", "PlayStation", "Xbox"],
    icon: "🪐",
  },
  {
    title: "Cuphead",
    originalPrice: 19.99,
    currentPrice: 9.99,
    discount: 50,
    rating: 4.6,
    platforms: ["Steam", "Microsoft", "Switch"],
    icon: "☕",
  },
  {
    title: "Terraria",
    originalPrice: 9.99,
    currentPrice: 4.99,
    discount: 50,
    rating: 4.8,
    platforms: ["Steam", "GOG", "Switch"],
    icon: "⛏️",
  },
  {
    title: "Stardew Valley",
    originalPrice: 14.99,
    currentPrice: 8.99,
    discount: 40,
    rating: 4.9,
    platforms: ["Steam", "GOG", "Switch"],
    icon: "🌾",
  },
  {
    title: "Valorant",
    originalPrice: 0,
    currentPrice: 0,
    discount: 0,
    rating: 4.2,
    platforms: ["Riot"],
    icon: "🔫",
  },
  {
    title: "Phasmophobia",
    originalPrice: 13.99,
    currentPrice: 9.99,
    discount: 29,
    rating: 4.5,
    platforms: ["Steam"],
    icon: "👻",
  },
  {
    title: "Overwatch 2",
    originalPrice: 0,
    currentPrice: 0,
    discount: 0,
    rating: 3.9,
    platforms: ["Battle.net"],
    icon: "⚔️",
  },
  {
    title: "Among Us",
    originalPrice: 4.99,
    currentPrice: 3.49,
    discount: 30,
    rating: 4.1,
    platforms: ["Steam", "Epic", "Switch"],
    icon: "🧑‍🚀",
  },
  {
    title: "Dead Cells",
    originalPrice: 24.99,
    currentPrice: 12.49,
    discount: 50,
    rating: 4.7,
    platforms: ["Steam", "GOG", "Switch"],
    icon: "💀",
  },
];

// ====================================
// SÉLECTEURS DOM - On récupère tous les éléments
// ====================================

// Éléments pour les animations de stats
const totalPromos = document.getElementById("totalPromos");
const totalSaved = document.getElementById("totalSaved");
const heroStats = document.querySelectorAll(".hero-stat-number");
const commandStats = document.querySelectorAll(".stat-value");

// Éléments pour la navigation et filtres
const filter = document.querySelectorAll("[data-filter]");
const hotDeals = document.querySelector(".hot-deals");
const commandCenter = document.querySelector(".command-center");
const gameGrid = document.querySelector(".game-grid");
const search = document.querySelector(".search");

// Éléments pour la recherche et filtrage
const searchInput = document.querySelector(".search input");
const platformSelect = document.getElementById("support-select");
const filterSelect = document.getElementById("filter-select");

// Variable qui sera définie après génération des cartes
let gameCards;
// Variable pour stocker les jeux sélectionnés pour comparaison
let gamesChoice = [];

// ====================================
// FONCTIONS UTILITAIRES
// ====================================

// Génère un nombre aléatoire entre min et max pour les animations
const getRandomChange = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

// ====================================
// FONCTIONS D'ANIMATION DES STATS
// ====================================

// Anime le compteur des promotions dans le header
const animatePromos = () => {
  const total = parseInt(totalPromos.textContent);
  const change = getRandomChange(-2, 2); // Entre -2 et +2
  totalPromos.textContent = total + change;
};

// Anime le compteur d'argent économisé (format M€)
const animateSaved = () => {
  const newTotal = totalSaved.textContent.replace("M€", "");
  const total2 = parseFloat(newTotal);
  const change2 = getRandomChange(-2, 2) * 0.1; // Petits changements décimaux
  const newValue = Math.round((total2 + change2) * 10) / 10;
  totalSaved.textContent = newValue + "M€";
};

// Anime les 3 stats de la section hero
const animatedHeroStats = () => {
  // Premier stat : nombre entier
  const current1 = parseInt(heroStats[0].textContent);
  heroStats[0].textContent = current1 + getRandomChange(-2, 2);

  // Deuxième stat : format M€
  const current2 = heroStats[1].textContent.replace("M€", "");
  const totalCurrent2 = parseFloat(current2);
  const change2 = getRandomChange(-2, 2) * 0.1;
  const newValue = Math.round((totalCurrent2 + change2) * 10) / 10;
  heroStats[1].textContent = newValue + "M€";

  // Troisième stat : nombre entier
  const current3 = parseInt(heroStats[2].textContent);
  heroStats[2].textContent = current3 + getRandomChange(-2, 2);
};

// Anime les 4 stats du command center
const animateCommandStats = () => {
  // Stats 1, 2, 4 : nombres entiers
  [0, 1, 3].forEach((index) => {
    const current = parseInt(commandStats[index].textContent);
    commandStats[index].textContent = current + getRandomChange(-2, 2);
  });

  // Stat 3 : pourcentage avec décimales
  const current3 = commandStats[2].textContent.replace("%", "");
  const totalCurrent3 = parseFloat(current3);
  const change3 = getRandomChange(-2, 2) * 0.1;
  const newValue = Math.round((totalCurrent3 + change3) * 10) / 10;
  commandStats[2].textContent = newValue + "%";
};

// ====================================
// GÉNÉRATION DU CONTENU DYNAMIQUE
// ====================================

// Crée les particules d'arrière-plan pour l'effet visuel
function createParticles() {
  const particlesContainer = document.getElementById("particles");
  for (let i = 0; i < 80; i++) {
    const particle = document.createElement("div");
    particle.className = "particle";
    particle.style.left = Math.random() * 100 + "%";
    particle.style.animationDelay = Math.random() * 15 + "s";
    particle.style.animationDuration = Math.random() * 10 + 10 + "s";
    particlesContainer.appendChild(particle);
  }
}

// Génère les cartes de jeux à partir des données
const generateGameCards = () => {
  const container = document.querySelector(".container-jeux");
  container.innerHTML = ""; // Vide le container

  games.forEach((game) => {
    const gameCard = document.createElement("div");
    gameCard.className = "card-grid-games";
    gameCard.innerHTML = `
      <div class="badge">-${game.discount}%</div>
      <span style="font-size: 2.5rem">${game.icon}</span> 
      <h3>${game.title}</h3>
      <p>Platform: ${game.platforms.join(", ")}</p>
      <p><span style="text-decoration: line-through">$${
        game.originalPrice
      }</span></p>
      <p><span class="prix-actuel">$${game.currentPrice}</span></p>
      <p>⭐ ${game.rating}/5</p>
      <ul>
        <li>${game.platforms[0] || ""}</li>
        <li>${game.platforms[1] || ""}</li>
        <li>${game.platforms[2] || ""}</li> 
      </ul> 
      <button>Voir les offres</button>
      <button class="btn-compare">Comparer</button>
    `;
    container.appendChild(gameCard);
  });
  const allbuttonCompare = document.querySelectorAll(".btn-compare");
  allbuttonCompare.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      if (!gamesChoice.includes(games[index]) && gamesChoice.length < 3) {
        gamesChoice.push(games[index]);
        btn.style.backgroundColor = "#4CAF50";
      } else if (gamesChoice.includes(games[index])) {
        gamesChoice = gamesChoice.filter((game) => game !== games[index]);
        btn.style.backgroundColor = "";
      }
      console.log(gamesChoice);
    });
  });
  // IMPORTANT : Récupérer les cartes APRÈS les avoir créées
  gameCards = document.querySelectorAll(".card-grid-games");
};

// ====================================
// GESTION DE LA NAVIGATION
// ====================================

// Gère le changement d'onglets (Deals/Tous les jeux/Comparateur)
filter.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Enlève la classe active de tous les boutons
    filter.forEach((e) => e.classList.remove("active"));
    // Ajoute la classe active au bouton cliqué
    btn.classList.add("active");

    const filterValue = btn.getAttribute("data-filter");

    // Affiche/masque les sections selon l'onglet
    if (filterValue === "deals") {
      // Mode "Deals du moment" : affiche command center et hot deals
      showSections([hotDeals, commandCenter], [gameGrid, search]);
    } else if (filterValue === "all") {
      // Mode "Tous les jeux" : affiche la grille et la recherche
      showSections([gameGrid, search], [hotDeals, commandCenter]);
    } else if (filterValue === "compare") {
      // Mode "Comparateur" : comme tous les jeux pour l'instant
      showSections([gameGrid, search], [hotDeals, commandCenter]);
    }
  });
});

// Fonction utilitaire pour afficher/masquer des sections
const showSections = (toShow, toHide) => {
  toShow.forEach((section) => (section.style.display = "block"));
  toHide.forEach((section) => (section.style.display = "none"));
};

// ====================================
// SYSTÈME DE FILTRAGE ET RECHERCHE
// ====================================

// Recherche par nom de jeu en temps réel
const setupSearchFilter = () => {
  searchInput.addEventListener("input", () => {
    const inputValue = searchInput.value.toLowerCase();

    gameCards.forEach((card) => {
      const gameTitle = card.querySelector("h3").textContent.toLowerCase();
      card.style.display = gameTitle.includes(inputValue) ? "block" : "none";
    });
  });
};

// Filtre par plateforme
const setupPlatformFilter = () => {
  platformSelect.addEventListener("change", () => {
    const selectedPlatform = platformSelect.value.toLowerCase();

    gameCards.forEach((card, index) => {
      const game = games[index];

      if (selectedPlatform === "all") {
        card.style.display = "block";
      } else {
        // Vérifie si le jeu est disponible sur la plateforme sélectionnée
        const isAvailable = game.platforms.some(
          (platform) => platform.toLowerCase() === selectedPlatform
        );
        card.style.display = isAvailable ? "block" : "none";
      }
    });
  });
};

// Filtre par prix/date/notes
const setupSortFilter = () => {
  filterSelect.addEventListener("change", () => {
    const selectedSort = filterSelect.value.toLowerCase();

    if (selectedSort === "prix") {
      games.sort((a, b) => a.currentPrice - b.currentPrice);
    } else if (selectedSort === "note") {
      games.sort((a, b) => b.rating - a.rating);
    } else if (selectedSort === "reduction") {
      games.sort((a, b) => b.discount - a.discount);
    }
    generateGameCards();
  });
};

// ====================================
// INITIALISATION DE L'APPLICATION
// ====================================

// Lance tout au chargement de la page
const initApp = () => {
  // 1. Crée les effets visuels
  createParticles();

  // 2. Génère le contenu dynamique
  generateGameCards();

  // 3. Configure les systèmes de filtrage (APRÈS génération des cartes)
  setupSearchFilter();
  setupSortFilter();
  setupPlatformFilter();

  // 4. Lance les animations des stats
  setInterval(animatePromos, 2000);
  setInterval(animateSaved, 2000);
  setInterval(animatedHeroStats, 2000);
  setInterval(animateCommandStats, 2000);
};

// GO !
initApp();
