### 🎲 GameOn Frontend - README.md

# GameOn Frontend

GameOn Frontend est l'interface utilisateur de l'application GameOn, développée avec **Nuxt 3**.

## 🚀 Installation et Lancement

### Prérequis
- [Node.js](https://nodejs.org/) (version recommandée : `18.x.x`)
- [Npm](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)
- Un backend fonctionnel ([GameOn Backend](https://github.com/CharlesBrouillier/gameon-backend))

### Installation
```sh
git clone https://github.com/ton-org/gameon-frontend.git
cd gameon-frontend
npm install
```

### Démarrer en mode développement
```sh
npm run dev
```
Le projet sera accessible sur `http://localhost:3000/gameon`.

### 🏗️ Build et exécution en production
```sh
npm run build && npm run preview
```

## 📦 Technologies utilisées
- **Nuxt 3** 🚀 (Vue.js Framework)
- **Pinia** 🏪 (Gestion d'état)
- **TailwindCSS** 🎨 (Stylisation)
- **Docker** 🐳 (Déploiement)
- **Vite** ⚡ (Build rapide)

## 🛠️ Configuration
Le fichier `.env` doit contenir :
```
API_PORT=xxxx
API_URL=http://localhost:${API_PORT}/api/v1
```

## 📌 Fonctionnalités
- Communication avec le backend via une API REST
- Sélection et filtrage des jeux selon plusieurs critères
- Affichage des détails d’un jeu

---

💡 **Besoin d’aide ?** Contacte-moi sur [mon email](brouilliercharles@gmail.com).

---
