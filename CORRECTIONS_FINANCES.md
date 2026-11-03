# Budget Élégance — correctifs financiers

- Les 14 thèmes et les feuilles de style existantes sont conservés.
- Les calculs sont centralisés dans `src/finance.js`, avec tests automatisés dans `tests/finance.test.mjs`.
- Le reliquat d'un mois est reporté ; les revenus ne sont pas comptés une deuxième fois.
- Les versements d'épargne diminuent le disponible et augmentent la cagnotte. Un retrait est refusé si le montant excède la cagnotte à la date de l'opération.
- La suspension d'un abonnement n'efface plus les mois passés. La reprise conserve aussi les intervalles de suspension ; la suppression depuis l'interface devient un arrêt à la date courante.
- Les prélèvements sont pris en compte selon leur jour réel (avec adaptation aux mois courts), leurs dates de début et de fin.
- Le budget prévisionnel est maintenant éditable par mois, avec reprise des anciens budgets globaux comme valeur par défaut.
- Les sauvegardes sont séquencées et les imports JSON validés avant remplacement.

## Limites et précautions

- Les abonnements déjà désactivés dans une ancienne sauvegarde ne disposent pas de leur date de désactivation historique : celle-ci ne peut pas être reconstituée automatiquement.
- Les modifications rétroactives peuvent changer les soldes suivants ; vérifiez l'historique après toute correction de date.
- Les retraits d'épargne déjà présents dans une ancienne sauvegarde ne sont pas automatiquement corrigés s'ils dépassent la cagnotte.
- L'application ne se connecte pas à votre banque et ne vérifie pas le solde bancaire réel.
- Effectuez un export JSON avant toute mise à jour. Ne supprimez pas les données locales.

## Vérification

Exécuter `node --test tests/*.test.mjs` pour vérifier les cas de calcul. Puis `npm install` et `npm run tauri dev` sur votre PC pour vérifier l'interface et la compilation native.
