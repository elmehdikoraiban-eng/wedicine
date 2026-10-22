-- Base Wedicine (SQLite). Prototype : médecine générale uniquement.

CREATE TABLE doctors (
  id           INTEGER PRIMARY KEY,
  name         TEXT NOT NULL,
  specialty    TEXT NOT NULL DEFAULT 'Médecine générale',
  city         TEXT NOT NULL,
  address      TEXT NOT NULL,
  distance_km  REAL NOT NULL,
  languages    TEXT NOT NULL,          -- liste séparée par des virgules
  price_mad    INTEGER NOT NULL,
  next_slot    TEXT NOT NULL,
  is_fictional INTEGER NOT NULL DEFAULT 1
);

CREATE TABLE reviews (
  id        INTEGER PRIMARY KEY,
  doctor_id INTEGER NOT NULL REFERENCES doctors(id),
  author    TEXT NOT NULL,
  rating    INTEGER NOT NULL CHECK (rating BETWEEN 1 AND 5),
  date      TEXT NOT NULL,
  text      TEXT NOT NULL
);

-- Réponses informatives validées, choisies par mots-clés.
CREATE TABLE answers (
  id          INTEGER PRIMARY KEY,
  topic       TEXT NOT NULL,
  specialty   TEXT NOT NULL DEFAULT 'Médecine générale',
  keywords    TEXT NOT NULL,           -- mots-clés séparés par des virgules
  summary     TEXT NOT NULL,
  explanation TEXT NOT NULL,           -- JSON : liste de paragraphes
  questions   TEXT NOT NULL,           -- JSON : questions à poser au médecin
  warning     TEXT                     -- signes qui doivent faire consulter vite
);

-- Questions envoyées avec consentement explicite, à transmettre au médecin.
CREATE TABLE consultation_requests (
  id           INTEGER PRIMARY KEY,
  created_at   TEXT NOT NULL DEFAULT (datetime('now')),
  question     TEXT NOT NULL,
  age          TEXT,
  sex          TEXT,
  city         TEXT NOT NULL,
  answer_id    INTEGER REFERENCES answers(id),
  doctor_id    INTEGER NOT NULL REFERENCES doctors(id),
  consent_info INTEGER NOT NULL CHECK (consent_info = 1),
  consent_share INTEGER NOT NULL CHECK (consent_share = 1),
  consent_at   TEXT NOT NULL,
  urgent       INTEGER NOT NULL DEFAULT 0
);
