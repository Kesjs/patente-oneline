# Patente di Guida Autentica

[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.0.6-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Application web moderne pour la gestion des demandes de permis de conduire, développée avec React, Vite et Tailwind CSS.

## ✨ Fonctionnalités

- Interface utilisateur réactive et moderne
- Chargement optimisé des performances
- Support PWA (Progressive Web App)
- Référencement SEO optimisé
- Compatibilité mobile et desktop
- Thème sombre/clair

## 🚀 Démarrage rapide

### Prérequis

- Node.js 18+ (recommandé : 20.19.0 ou supérieur)
- npm 9+ ou yarn 1.22+

### Installation

1. **Cloner le dépôt**
   ```bash
   git clone https://github.com/votre-utilisateur/patente-react.git
   cd patente-react
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   # ou
   yarn
   ```

3. **Lancer l'environnement de développement**
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

4. **Ouvrir dans le navigateur**
   L'application sera disponible à l'adresse : [http://localhost:3015](http://localhost:3015)

## 🛠 Commandes disponibles

- `npm run dev` - Lance le serveur de développement
- `npm run build` - Compile l'application pour la production
- `npm run preview` - Prévient l'application de production localement
- `npm run lint` - Exécute le linter sur le code source
- `npm run analyze` - Analyse la taille du bundle (après un build de production)

## 🏗 Structure du projet

```
src/
├── assets/           # Fichiers statiques (images, polices, etc.)
│   └── css/          # Fichiers CSS personnalisés
├── components/       # Composants React réutilisables
├── App.jsx           # Composant racine de l'application
└── main.jsx          # Point d'entrée de l'application
```

## 🔧 Configuration

### Variables d'environnement

Créez un fichier `.env` à la racine du projet avec les variables suivantes :

```env
VITE_API_URL=https://api.votredomaine.com
VITE_GOOGLE_ANALYTICS_ID=UA-XXXXXXXXX-X
```

### Configuration de déploiement

Le projet est configuré pour être déployé sur différentes plateformes :

- **Vercel** : Configuration automatique via `vercel.json`
- **Netlify** : Configuration via `netlify.toml`
- **Hébergement statique** : Fichiers générés dans le dossier `dist/`

## 📦 Technologies utilisées

- **React 18** - Bibliothèque JavaScript pour les interfaces utilisateur
- **Vite** - Outil de build et bundler
- **Tailwind CSS** - Framework CSS utilitaire
- **React Router** - Gestion des routes
- **Framer Motion** - Animations fluides
- **Heroicons** - Icônes SVG
- **Font Awesome** - Bibliothèque d'icônes

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 🙋‍♂️ Support

Pour toute question ou problème, veuillez ouvrir une [issue](https://github.com/votre-utilisateur/patente-react/issues).

## 📝 Notes de version

### 1.0.0 (2024-03-30)
- Version initiale du projet
- Migration complète vers React 18 et Vite
- Intégration de Tailwind CSS
- Configuration PWA
- Optimisations SEO
