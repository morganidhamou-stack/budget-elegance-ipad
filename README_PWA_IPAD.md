# Budget Élégance — version PWA iPad

Projet indépendant de la version Tauri. Le code financier et les 14 thèmes sont conservés.

## Tester sur Windows

`npm install` puis `npm run dev` (test local). Pour vérifier le mode hors ligne : `npm run build` puis `npm run preview`.

## Installer sur iPad

Publier le contenu du dossier `dist/` sur un hébergement **HTTPS** (par exemple GitHub Pages configuré à la racine d’un domaine, Netlify ou Cloudflare Pages). Ouvrir l’adresse dans Safari > Partager > Sur l’écran d’accueil. Lancer une fois en ligne, puis tester hors ligne.

**Important :** cette version utilise des chemins absolus `/` : elle est prévue pour être hébergée à la racine du domaine, pas sous `/Budget/` sur GitHub Pages sans adaptation.

## Stockage et confidentialité

Les données financières sont stockées localement dans IndexedDB ; les sauvegardes précédentes sont conservées dans la même base. Les données ne sont pas envoyées à l’hébergeur. Exporter régulièrement un fichier JSON dans Fichiers/iCloud Drive : supprimer l’application ou les données Safari peut effacer le budget. Ne pas utiliser le mode navigation privée.

## État

Version de test à valider sur un iPad réel : interactions tactiles, téléchargement et import JSON, reprise hors ligne et persistance après fermeture. Ne pas y saisir de données irremplaçables sans sauvegarde externe.
