// Illustrations vectorielles dans la palette Trello (bleu #0065FF, violet #8777D9, cyan #00C7E5, marine #091E42).
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
      <text x="160" y="150" textAnchor="middle" fontFamily="Inter, system-ui, sans-serif" fontWeight="700" fontSize="28" fill={C.red}>15</text>
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
