# 🎮 GameDeals - Mon site de deals gaming

Salut ! 👋

Voici mon projet GameDeals, un site pour trouver les meilleures promos de jeux vidéo.

## !Disclaimer pour le momment ce sont des fausses donnée je suis au debut du project donc psa encore mit d'api ou de vrai données

## 🚀 Ce que fait le site

**GameDeals** c'est comme un Dealabs mais spécialement pour les jeux vidéo ! Tu peux :

- 🔍 **Rechercher des jeux** par nom en temps réel
- 🎛️ **Filtrer par plateforme** (Steam, Epic, PlayStation, etc.)
- 📊 **Voir les stats live** qui bougent comme en temps réel.
- 🎯 **Naviguer entre les sections** (Deals du moment, Tous les jeux, Comparateur)
- ✨ **Profiter des effets visuels** (particules, animations, design gaming)

## 🛠️ Technologies utilisées

- **HTML5** - Structure du site
- **CSS3** - Design et animations (avec variables CSS et responsive)
- **JavaScript Vanilla** - Toute la logique et interactivité
- **Font Awesome** - Pour les icônes

_Pas de frameworks pour l'instant, tout fait à la main pour bien apprendre les bases !_

## 🎨 Ce qui rend le site stylé

### Design Gaming

- **Thème sombre** avec des couleurs flashy (cyan, vert néon)
- **Particules animées** qui flottent en arrière-plan
- **Effets glow** sur les textes et boutons
- **Dégradés** et transparences partout

### Animations Live

- Les **stats du header** bougent toutes les 2 secondes
- La **hero section** a des compteurs animés
- Le **Command Center** simule un feed en temps réel
- **Radar qui tourne** pour l'effet "scan"

### Expérience Utilisateur

- **Recherche instantanée** dès que tu tapes
- **Filtres par plateforme** qui marchent vraiment
- **Navigation fluide** entre les sections
- **Site responsive** (ça marche sur mobile !)

## 📁 Structure du projet

```
gamedeals/
├── index.html          # Page principale
├── style.css          # Tous les styles (optimisé)
├── script.js          # Logique JavaScript
└── README.md          # Ce fichier !
```

## 🎯 Fonctionnalités principales

### 1. Navigation intelligente

- **3 onglets** : Deals du moment, Tous les jeux, Comparateur
- Chaque onglet affiche/masque les bonnes sections
- **Bouton actif** visuellement distinct

### 2. Système de recherche

- **Recherche par nom** : tape "minecraft" et hop !
- **Filtre par plateforme** : sélectionne "Steam" pour voir que les jeux Steam
- **Temps réel** : ça filtre pendant que tu tapes

### 3. Base de données dynamique

- **7 jeux** avec vraies données (prix, plateformes, notes)
- **Génération automatique** des cartes via JavaScript
- **Facile d'ajouter** de nouveaux jeux dans le tableau

### 4. Animations partout

- **Header** : Stats qui changent
- **Hero** : 3 compteurs animés
- **Command Center** : 4 stats live + radar
- **Cartes** : Effets hover stylés

## 🚧 Ce qui pourrait être amélioré

- [ ] Ajouter plus de jeux à la base de données
- [ ] Système de tri par prix/note
- [ ] Mode comparateur plus avancé
- [ ] Vraies données depuis des APIs gaming
- [ ] Système de favoris
- [ ] Historique des prix

## 🤝 Contributions

Si tu veux m'aider ou améliorer le projet :

1. **Fork** le repo
2. **Crée une branche** pour ta feature
3. **Fais tes modifs**
4. **Pull request** !
