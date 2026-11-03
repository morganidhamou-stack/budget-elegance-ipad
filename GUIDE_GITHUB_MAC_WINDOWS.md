# Budget Élégance — installateurs Windows et Mac

Le projet reste identique sur les trois plateformes. La compilation s'effectue dans GitHub Actions.

## Première configuration (sur ton PC Windows)

1. Crée un dépôt **privé** vide sur github.com.
2. Copie le contenu de ce projet dans le dépôt, y compris le dossier caché `.github`.
3. Dans GitHub, ouvre **Actions** > **Build Budget Elegance** > **Run workflow**.
4. Attends la fin des trois compilations (premier lancement potentiellement long).
5. Ouvre la dernière exécution et télécharge les fichiers dans **Artifacts** : Windows, Mac Intel et Mac Apple Silicon.
6. Décompresse l'archive Artifacts et transmets le `.dmg` correspondant à ton amie.

Si tu ne sais pas quel Mac elle possède, demande-lui de consulter menu Apple > À propos de ce Mac. Un Mac M1/M2/M3/M4/M5 utilise Apple Silicon ; un Mac avec processeur Intel utilise l'autre version.

## Mises à jour

Après une modification du projet, envoie les changements sur GitHub puis relance le workflow manuellement. Tu peux aussi créer un tag commençant par `v` (exemple : `v1.0.1`) pour déclencher la compilation.

## Remarques importantes

- Ces installateurs ne sont **pas signés/notariés**. macOS peut bloquer l'ouverture initiale et afficher un avertissement de sécurité. Pour une distribution publique fluide, il faut une signature et notarisation Apple.
- Les données personnelles restent sur chaque appareil et ne sont pas synchronisées entre Windows et Mac.
- Ne partage pas le fichier de données personnelles dans le dépôt GitHub.
- La compilation GitHub nécessite Internet ; l'application installée est conçue pour fonctionner hors ligne.
- Le build macOS dépend des runners disponibles sur ton compte GitHub et de leur quota.
- Les exécutables seront produits par GitHub Actions, **pas inclus dans ce ZIP**.
