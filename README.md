# Portfolio – Mitia Razafimahefa

React + Vite. Tout le contenu est dans `src/data/profile.js`.

## Lancer en local
    npm install
    npm run dev        # http://localhost:5173

## Construire
    npm run build      # produit le dossier dist/

## Déployer (GitHub Pages)
1. Poussez le dépôt sur GitHub (branche main).
2. Settings > Pages > Source : "GitHub Actions".
3. Chaque `git push` sur main redéploie le site.

## Faire évoluer
- Nouveau projet ou poste : ajoutez un objet dans `profile.js`.
- Nouvelle section : créez un composant dans `src/components/` et ajoutez-le dans `App.jsx`.
