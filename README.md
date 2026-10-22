# Wedicine — prototype

Plateforme marocaine de pré-consultation : le patient pose une question santé, reçoit une
information générale et des questions à poser à son médecin, puis voit un médecin généraliste
proche de chez lui, avec les avis de ses patients.

**Prototype : médecins et avis fictifs, médecine générale uniquement.**

## Lancer en local

```bash
npm install
npm run db:seed   # recrée data/wedicine.db
npm run dev       # http://localhost:3000
```

Node 22.13 ou plus récent (utilise le module intégré `node:sqlite`).

## Base de données (`data/`)

- `schema.sql` : tables `doctors`, `reviews`, `answers`, `consultation_requests`.
- `seed.mjs` : contenu initial (6 généralistes, 18 avis, 13 sujets + 1 réponse générale).
- `wedicine.db` : base SQLite générée par `npm run db:seed`.

Une réponse est choisie par mots-clés dans la table `answers`. Pour ajouter un sujet, ajoutez une
entrée dans `ANSWERS` de `seed.mjs` puis relancez `npm run db:seed`.

## Santé et consentement

- Deux cases à cocher obligatoires, non pré-cochées : réponse informative uniquement, et partage
  des données avec un médecin proche. Le serveur refuse toute requête sans ces deux accords.
- Les questions décrivant des signes graves affichent un renvoi vers le 15 / 141.
- Le formulaire ne demande ni nom ni CIN.
- Sur Vercel, la base est copiée dans `/tmp` : les questions enregistrées y sont éphémères.
  Pour la production, passer à une base hébergée (ex. Postgres) et déclarer le traitement à la CNDP
  (loi 09-08).
