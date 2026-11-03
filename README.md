# Budget Élégance — application de bureau Tauri
Inspirée de la maquette transmise : rose poudré, prune, tableaux de bord, calendrier et abonnements.

## Prérequis Windows
Node.js LTS, Rust (rustup), Microsoft C++ Build Tools et WebView2 (généralement inclus dans Windows 11).

## Lancement
```powershell
npm install
npm run tauri dev
```
## Compilation .exe
```powershell
npm run tauri build
```
Installateur dans `src-tauri/target/release/bundle/`.

## Données
Stockage local via plugin Store de Tauri (`budget.json`), aucune connexion ni serveur nécessaires. En mode navigateur (`npm run dev`), repli sur localStorage pour tester l'interface. Export/import JSON via les boutons de l'interface. Les montants saisis sont positifs; la nature (revenu, dépense, épargne) détermine le calcul. Les abonnements sont des charges mensuelles, et ne doivent pas être dupliqués dans les transactions.

## Notes
Version initiale fonctionnelle, à tester sur le PC cible avant distribution. Ne pas importer de données sensibles sans sauvegarde préalable.
