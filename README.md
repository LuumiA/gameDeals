# 🎮 GameDeals - Site de deals gaming

Salut ! 👋

Voici mon projet GameDeals, un site pour trouver les meilleures promos de jeux vidéo en temps réel.

🌐 **[Voir le site en action](https://game-deals-delta.vercel.app/)**

## 🚀 Ce que fait le site

**GameDeals** utilise l'API CheapShark pour afficher de vrais deals de jeux vidéo ! Tu peux :

- 🔍 **Rechercher des jeux** par nom en temps réel
- 🎛️ **Filtrer et trier** par prix, note, réduction
- 🛒 **Acheter directement** via les liens vers 30+ stores
- ⚖️ **Comparer jusqu'à 3 jeux** côte à côte
- 🏪 **Voir les deals** de Steam, Epic Games, GOG, Microsoft Store...
- ✨ **Profiter d'un design gaming** avec particules et animations

## 🛠️ Technologies utilisées

- **HTML5** - Structure du site
- **CSS3** - Design et animations (variables CSS, responsive)
- **JavaScript Vanilla** - Logique et intégration API
- **CheapShark API** - Données de deals en temps réel
- **Font Awesome** - Icônes
- **Vercel** - Hébergement

_Pas de frameworks, tout fait à la main pour bien maîtriser les bases !_

## 🎨 Ce qui rend le site stylé

### Design Gaming

- **Thème sombre** avec couleurs flashy (cyan, vert néon)
- **Particules animées** en arrière-plan
- **Effets glow** sur textes et boutons
- **Vraies images** des jeux via l'API

### Animations Live

- **Stats du header** qui bougent toutes les 2 secondes
- **Compteurs animés** dans la hero section
- **Command Center** avec feed temps réel
- **Radar tournant** pour l'effet "scan"

### Expérience Utilisateur

- **Recherche instantanée** pendant la frappe
- **Filtres fonctionnels** par plateforme
- **Navigation fluide** entre sections
- **100% responsive** (mobile-friendly)

## 📁 Structure du projet

```
gamedeals/
├── index.html          # Page principale
├── style.css          # Tous les styles
├── script.js          # Logique JavaScript + API
└── README.md          # Ce fichier !
```

## 🎯 Fonctionnalités principales

### 1. Navigation intelligente

- **3 onglets** : Deals du moment, Tous les jeux, Comparateur
- Chaque section a sa propre logique d'affichage
- **Interface guidée** pour le comparateur

### 2. Intégration API en temps réel

- **Vraies données** via CheapShark API
- **Deals actualisés** de 30+ stores
- **Liens d'achat directs** vers les plateformes
- **Gestion d'erreurs** et states de chargement

### 3. Système de comparaison

- **Sélection de 3 jeux maximum**
- **Interface étape par étape** : Accueil → Sélection → Comparaison
- **Comparaison côte à côte** des prix, notes, plateformes
- **Feedback visuel** sur les jeux sélectionnés

### 4. Tri et filtrage avancé

- **Tri par prix**, note, pourcentage de réduction
- **Recherche textuelle** en temps réel
- **Filtres par plateforme** multiples
- **Interface responsive** sur tous écrans

## ⚠️ Notes importantes

- **Prix indicatifs** : Les prix peuvent varier entre l'affichage et l'achat (délais API, stocks limités)
- **Liens externes** : Redirection vers les stores officiels via CheapShark
- **Géolocalisation** : Certains deals peuvent varier selon votre région

## 🚧 Améliorations possibles

- [ ] Pagination/Chargement progressif des deals
- [ ] Système de favoris avec localStorage
- [ ] Notifications pour les deals suivis
- [ ] Historique des prix avec graphiques
- [ ] Filtres par genre de jeu
- [ ] Mode sombre/clair

## 🤝 Contributions

Si tu veux contribuer au projet :

1. **Fork** le repo
2. **Crée une branche** pour ta feature
3. **Teste** tes modifications
4. **Pull request** avec description

---
