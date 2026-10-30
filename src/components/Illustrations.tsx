// Illustrations vectorielles dans la palette Trello (bleu #0065FF, violet #8777D9, cyan #00C7E5, marine #091E42).
import type { CSSProperties } from "react";
import { Icon } from "./Icon";
// Elles sont décoratives : le texte à côté porte le sens.

const C = { blue: "#0065FF", deep: "#0747A6", purple: "#8777D9", teal: "#00C7E5", navy: "#091E42", tint: "#DEEBFF", grey: "#F4F5F7", line: "#DFE1E6", white: "#FFFFFF", red: "#DE354C", green: "#36B37E", yellow: "#FFAB00", skin: "#F3C9A6" };

type P = { className?: string; rtl?: boolean };

// Téléphone affichant le formulaire (écran « C'est pour qui ? »).
export function PhoneForm({ className }: P) {
  return (
    <svg viewBox="0 0 520 480" className={className} role="img" aria-hidden="true">
      <circle cx="400" cy="120" r="90" fill={C.tint} />
      <circle cx="90" cy="380" r="60" fill={C.grey} />
      <rect x="150" y="30" width="220" height="430" rx="30" fill={C.navy} />
      <rect x="160" y="42" width="200" height="406" rx="22" fill={C.white} />
      <rect x="225" y="52" width="70" height="8" rx="4" fill={C.navy} opacity=".15" />
      <rect x="176" y="80" width="168" height="6" rx="3" fill={C.line} />
      <rect x="176" y="80" width="40" height="6" rx="3" fill={C.blue} />
      <rect x="176" y="100" width="120" height="12" rx="3" fill={C.navy} />
      <rect x="176" y="118" width="70" height="7" rx="3" fill={C.line} />
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(176 ${142 + i * 86})`}>
          <rect width="168" height="72" rx="8" fill={i === 0 ? C.tint : C.white} stroke={i === 0 ? C.blue : C.line} strokeWidth="2" />
          <rect x="12" y="14" width="44" height="44" rx="8" fill={i === 0 ? C.blue : C.grey} />
          <circle cx="34" cy="30" r="8" fill={i === 0 ? C.white : C.purple} />
          <path d="M20 54c2-10 8-14 14-14s12 4 14 14" fill={i === 0 ? C.white : C.purple} />
          <rect x="68" y="24" width="80" height="10" rx="3" fill={C.navy} opacity=".8" />
          <rect x="68" y="42" width="50" height="7" rx="3" fill={C.line} />
          {i === 0 && <circle cx="148" cy="36" r="9" fill={C.blue} />}
          {i === 0 && <path d="M143 36l4 4 7-8" stroke={C.white} strokeWidth="2.5" fill="none" strokeLinecap="round" />}
        </g>
      ))}
      <rect x="176" y="404" width="168" height="34" rx="3" fill={C.blue} />
      <rect x="226" y="417" width="68" height="8" rx="3" fill={C.white} />
      {/* main qui touche */}
      <g transform="translate(300 300) rotate(-20)">
        <path d="M20 120c-18-20-30-60-18-72 8-8 18 0 24 16V10c0-8 14-8 14 0v60c0-8 14-8 14 0v8c0-8 14-8 14 0v12c0-8 14-8 14 0v50c0 30-18 44-40 44S30 134 20 120z" fill={C.skin} stroke={C.navy} strokeWidth="3" strokeLinejoin="round" />
      </g>
      {/* cartes flottantes */}
      <g transform="translate(20 90)">
        <rect width="130" height="56" rx="8" fill={C.white} stroke={C.line} strokeWidth="2" />
        <rect x="12" y="12" width="32" height="32" rx="6" fill={C.purple} />
        <rect x="54" y="16" width="60" height="9" rx="3" fill={C.navy} opacity=".8" />
        <rect x="54" y="32" width="40" height="7" rx="3" fill={C.line} />
      </g>
      <g transform="translate(372 330)">
        <rect width="130" height="56" rx="8" fill={C.white} stroke={C.line} strokeWidth="2" />
        <rect x="12" y="12" width="32" height="32" rx="6" fill={C.teal} />
        <rect x="54" y="16" width="60" height="9" rx="3" fill={C.navy} opacity=".8" />
        <rect x="54" y="32" width="40" height="7" rx="3" fill={C.line} />
      </g>
    </svg>
  );
}

// Étape 1 : une grille de choix et un doigt qui sélectionne.
export function Choose({ className }: P) {
  return (
    <svg viewBox="0 0 320 220" className={className} role="img" aria-hidden="true">
      <rect x="20" y="20" width="280" height="180" rx="12" fill={C.grey} />
      {[0, 1, 2, 3, 4, 5].map((i) => {
        const x = 40 + (i % 3) * 86, y = 40 + Math.floor(i / 3) * 76;
        const on = i === 4;
        return (
          <g key={i} transform={`translate(${x} ${y})`}>
            <rect width="74" height="62" rx="8" fill={on ? C.tint : C.white} stroke={on ? C.blue : C.line} strokeWidth="2" />
            <rect x="10" y="10" width="22" height="22" rx="5" fill={[C.blue, C.purple, C.teal, C.yellow, C.blue, C.green][i]} />
            <rect x="10" y="42" width="44" height="7" rx="3" fill={C.navy} opacity=".7" />
            {on && <circle cx="60" cy="16" r="8" fill={C.blue} />}
            {on && <path d="M56 16l3 3 5-6" stroke={C.white} strokeWidth="2" fill="none" strokeLinecap="round" />}
          </g>
        );
      })}
      <g transform="translate(205 120) rotate(-15)">
        <path d="M14 70c-10-12-18-36-10-44 5-5 11 0 14 10V8c0-6 10-6 10 0v36c0-6 10-6 10 0v6c0-6 10-6 10 0v8c0-6 10-6 10 0v30c0 18-11 28-27 28S20 80 14 70z" fill={C.skin} stroke={C.navy} strokeWidth="2.5" strokeLinejoin="round" />
      </g>
    </svg>
  );
}

// Étape 2 : fiche de compte avec cadenas ouvert.
export function Account({ className }: P) {
  return (
    <svg viewBox="0 0 320 220" className={className} role="img" aria-hidden="true">
      <circle cx="250" cy="60" r="40" fill={C.tint} />
      <rect x="40" y="40" width="220" height="150" rx="12" fill={C.white} stroke={C.line} strokeWidth="2" />
      <circle cx="80" cy="80" r="20" fill={C.purple} />
      <circle cx="80" cy="73" r="7" fill={C.white} />
      <path d="M66 94c3-9 8-12 14-12s11 3 14 12" fill={C.white} />
      <rect x="112" y="68" width="90" height="10" rx="3" fill={C.navy} opacity=".8" />
      <rect x="112" y="86" width="60" height="7" rx="3" fill={C.line} />
      <rect x="60" y="116" width="180" height="22" rx="4" fill={C.grey} stroke={C.line} />
      <rect x="70" y="123" width="90" height="8" rx="3" fill={C.navy} opacity=".3" />
      <rect x="60" y="148" width="180" height="22" rx="4" fill={C.grey} stroke={C.line} />
      <g fill={C.navy} opacity=".5">{[0, 1, 2, 3, 4, 5].map((i) => <circle key={i} cx={76 + i * 12} cy="159" r="3" />)}</g>
      <g transform="translate(222 142)">
        <circle r="26" fill={C.green} />
        <rect x="-10" y="-4" width="20" height="16" rx="3" fill={C.white} />
        <path d="M-6 -4v-5a6 6 0 0 1 12 0" stroke={C.white} strokeWidth="3" fill="none" transform="rotate(-25 6 -9)" />
      </g>
    </svg>
  );
}

// Étape 3 : fiche réponse avec liste de questions cochées et stéthoscope.
export function AnswerSheet({ className }: P) {
  return (
    <svg viewBox="0 0 320 220" className={className} role="img" aria-hidden="true">
      <rect x="30" y="20" width="200" height="190" rx="10" fill={C.white} stroke={C.line} strokeWidth="2" />
      <rect x="30" y="20" width="200" height="34" rx="10" fill={C.blue} />
      <rect x="30" y="40" width="200" height="14" fill={C.blue} />
      <rect x="46" y="31" width="100" height="10" rx="3" fill={C.white} />
      <rect x="46" y="68" width="140" height="9" rx="3" fill={C.navy} opacity=".8" />
      <rect x="46" y="84" width="168" height="6" rx="3" fill={C.line} />
      <rect x="46" y="96" width="150" height="6" rx="3" fill={C.line} />
      <rect x="46" y="108" width="160" height="6" rx="3" fill={C.line} />
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(46 ${130 + i * 24})`}>
          <rect width="16" height="16" rx="4" fill={i < 2 ? C.green : C.white} stroke={i < 2 ? C.green : C.line} strokeWidth="2" />
          {i < 2 && <path d="M4 8l3 3 5-6" stroke={C.white} strokeWidth="2" fill="none" strokeLinecap="round" />}
          <rect x="26" y="4" width={120 - i * 20} height="8" rx="3" fill={C.navy} opacity=".6" />
        </g>
      ))}
      <g transform="translate(250 90)">
        <circle r="38" fill={C.tint} />
        <path d="M-16 -22v18a16 16 0 0 0 32 0v-18" stroke={C.navy} strokeWidth="4" fill="none" strokeLinecap="round" />
        <path d="M0 12v10a12 12 0 0 0 24 0v-8" stroke={C.navy} strokeWidth="4" fill="none" strokeLinecap="round" />
        <circle cx="24" cy="10" r="7" fill={C.purple} stroke={C.navy} strokeWidth="3" />
        <circle cx="-16" cy="-24" r="3" fill={C.navy} /><circle cx="16" cy="-24" r="3" fill={C.navy} />
      </g>
    </svg>
  );
}

// Urgence : téléphone avec sirène et numéro 15.
export function Urgent({ className }: P) {
  return (
    <svg viewBox="0 0 320 220" className={className} role="img" aria-hidden="true">
      <circle cx="160" cy="110" r="90" fill="#FFEBE6" />
      <rect x="110" y="30" width="100" height="170" rx="18" fill={C.navy} />
      <rect x="116" y="38" width="88" height="154" rx="12" fill={C.white} />
      <g transform="translate(160 86)">
        <path d="M-20 10a20 20 0 0 1 40 0v10h-40z" fill={C.red} />
        <rect x="-26" y="20" width="52" height="8" rx="3" fill={C.navy} />
        <path d="M0 -24v-10M-18 -17l-7-7M18 -17l7-7" stroke={C.red} strokeWidth="4" strokeLinecap="round" />
      </g>
      <text x="160" y="150" textAnchor="middle" fontFamily="inherit" fontWeight="700" fontSize="28" fill={C.red}>15</text>
      <rect x="130" y="166" width="60" height="14" rx="3" fill={C.red} />
      <circle cx="60" cy="60" r="10" fill={C.red} opacity=".3" /><circle cx="270" cy="150" r="14" fill={C.red} opacity=".2" />
    </svg>
  );
}

// Entraide : bulles avec prénom + initiale.
export function Community({ className }: P) {
  return (
    <svg viewBox="0 0 320 220" className={className} role="img" aria-hidden="true">
      {[{ x: 30, y: 30, c: C.blue, w: 150 }, { x: 140, y: 90, c: C.purple, w: 150 }, { x: 50, y: 150, c: C.teal, w: 160 }].map((b, i) => (
        <g key={i} transform={`translate(${b.x} ${b.y})`}>
          <rect width={b.w} height="50" rx="10" fill={C.white} stroke={C.line} strokeWidth="2" />
          <circle cx="24" cy="25" r="14" fill={b.c} />
          <circle cx="24" cy="20" r="5" fill={C.white} />
          <path d="M14 34c2-6 6-8 10-8s8 2 10 8" fill={C.white} />
          <rect x="46" y="14" width="60" height="9" rx="3" fill={C.navy} opacity=".8" />
          <rect x="46" y="29" width="80" height="6" rx="3" fill={C.line} />
        </g>
      ))}
      <g transform="translate(262 50)">
        <circle r="24" fill={C.tint} />
        <circle r="10" fill={C.navy} opacity=".2" />
        <path d="M-6 0l4 4 8-8" stroke={C.blue} strokeWidth="3" fill="none" strokeLinecap="round" />
      </g>
    </svg>
  );
}

/* ----- Illustrations de la réponse : elles expliquent le contenu à partir des choix du patient. ----- */

// Frise « depuis quand » : les paliers de durée, la position du patient et le seuil à partir duquel on conseille de consulter.
export function DurationTimeline({ labels, current, threshold, youAreHere, consultFrom, rtl }: {
  labels: string[]; current: number; threshold: number; youAreHere: string; consultFrom: string; rtl?: boolean;
}) {
  const n = labels.length;
  const W = 520, H = 150, x0 = 40, x1 = W - 40, y = 70;
  const xs = labels.map((_, i) => x0 + ((x1 - x0) * i) / (n - 1));
  const tx = threshold < n ? xs[threshold] : null;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={youAreHere} className="art-timeline" style={rtl ? { transform: "scaleX(-1)" } : undefined}>
      <line x1={x0} y1={y} x2={x1} y2={y} stroke={C.line} strokeWidth="6" strokeLinecap="round" />
      {tx != null && <line x1={tx} y1={y} x2={x1} y2={y} stroke={C.red} strokeWidth="6" strokeLinecap="round" opacity=".35" />}
      {current >= 0 && <line x1={x0} y1={y} x2={xs[current]} y2={y} stroke={C.blue} strokeWidth="6" strokeLinecap="round" />}
      {xs.map((x, i) => (
        <g key={i}>
          <circle cx={x} cy={y} r={i === current ? 11 : 7} fill={i === current ? C.blue : i >= threshold ? C.red : C.white} stroke={i === current ? C.blue : i >= threshold ? C.red : C.line} strokeWidth="3" />
          {i === current && <circle cx={x} cy={y} r="4" fill={C.white} />}
          <text x={x} y={y + 32} textAnchor="middle" fontSize="12" fill={C.navy} fontFamily="inherit" style={rtl ? { transform: "scaleX(-1)", transformOrigin: `${x}px ${y + 32}px` } : undefined}>{labels[i]}</text>
        </g>
      ))}
      {current >= 0 && (
        <g style={rtl ? { transform: "scaleX(-1)", transformOrigin: `${xs[current]}px 30px` } : undefined}>
          <rect x={xs[current] - 46} y="14" width="92" height="24" rx="12" fill={C.blue} />
          <text x={xs[current]} y="30" textAnchor="middle" fontSize="12" fontWeight="500" fill={C.white} fontFamily="inherit">{youAreHere}</text>
        </g>
      )}
      {tx != null && (
        <g style={rtl ? { transform: "scaleX(-1)", transformOrigin: `${tx}px ${H - 14}px` } : undefined}>
          <text x={tx} y={H - 10} textAnchor="middle" fontSize="12" fontWeight="500" fill={C.red} fontFamily="inherit">▲ {consultFrom}</text>
        </g>
      )}
    </svg>
  );
}

// Jauge d'intensité : cinq paliers, celui du patient en couleur.
export function IntensityGauge({ labels, current, rtl }: { labels: string[]; current: number; rtl?: boolean }) {
  const colors = [C.green, "#7AC1F0", C.yellow, "#FF7452", C.red];
  return (
    <div className="gauge" dir={rtl ? "rtl" : "ltr"}>
      {labels.map((l, i) => (
        <div key={i} className={`gauge-step${i === current ? " on" : ""}${i <= current ? " filled" : ""}`} style={{ "--c": colors[i] } as CSSProperties}>
          <span className="bar" />
          <span className="lbl">{l}</span>
        </div>
      ))}
    </div>
  );
}

// Vignette de thème : fond coloré, grande icône, formes décoratives.
export function ThemeArt({ icon, tone = "blue", className }: { icon: string; tone?: "blue" | "red" | "purple" | "teal"; className?: string }) {
  const bg = { blue: C.tint, red: "#FFEBE6", purple: "#EAE6FF", teal: "#E6FCFF" }[tone];
  const fg = { blue: C.blue, red: C.red, purple: C.purple, teal: "#00A3BF" }[tone];
  return (
    <div className={`theme-art ${className ?? ""}`} style={{ background: bg, color: fg }} aria-hidden="true">
      <svg viewBox="0 0 120 120" className="deco"><circle cx="96" cy="26" r="16" fill={fg} opacity=".18" /><circle cx="22" cy="98" r="10" fill={fg} opacity=".18" /><circle cx="100" cy="100" r="6" fill={fg} opacity=".25" /></svg>
      <Icon name={icon} size={56} strokeWidth={1.5} />
    </div>
  );
}

// Scènes de section : une par bloc de la réponse.
export function ArtGrave() {
  return (
    <svg viewBox="0 0 160 120" role="img" aria-hidden="true">
      <circle cx="80" cy="60" r="50" fill="#FFEBE6" />
      <path d="M80 22l34 14v22c0 20-14 34-34 42-20-8-34-22-34-42V36z" fill={C.white} stroke={C.red} strokeWidth="3" strokeLinejoin="round" />
      <path d="M80 44v22" stroke={C.red} strokeWidth="5" strokeLinecap="round" /><circle cx="80" cy="78" r="3.5" fill={C.red} />
      <circle cx="128" cy="30" r="6" fill={C.red} opacity=".3" /><circle cx="30" cy="92" r="4" fill={C.red} opacity=".3" />
    </svg>
  );
}
export function ArtMeanwhile() {
  return (
    <svg viewBox="0 0 160 120" role="img" aria-hidden="true">
      <circle cx="80" cy="60" r="50" fill={C.tint} />
      <circle cx="64" cy="58" r="26" fill={C.white} stroke={C.blue} strokeWidth="3" />
      <path d="M64 42v16l10 7" stroke={C.blue} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M100 68h26v16c0 8-6 14-13 14s-13-6-13-14z" fill={C.white} stroke={C.navy} strokeWidth="3" />
      <path d="M126 72h6a6 6 0 0 1 0 12h-6" stroke={C.navy} strokeWidth="3" fill="none" />
      <path d="M107 60c0-5 4-5 4-10M115 60c0-5 4-5 4-10" stroke={C.navy} strokeWidth="2.5" strokeLinecap="round" fill="none" opacity=".6" />
    </svg>
  );
}
export function ArtDoctor() {
  return (
    <svg viewBox="0 0 160 120" role="img" aria-hidden="true">
      <circle cx="80" cy="60" r="50" fill="#EAE6FF" />
      <circle cx="80" cy="44" r="16" fill={C.skin} stroke={C.navy} strokeWidth="2.5" />
      <path d="M64 36c4-10 28-10 32 0" fill={C.navy} />
      <path d="M48 108c2-22 16-34 32-34s30 12 32 34" fill={C.white} stroke={C.navy} strokeWidth="2.5" />
      <path d="M70 76l10 12 10-12" fill={C.purple} />
      <path d="M62 80c-8 6-10 14-6 24" stroke={C.navy} strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <circle cx="56" cy="106" r="5" fill={C.purple} stroke={C.navy} strokeWidth="2" />
    </svg>
  );
}
export function ArtExams() {
  return (
    <svg viewBox="0 0 160 120" role="img" aria-hidden="true">
      <circle cx="80" cy="60" r="50" fill="#E6FCFF" />
      <g transform="translate(52 30)"><rect width="14" height="60" rx="7" fill={C.white} stroke={C.navy} strokeWidth="2.5" /><rect x="2.5" y="30" width="9" height="27" rx="4.5" fill={C.teal} /></g>
      <g transform="translate(76 22)"><rect width="14" height="68" rx="7" fill={C.white} stroke={C.navy} strokeWidth="2.5" /><rect x="2.5" y="24" width="9" height="41" rx="4.5" fill={C.purple} /></g>
      <g transform="translate(100 36)"><rect width="14" height="54" rx="7" fill={C.white} stroke={C.navy} strokeWidth="2.5" /><rect x="2.5" y="34" width="9" height="17" rx="4.5" fill={C.blue} /></g>
      <rect x="44" y="92" width="76" height="6" rx="3" fill={C.navy} opacity=".5" />
    </svg>
  );
}
export function ArtQuestions() {
  return (
    <svg viewBox="0 0 160 120" role="img" aria-hidden="true">
      <circle cx="80" cy="60" r="50" fill={C.grey} />
      <rect x="46" y="24" width="68" height="76" rx="8" fill={C.white} stroke={C.navy} strokeWidth="2.5" />
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(56 ${38 + i * 18})`}>
          <rect width="12" height="12" rx="3" fill={i < 2 ? C.green : C.white} stroke={i < 2 ? C.green : C.line} strokeWidth="2" />
          {i < 2 && <path d="M3 6l2.5 2.5L9 4" stroke={C.white} strokeWidth="2" fill="none" strokeLinecap="round" />}
          <rect x="18" y="3" width={i === 1 ? 30 : 40} height="6" rx="3" fill={C.navy} opacity=".55" />
        </g>
      ))}
      <path d="M118 44c8 0 12-6 12-12s-4-10-10-10-10 4-10 10" stroke={C.blue} strokeWidth="3" fill="none" strokeLinecap="round" /><circle cx="118" cy="52" r="2.5" fill={C.blue} />
    </svg>
  );
}
export function ArtKnow() {
  return (
    <svg viewBox="0 0 160 120" role="img" aria-hidden="true">
      <circle cx="80" cy="60" r="50" fill={C.tint} />
      <path d="M50 36c10-8 20-8 30 0 10-8 20-8 30 0v52c-10-8-20-8-30 0-10-8-20-8-30 0z" fill={C.white} stroke={C.navy} strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M80 36v52" stroke={C.navy} strokeWidth="2.5" />
      {[0, 1, 2].map((i) => <rect key={i} x="57" y={48 + i * 11} width="16" height="4" rx="2" fill={C.blue} opacity=".6" />)}
      {[0, 1, 2].map((i) => <rect key={i} x="87" y={48 + i * 11} width="16" height="4" rx="2" fill={C.blue} opacity=".6" />)}
      <circle cx="120" cy="30" r="12" fill={C.yellow} /><path d="M116 30l3 3 6-6" stroke={C.white} strokeWidth="2.5" fill="none" strokeLinecap="round" />
    </svg>
  );
}

// ----- Grandes scènes du verdict : ce que la personne doit faire, en un coup d'œil. -----
// Niveau 0 : surveiller à la maison.
export function ArtWatchHome() {
  return (
    <svg viewBox="0 0 240 180" role="img" aria-hidden="true" className="verdict-art">
      <circle cx="120" cy="90" r="78" fill="#E3FCEF" />
      <path d="M52 92l68-50 68 50v58a6 6 0 0 1-6 6H58a6 6 0 0 1-6-6z" fill={C.white} stroke={C.navy} strokeWidth="3" strokeLinejoin="round" />
      <path d="M40 96l80-60 80 60" fill="none" stroke={C.navy} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="104" y="116" width="32" height="40" rx="4" fill="#36B37E" />
      <circle cx="130" cy="137" r="2.5" fill={C.white} />
      <rect x="66" y="108" width="24" height="20" rx="3" fill="#DEEBFF" stroke={C.navy} strokeWidth="2" />
      <rect x="150" y="108" width="24" height="20" rx="3" fill="#DEEBFF" stroke={C.navy} strokeWidth="2" />
      <circle cx="190" cy="46" r="22" fill={C.white} stroke="#36B37E" strokeWidth="3" />
      <path d="M190 32v14l9 6" stroke="#36B37E" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M30 148c10-10 24-10 34 0" stroke="#36B37E" strokeWidth="3" strokeLinecap="round" fill="none" opacity=".6" />
      <path d="M176 148c10-10 24-10 34 0" stroke="#36B37E" strokeWidth="3" strokeLinecap="round" fill="none" opacity=".6" />
    </svg>
  );
}
// Niveau 1 : rendez-vous cette semaine.
export function ArtAppointment() {
  return (
    <svg viewBox="0 0 240 180" role="img" aria-hidden="true" className="verdict-art">
      <circle cx="120" cy="90" r="78" fill="#DEEBFF" />
      <rect x="56" y="40" width="128" height="110" rx="12" fill={C.white} stroke={C.navy} strokeWidth="3" />
      <rect x="56" y="40" width="128" height="30" rx="12" fill="#0065FF" />
      <rect x="56" y="58" width="128" height="12" fill="#0065FF" />
      <rect x="80" y="28" width="8" height="24" rx="4" fill={C.navy} /><rect x="152" y="28" width="8" height="24" rx="4" fill={C.navy} />
      {[0, 1, 2, 3].map((c) => [0, 1, 2].map((r) => (
        <rect key={`${c}${r}`} x={72 + c * 26} y={82 + r * 22} width="18" height="14" rx="3" fill={c === 2 && r === 1 ? "#0065FF" : "#F4F5F7"} />
      )))}
      <circle cx="176" cy="126" r="26" fill="#36B37E" stroke={C.white} strokeWidth="4" />
      <path d="M164 126l8 8 16-16" stroke={C.white} strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="40" cy="60" r="14" fill="#F3C9A6" stroke={C.navy} strokeWidth="2.5" />
      <path d="M26 54c4-8 24-8 28 0" fill={C.navy} />
      <path d="M22 100c2-16 10-26 18-26s16 10 18 26" fill={C.white} stroke={C.navy} strokeWidth="2.5" />
      <path d="M34 78l6 8 6-8" fill="#8777D9" />
    </svg>
  );
}
// Niveau 2 : consulter sous 48 heures.
export function ArtSoon() {
  return (
    <svg viewBox="0 0 240 180" role="img" aria-hidden="true" className="verdict-art">
      <circle cx="120" cy="90" r="78" fill="#FFF0E0" />
      <circle cx="110" cy="92" r="52" fill={C.white} stroke={C.navy} strokeWidth="3.5" />
      <circle cx="110" cy="92" r="44" fill="none" stroke="#FF8B00" strokeWidth="8" strokeDasharray="140 200" strokeLinecap="round" transform="rotate(-90 110 92)" />
      <path d="M110 60v32l20 12" stroke={C.navy} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <circle cx="110" cy="92" r="4" fill={C.navy} />
      <rect x="150" y="104" width="60" height="30" rx="15" fill="#FF8B00" />
      <text x="180" y="125" textAnchor="middle" fontFamily="inherit" fontWeight="700" fontSize="17" fill={C.white}>48 h</text>
      <rect x="166" y="30" width="34" height="56" rx="8" fill={C.white} stroke={C.navy} strokeWidth="3" />
      <rect x="172" y="38" width="22" height="34" rx="3" fill="#DEEBFF" />
      <circle cx="183" cy="78" r="2.5" fill={C.navy} />
      <path d="M46 118l4-10 4 10" stroke="#FF8B00" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M36 134l6-16 6 16" stroke="#FF8B00" strokeWidth="3" fill="none" strokeLinecap="round" opacity=".5" />
    </svg>
  );
}

// ----- « Dans votre cas », version lisible : barre à paliers et visages, en HTML. -----
import type React from "react";
import { Icon as PictoIcon } from "./Icon";

// Durée : 5 paliers. Vert avant le seuil de consultation, rouge à partir du seuil, le palier choisi en plein.
export function DurationSteps({ labels, current, threshold, youAreHere, consultFrom }: {
  labels: string[]; current: number; threshold: number; youAreHere: string; consultFrom: string;
}) {
  return (
    <div className="dsteps">
      <div className="dsteps-row" role="img" aria-label={`${youAreHere}: ${labels[current] ?? ""}`}>
        {labels.map((l, i) => (
          <div key={i} className={`dstep${i === current ? " on" : ""}${i >= threshold ? " late" : ""}`}>
            <span className="here">{i === current ? youAreHere : " "}</span>
            <span className="bar" />
            <span className="lbl">{l}</span>
          </div>
        ))}
      </div>
      {labels[threshold] && <p className="dsteps-note"><span className="dot" />{consultFrom} : <b>{labels[threshold]}</b></p>}
    </div>
  );
}

// Intensité : 5 visages, du sourire au cri ; le visage choisi est grand et coloré.
const FACES = ["Smile", "Meh", "Frown", "Annoyed", "Angry"] as const;
const FACE_COLORS = ["#36B37E", "#4C9AFF", "#FFAB00", "#FF8B00", "#DE354C"];
export function IntensityFaces({ labels, current }: { labels: string[]; current: number }) {
  return (
    <div className="faces" role="img" aria-label={labels[current] ?? ""}>
      {labels.map((l, i) => (
        <div key={i} className={`face${i === current ? " on" : ""}`} style={{ "--c": FACE_COLORS[i] } as React.CSSProperties}>
          <span className="ico"><PictoIcon name={FACES[i] ?? "Meh"} size={i === current ? 36 : 24} /></span>
          <span className="lbl">{l}</span>
        </div>
      ))}
    </div>
  );
}

// ----- Scènes des 12 sujets (ruban de l'accueil). Même style : traits bleu marine, aplats pastel. -----
const S = { bg: "#EEF4FF", bg2: "#EAE6FF", bg3: "#E6FCFF", bg4: "#FFF4F2", bg5: "#E3FCEF", bg6: "#FFFAE6" };
const head = (cx: number, cy: number, r = 22) => (
  <>
    <circle cx={cx} cy={cy} r={r} fill={C.skin} stroke={C.navy} strokeWidth="2.5" />
    <path d={`M${cx - r + 2} ${cy - r * 0.4}c${r * 0.3}-${r * 0.9} ${r * 1.5}-${r * 0.9} ${r * 1.8} 0`} fill={C.navy} />
  </>
);
const body = (cx: number, top: number, w: number, h: number, fill: string) => (
  <path d={`M${cx - w / 2} ${top + h}c2-${h * 0.75} ${w * 0.4}-${h} ${w / 2}-${h}s${w / 2 - 2} ${h * 0.25} ${w / 2} ${h}`} fill={fill} stroke={C.navy} strokeWidth="2.5" />
);
export function TopicScene({ id }: { id: string }) {
  const W = 200, H = 150;
  const wrap = (bg: string, children: React.ReactNode) => (
    <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-hidden="true" className="topic-scene">
      <rect width={W} height={H} rx="18" fill={bg} />
      {children}
    </svg>
  );
  switch (id) {
    case "fievre": return wrap(S.bg4, <>
      <rect x="30" y="86" width="140" height="40" rx="10" fill={C.white} stroke={C.navy} strokeWidth="2.5" />
      <rect x="40" y="76" width="44" height="18" rx="9" fill={C.white} stroke={C.navy} strokeWidth="2.5" />
      {head(62, 66, 18)}
      <path d="M92 90h66v18H92z" fill={C.tint} />
      <rect x="128" y="28" width="12" height="52" rx="6" fill={C.white} stroke={C.red} strokeWidth="2.5" />
      <rect x="131.5" y="48" width="5" height="30" rx="2.5" fill={C.red} /><circle cx="134" cy="82" r="7" fill={C.red} />
      <path d="M100 40c0-6 6-6 6-12M112 40c0-6 6-6 6-12" stroke={C.red} strokeWidth="2.5" strokeLinecap="round" fill="none" opacity=".6" />
    </>);
    case "rhume": return wrap(S.bg3, <>
      {head(80, 70, 30)}
      <path d="M72 78c4 4 12 4 16 0" stroke={C.navy} strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <circle cx="80" cy="74" r="4" fill={C.red} opacity=".8" />
      <path d="M118 60c10-4 16 2 22 0M118 72c10-4 16 2 22 0M118 84c10-4 16 2 22 0" stroke={C.teal} strokeWidth="3" strokeLinecap="round" fill="none" />
      <rect x="40" y="108" width="120" height="22" rx="11" fill={C.white} stroke={C.navy} strokeWidth="2.5" />
      <path d="M52 119h30M92 119h56" stroke={C.line} strokeWidth="4" strokeLinecap="round" />
    </>);
    case "gorge": return wrap(S.bg2, <>
      {head(80, 62, 30)}
      <path d="M60 100c6 12 34 12 40 0" fill={C.white} stroke={C.navy} strokeWidth="2.5" />
      <ellipse cx="80" cy="108" rx="14" ry="8" fill="#FFBDAD" />
      <path d="M120 52l14-8M122 66h16M120 80l14 8" stroke={C.red} strokeWidth="3" strokeLinecap="round" />
      <rect x="36" y="118" width="128" height="16" rx="8" fill={C.white} stroke={C.navy} strokeWidth="2" />
    </>);
    case "tete": return wrap(S.bg, <>
      {head(90, 74, 34)}
      <path d="M46 74c-8-8-8-20 0-28M134 74c8-8 8-20 0-28" stroke={C.red} strokeWidth="3.5" strokeLinecap="round" fill="none" />
      <path d="M38 60l-8-4M38 72h-10M142 60l8-4M142 72h10" stroke={C.red} strokeWidth="3" strokeLinecap="round" />
      <path d="M74 86c6 4 26 4 32 0" stroke={C.navy} strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M80 56l6 6 6-6" stroke={C.navy} strokeWidth="2.5" strokeLinecap="round" fill="none" />
    </>);
    case "tension": return wrap(S.bg4, <>
      <circle cx="100" cy="70" r="44" fill={C.white} stroke={C.navy} strokeWidth="3" />
      <path d="M66 86a38 38 0 0 1 68 0" stroke={C.line} strokeWidth="8" strokeLinecap="round" fill="none" />
      <path d="M66 86a38 38 0 0 1 44-36" stroke={C.green} strokeWidth="8" strokeLinecap="round" fill="none" />
      <path d="M110 50a38 38 0 0 1 24 36" stroke={C.red} strokeWidth="8" strokeLinecap="round" fill="none" />
      <path d="M100 84l18-24" stroke={C.navy} strokeWidth="4" strokeLinecap="round" /><circle cx="100" cy="84" r="5" fill={C.navy} />
      <rect x="60" y="120" width="80" height="14" rx="7" fill={C.red} opacity=".25" />
    </>);
    case "diabete": return wrap(S.bg3, <>
      <path d="M100 26c22 30 34 46 34 64a34 34 0 0 1-68 0c0-18 12-34 34-64z" fill={C.white} stroke={C.navy} strokeWidth="3" strokeLinejoin="round" />
      <path d="M84 96a18 18 0 0 0 14 16" stroke={C.teal} strokeWidth="4" strokeLinecap="round" fill="none" />
      <rect x="34" y="40" width="30" height="22" rx="5" fill={C.white} stroke={C.navy} strokeWidth="2.5" />
      <path d="M40 51h18" stroke={C.navy} strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="152" cy="48" r="10" fill={C.yellow} /><circle cx="166" cy="64" r="6" fill={C.yellow} opacity=".6" />
    </>);
    case "digestion": return wrap(S.bg6, <>
      {body(90, 56, 90, 80, C.white)}
      <path d="M68 92c6-12 38-12 44 0c-6 12-38 12-44 0z" fill={C.yellow} opacity=".55" />
      <path d="M78 92c4-4 20-4 24 0" stroke={C.navy} strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M130 70c0-6 6-6 6-12M142 76c0-6 6-6 6-12" stroke={C.navy} strokeWidth="2.5" strokeLinecap="round" fill="none" opacity=".5" />
      <path d="M40 120h100" stroke={C.navy} strokeWidth="2.5" strokeLinecap="round" />
    </>);
    case "fatigue": return wrap(S.bg2, <>
      <rect x="40" y="96" width="120" height="30" rx="8" fill={C.white} stroke={C.navy} strokeWidth="2.5" />
      {head(72, 80, 20)}
      <path d="M64 84c3 2 13 2 16 0" stroke={C.navy} strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M62 78h8M74 78h8" stroke={C.navy} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M96 100h50v12H96z" fill={C.tint} />
      <path d="M120 44h18l-18 18h18M144 30h12l-12 12h12" stroke={C.purple} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </>);
    case "dos": return wrap(S.bg, <>
      {head(84, 44, 18)}
      <path d="M84 62c-14 10-18 30-14 54" stroke={C.navy} strokeWidth="14" strokeLinecap="round" fill="none" />
      <path d="M84 62c-14 10-18 30-14 54" stroke={C.white} strokeWidth="8" strokeLinecap="round" fill="none" />
      <circle cx="74" cy="100" r="12" fill={C.red} opacity=".25" /><circle cx="74" cy="100" r="5" fill={C.red} />
      <path d="M104 82l10-6M106 96h12M104 110l10 6" stroke={C.red} strokeWidth="3" strokeLinecap="round" />
      <path d="M40 126h120" stroke={C.navy} strokeWidth="2.5" strokeLinecap="round" />
    </>);
    case "sommeil": return wrap("#1F2A52", <>
      <path d="M118 36a34 34 0 1 0 30 48a28 28 0 0 1-30-48z" fill="#FFE380" />
      <circle cx="54" cy="40" r="3" fill={C.white} /><circle cx="160" cy="112" r="2.5" fill={C.white} /><circle cx="40" cy="96" r="2" fill={C.white} />
      <rect x="34" y="100" width="100" height="28" rx="8" fill={C.white} />
      {head(60, 92, 16)}
      <path d="M54 92h4M62 92h4" stroke={C.navy} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M80 104h46v10H80z" fill={C.tint} />
      <path d="M150 54h10l-10 12h10" stroke={C.white} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </>);
    case "allergie": return wrap(S.bg5, <>
      {head(70, 78, 26)}
      <path d="M62 86c3 3 13 3 16 0" stroke={C.navy} strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <circle cx="70" cy="80" r="4" fill={C.red} opacity=".8" />
      <g transform="translate(132 54)"><circle r="16" fill="#FFE380" /><circle r="7" fill={C.yellow} />
        {[0, 60, 120, 180, 240, 300].map((a) => <ellipse key={a} cx="0" cy="-22" rx="5" ry="9" fill="#FFBDAD" transform={`rotate(${a})`} />)}</g>
      <path d="M110 92c6 4 6 12 0 16M120 84c8 6 8 18 0 24" stroke={C.green} strokeWidth="2.5" strokeLinecap="round" fill="none" opacity=".7" />
      <path d="M40 128h120" stroke={C.navy} strokeWidth="2.5" strokeLinecap="round" />
    </>);
    default: return wrap(S.bg3, <>
      <rect x="54" y="28" width="92" height="104" rx="10" fill={C.white} stroke={C.navy} strokeWidth="2.5" />
      <rect x="82" y="20" width="36" height="16" rx="6" fill={C.navy} />
      {[0, 1, 2].map((i) => <g key={i} transform={`translate(68 ${52 + i * 24})`}>
        <rect width="14" height="14" rx="4" fill={i < 2 ? C.green : C.white} stroke={i < 2 ? C.green : C.line} strokeWidth="2" />
        {i < 2 && <path d="M3 7l3 3 6-6" stroke={C.white} strokeWidth="2.5" fill="none" strokeLinecap="round" />}
        <rect x="22" y="4" width={i === 1 ? 30 : 44} height="6" rx="3" fill={C.navy} opacity=".4" />
      </g>)}
      <g transform="translate(140 100)"><rect x="-8" y="-28" width="16" height="48" rx="8" fill={C.white} stroke={C.navy} strokeWidth="2.5" /><rect x="-4" y="-6" width="8" height="22" rx="4" fill={C.teal} /></g>
    </>);
  }
}
