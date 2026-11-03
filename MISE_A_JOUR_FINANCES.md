# Budget Élégance — fiabilisation financière et analyse

Version basée sur le projet 14 thèmes (tous les styles CSS conservés).

## Nouveautés

- Calculs en centimes, vérification stricte des dates et des montants à deux décimales.
- Report mensuel du solde et épargne cumulée avec contrôle chronologique des retraits (y compris décembre → janvier).
- Modification des transactions existantes via l'icône crayon ; les changements qui rendraient l'épargne négative sont refusés.
- Tarifs datés des abonnements : modifier un tarif à partir d'une date n'écrase pas les montants précédents.
- Budget prévisionnel : progression basée sur le montant spécifique au mois sélectionné.
- Nouvelle page « Analyse & contrôle » : solde calculé à aujourd'hui, solde prévisionnel fin du mois, rapprochement bancaire manuel et historique annuel.
- Rapprochement bancaire non destructif : le solde bancaire réel est comparé au solde calculé, sans correction automatique.
- Sauvegarde précédente disponible dans les paramètres ; import JSON précédé d'une exportation des données existantes.
- 12 tests automatisés sur le moteur financier.

## Installation Windows

1. Dans l'application existante, **exporter une sauvegarde JSON**.
2. Fermer l'application. Faire une copie du dossier source avant toute mise à jour.
3. Décompresser cette archive et remplacer les fichiers de l'application, ou uniquement `src/App.jsx`, `src/finance.js` et `src/style.css` dans votre projet actuel.
4. Depuis PowerShell, lancer `npm install`, puis `npm run tauri dev`.
5. Vérifier le tableau de bord, les transactions, les abonnements et « Analyse & contrôle ».
6. Pour générer les versions Mac/Windows, pousser le projet sur GitHub et relancer le workflow.

## Limites importantes

- Les transactions futures sont considérées comme prévues. Une dépense future non saisie ne peut pas être devinée.
- Les anciens abonnements dépourvus d'historique de changement de prix ne peuvent pas être reconstruits rétroactivement.
- Le rapprochement bancaire est manuel : il ne se connecte pas aux comptes bancaires.
- Les opérations et abonnements sont supposés débités/crédités à leur date enregistrée, sans gestion des délais de valeur bancaire.
- La restauration « version précédente » n'est pas un historique illimité. **Conserver des exports JSON réguliers**.
- Les calculs ont passé les tests Node. La compilation complète React/Tauri et les interactions de l'interface doivent être vérifiées sur votre machine avant distribution.
