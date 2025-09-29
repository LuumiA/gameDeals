// @ts-nocheck

// ====================================
// CONFIGURATION ET DONNÉES
// ====================================

// Base de données des jeux - ici on stocke tous nos jeux avec leurs infos

let games = [];

// Variables de pagination
let currentPage = 1; // Page actuelle (on commence à la page 1)
let gamesPerPage = 12; // Nombre de jeux par page
let totalGames = 0; // Total de jeux reçus de l'API
let totalPages = 0; // Nombre total de pages calculé

const fetchRealGames = () => {
  fetch("https://www.cheapshark.com/api/1.0/deals?upperPrice=50")
    .then((response) => response.json())
    .then((data) => {
      console.log("Premier jeu reçu:", data[0]);
      games = data;
      // Calculer le nombre total de pages
      totalGames = data.length;
      totalPages = Math.ceil(totalGames / gamesPerPage);
      generateGameCards();
      updatePagination();
    });
};

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
const compare = document.querySelector(".compare");

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

  let debut = (currentPage - 1) * gamesPerPage;
  let fin = debut + gamesPerPage;
  let jeuxDeLaPage = games.slice(debut, fin);

  jeuxDeLaPage.forEach((game) => {
    const gameCard = document.createElement("div");
    gameCard.className = "card-grid-games";
    gameCard.innerHTML = `
      <div class="badge">-${Math.round(game.savings)}%</div>
      <img src="${game.thumb}" alt="${
      game.title
    }" style="width: 100px; height: auto;">
      <h3>${game.title}</h3>
     Platform: ${getStoreName(game.storeID)}
      <p><span style="text-decoration: line-through">$${
        game.normalPrice
      }</span></p>
      <p><span class="prix-actuel">$${game.salePrice}</span></p>
      <p>${
        game.steamRatingText !== null
          ? "⭐ " + game.steamRatingText
          : "Pas de note"
      }</p>
      <p style="font-size: 0.8rem; color: #888;">
  Prix susceptibles d'évoluer - Vérifiez sur le store
</p>
      <a href="https://www.cheapshark.com/redirect?dealID=${
        game.dealID
      }" target="_blank">
  <button>Acheter maintenant</button>
</a>
     
    `;
    container.appendChild(gameCard);
  });
  // IMPORTANT : Récupérer les cartes APRÈS les avoir créées
  gameCards = document.querySelectorAll(".card-grid-games");
};

// Fonction pour mettre à jour l'affichage de la pagination
const updatePagination = () => {
  //Mettre a jour les infos de page
  document.getElementById("currentPageDisplay").textContent = currentPage;
  document.getElementById("totalPagesDisplay").textContent = totalPages;

  //Gerer les boutons Précédent/Suivant

  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  prevBtn.disabled = currentPage === 1;
  nextBtn.disabled = currentPage === totalPages;
};

const changePage = (direction) => {
  if (direction === "prev" && currentPage > 1) {
    currentPage--;
  } else if (direction === "next" && currentPage < totalPages) {
    currentPage++;
  }
  generateGameCards();
  updatePagination();
};

// ====================================
// GESTION DE LA NAVIGATION
// ====================================

const getStoreName = (storeID) => {
  if (storeID === "1") return "Steam";
  if (storeID === "2") return "GamersGate";
  if (storeID === "3") return "Green Man Gaming";
  if (storeID === "4") return "Amazon";
  if (storeID === "5") return "GameStop";
  if (storeID === "6") return "Direct2Drive";
  if (storeID === "7") return "GOG";
  if (storeID === "8") return "Origin";
  if (storeID === "9") return "Get Games";
  if (storeID === "10") return "Shiny Loot";
  if (storeID === "11") return "Humble Store";
  if (storeID === "12") return "Desura";
  if (storeID === "13") return "Uplay";
  if (storeID === "14") return "IndieGameStand";
  if (storeID === "15") return "Fanatical";
  if (storeID === "16") return "Gamesrocket";
  if (storeID === "17") return "Games Republic";
  if (storeID === "18") return "SilaGames";
  if (storeID === "19") return "Playfield";
  if (storeID === "20") return "ImperialGames";
  if (storeID === "21") return "WinGameStore";
  if (storeID === "22") return "FunStockDigital";
  if (storeID === "23") return "Microsoft Store";
  if (storeID === "24") return "Gamesplanet";
  if (storeID === "25") return "Epic Games Store";
  if (storeID === "26") return "Razer Game Store";
  if (storeID === "27") return "Gamesload";
  if (storeID === "28") return "2Game";
  if (storeID === "29") return "IndieGala";
  if (storeID === "30") return "Blizzard Shop";
  if (storeID === "31") return "AllYouPlay";
  if (storeID === "32") return "DLGamer";
  if (storeID === "33") return "Noctre";
  if (storeID === "34") return "DreamGame";
  return "Autre Store";
};

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
      showSections([compare], [hotDeals, commandCenter, gameGrid, search]);
      const container = document.querySelector(".compare");
      container.innerHTML = "";
      if (gamesChoice.length === 0) {
        container.innerHTML = `<div class="welcome-message">
  <p>Veuillez sélectionnez 3 jeux pour les comparer.</p>
  <button class="valider">OK</button>
</div>`;
        const buttonValider = document.querySelector(".valider");
        buttonValider.addEventListener("click", () => {
          container.innerHTML = "";
          games.forEach((game) => {
            const compareCard = document.createElement("div");
            compareCard.className = "compare-card";
            compareCard.innerHTML = `
      <div class="badge">-${Math.round(game.savings)}%</div>
     <img src="${game.thumb}" alt="${
              game.title
            }" style="width: 100px; height: auto;">
      <h3>${game.title}</h3>
      Platform: ${getStoreName(game.storeID)}
      <p><span style="text-decoration: line-through">$${
        game.normalPrice
      }</span></p>
      <p><span class="prix-actuel">$${game.salePrice}</span></p>
      <p>⭐ ${game.steamRatingText}</p>
      <p style="font-size: 0.8rem; color: #888;">
  Prix susceptibles d'évoluer - Vérifiez sur le store
</p>
    <div class="button-group">
  <a href="https://www.cheapshark.com/redirect?dealID=${
    game.dealID
  }" target="_blank" style="flex: 1;">
    <button class="btn-primary" style="width: 100%;">Acheter</button>
  </a>
  <button class="btn-compare btn-secondary">Comparer</button>
</div>
    `;
            container.appendChild(compareCard);
          });
          const allbuttonCompare = document.querySelectorAll(".btn-compare");
          allbuttonCompare.forEach((btn, index) => {
            btn.addEventListener("click", () => {
              if (
                !gamesChoice.includes(games[index]) &&
                gamesChoice.length < 3
              ) {
                gamesChoice.push(games[index]);
                btn.style.backgroundColor = "#4CAF50";
                if (gamesChoice.length === 3) {
                  container.innerHTML = "";
                  gamesChoice.forEach((game) => {
                    const compareCard = document.createElement("div");
                    compareCard.className = "compare-card";
                    compareCard.innerHTML = `
      <div class="badge">-${Math.round(game.savings)}%</div>
      <img src="${game.thumb}" alt="${
                      game.title
                    }" style="width: 100px; height: auto;"> 
      <h3>${game.title}</h3>
      Platform: ${getStoreName(game.storeID)}
      <p><span style="text-decoration: line-through">$${
        game.normalPrice
      }</span></p>
      <p><span class="prix-actuel">$${game.salePrice}</span></p>
      <p>⭐ ${game.steamRatingText}</p>
      <p style="font-size: 0.8rem; color: #888;">
  Prix susceptibles d'évoluer - Vérifiez sur le store
</p>
     <a href="https://www.cheapshark.com/redirect?dealID=${
       game.dealID
     }" target="_blank">
  <button>Acheter maintenant</button>
</a>
    `;
                    container.appendChild(compareCard);
                  });
                }
              } else if (gamesChoice.includes(games[index])) {
                gamesChoice = gamesChoice.filter(
                  (game) => game !== games[index]
                );
                btn.style.backgroundColor = "";
              }
            });
          });
        });
      }
    }
  });
});

// Fonction utilitaire pour afficher/masquer des sections
const showSections = (toShow, toHide) => {
  toShow.forEach((section) => (section.style.display = ""));
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
      games.sort((a, b) => a.salePrice - b.salePrice);
    } else if (selectedSort === "note") {
      games.sort((a, b) => b.steamRatingPercent - a.steamRatingPercent);
    } else if (selectedSort === "reduction") {
      games.sort((a, b) => b.savings - a.savings);
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
  fetchRealGames();

  // 3. Configure les systèmes de filtrage (APRÈS génération des cartes)
  setupSearchFilter();
  setupSortFilter();
  setupPlatformFilter();

  // 4. Lance les animations des stats
  setInterval(animatePromos, 2000);
  setInterval(animateSaved, 2000);
  setInterval(animatedHeroStats, 2000);
  setInterval(animateCommandStats, 2000);

  // 5. Configure les boutons de pagination
  document
    .getElementById("prevBtn")
    .addEventListener("click", () => changePage("prev"));
  document
    .getElementById("nextBtn")
    .addEventListener("click", () => changePage("next"));

  //6. Gestion du bouton "retour en haut"
  window.addEventListener("scroll", () => {
    const bouton = document.querySelector("#backToTop");

    if (window.scrollY > 300) {
      bouton.classList.add("visible");
    } else {
      bouton.classList.remove("visible");
    }
  });

  // 7. Clic sur le bouton retour en haut
  const boutonRetour = document.querySelector("#backToTop");
  if (boutonRetour) {
    boutonRetour.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  } else {
    console.log("Bouton non trouvé !");
  }
};

// GO !
initApp();
