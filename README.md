# Wedicine

Plateforme marocaine de pré-consultation (FR / AR / EN) : le patient répond à quelques choix
illustrés, crée un compte, puis lit une fiche claire (est-ce grave, que faire en attendant, quel
médecin, quels examens, questions à poser). Chaque question peut être publiée anonymement sur la
page publique du symptôme pour le référencement.

## Pile technique

- [Astro 5](https://astro.build) en rendu serveur, adaptateur Vercel, îlots React pour le
  formulaire, l'authentification et la publication.
- Postgres (Supabase ou autre) via `DATABASE_URL` (ou `POSTGRES_URL` fourni par l'intégration Vercel) ; sans cette variable, base locale PGlite dans `data/pglite`
  (en mémoire sur Vercel, donc perdue à chaque déploiement).
- Contenu médical dans `src/lib/content/fiches/*.ts`, structure du formulaire dans
  `src/lib/content/themes.ts` et `options.ts`.

## Lancer en local

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # produit .vercel/output
npm run typecheck  # astro check
```

## Variables d'environnement

| Variable            | Rôle                                                                  |
| ------------------- | --------------------------------------------------------------------- |
| `DATABASE_URL`      | Postgres (Supabase, chaîne « Transaction pooler »). Obligatoire en production pour conserver les comptes. |
| `PUBLIC_SITE_URL`   | Adresse publique (liens canoniques, sitemap).                         |
| `CONTENT_REVIEWED`  | Mettre `1` après relecture médicale : les pages deviennent indexables. |

## Parcours

1. `/[lang]/question` : formulaire à choix (qui, sujet, symptôme, zone, intensité, durée, signes, profil, intention).
   Un signe d'alerte interrompt le parcours et affiche les numéros d'urgence (15 / 141), sans compte.
2. `/api/questions` enregistre la question et renvoie vers `/[lang]/connexion?q=ID`.
3. `/[lang]/connexion` : création de compte ou connexion. Rien de la réponse n'est affiché avant.
4. `/[lang]/compte/q/ID` : la réponse complète, personnalisée (« Dans votre cas »), avec le choix de publier.
5. `/[lang]/q/[slug]` : page publique par symptôme et intention, avec les patients qui ont accepté
   la publication (prénom + initiale, tranche d'âge, ville).

## Santé et consentement

- Cases obligatoires, non pré-cochées : réponse informative uniquement ; conditions et
  confidentialité (loi 09-08). Publication sur la page publique : case séparée, facultative,
  réversible depuis le compte.
- Aucune donnée nominative publiée ; les urgences ne sont jamais publiées.
- Les pages restent `noindex` tant que `CONTENT_REVIEWED` n'est pas à `1`.
