// Icônes des 12 sujets (accueil) : sans cadre, deux tons (trait encre + aplats bleus),
// une touche rouge pour montrer où « ça fait mal ». Chaque icône montre la maladie, pas un décor.
const INK = "#091E42", BLUE = "#0065FF", TINT = "#DEEBFF", RED = "#DE354C", SKIN = "#F3C9A6", WHITE = "#FFFFFF", YEL = "#FFAB00";
const s = { stroke: INK, strokeWidth: 3, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
const L = { ...s, fill: "none" };

function Icon({ id }: { id: string }) {
  switch (id) {
    case "fievre": return <>
      {/* thermomètre qui monte + vagues de chaleur */}
      <rect x="40" y="10" width="20" height="62" rx="10" fill={WHITE} {...s} />
      <rect x="46" y="30" width="8" height="40" rx="4" fill={RED} />
      <circle cx="50" cy="78" r="13" fill={RED} {...s} />
      <path d="M60 24h8M60 36h6M60 48h8" {...L} strokeWidth={2.5} />
      <path d="M20 40c-6-6 6-10 0-18M82 44c-6-6 6-10 0-18" {...L} stroke={RED} />
    </>;
    case "rhume": return <>
      {/* nez qui coule + mouchoir + microbe */}
      <path d="M36 14c-4 22-16 38-16 50c0 10 10 14 18 12" fill={SKIN} {...s} />
      <circle cx="30" cy="66" r="5" fill={RED} opacity=".7" />
      <path d="M34 80c0 6-4 8-4 12" {...L} stroke={BLUE} />
      <rect x="52" y="44" width="34" height="34" rx="6" fill={WHITE} {...s} transform="rotate(-10 69 61)" />
      <path d="M60 58h18M60 66h12" {...L} strokeWidth={2.5} stroke={TINT} transform="rotate(-10 69 61)" />
      <circle cx="74" cy="20" r="9" fill={TINT} {...s} />
      <path d="M74 7v4M74 29v4M61 20h4M83 20h4M65 11l3 3M80 26l3 3M83 11l-3 3M65 29l3-3" {...L} strokeWidth={2.5} />
    </>;
    case "gorge": return <>
      {/* cou de profil, gorge enflammée */}
      <path d="M24 14c22-4 44 6 44 30c0 10-6 14-6 22v20H34V66c-8-4-14-14-14-26" fill={SKIN} {...s} />
      <path d="M44 54c6 4 14 4 18 0" {...L} />
      <ellipse cx="52" cy="66" rx="9" ry="7" fill={RED} />
      <path d="M78 52l10-6M80 66h10M78 80l10 6" {...L} stroke={RED} />
    </>;
    case "tete": return <>
      {/* tête + éclair de migraine */}
      <path d="M50 10c20 0 32 14 32 32c0 12-6 18-6 26v18H34V74c-10-6-16-18-16-32c0-18 14-32 32-32z" fill={TINT} {...s} />
      <path d="M54 22L40 46h14l-8 22 20-30H52l8-16z" fill={YEL} {...s} strokeWidth={2.5} />
      <path d="M8 30l-6-4M8 44H0M92 30l6-4M92 44h8" {...L} stroke={RED} />
    </>;
    case "tension": return <>
      {/* cœur + cadran de tension dans le rouge */}
      <path d="M50 86S12 64 12 38c0-14 10-24 22-24c8 0 14 4 16 10c2-6 8-10 16-10c12 0 22 10 22 24c0 26-38 48-38 48z" fill={TINT} {...s} />
      <path d="M28 52a22 22 0 0 1 44 0" {...L} strokeWidth={6} stroke={WHITE} />
      <path d="M28 52a22 22 0 0 1 22-22" {...L} strokeWidth={6} stroke={BLUE} />
      <path d="M50 30a22 22 0 0 1 22 22" {...L} strokeWidth={6} stroke={RED} />
      <path d="M50 52l12-14" {...L} strokeWidth={3.5} /><circle cx="50" cy="52" r="4" fill={INK} />
    </>;
    case "diabete": return <>
      {/* goutte de sang + lecteur de glycémie */}
      <path d="M36 10c14 20 24 32 24 46a24 24 0 0 1-48 0c0-14 10-26 24-46z" fill={RED} {...s} />
      <path d="M24 58a12 12 0 0 0 9 11" {...L} stroke={WHITE} />
      <rect x="58" y="34" width="32" height="54" rx="8" fill={WHITE} {...s} />
      <rect x="64" y="42" width="20" height="16" rx="3" fill={TINT} />
      <path d="M68 50h12" {...L} strokeWidth={2.5} /><circle cx="74" cy="74" r="5" fill={BLUE} />
    </>;
    case "digestion": return <>
      {/* estomac avec point douloureux et brûlure */}
      <path d="M40 8v14c0 6-4 8-10 12c-10 6-16 16-14 30c2 18 18 28 36 26c18-2 30-16 28-34c-2-14-14-18-22-14c-6 4-6 12-12 12c-4 0-6-4-6-10V8" fill={TINT} {...s} />
      <circle cx="44" cy="62" r="9" fill={RED} opacity=".25" /><circle cx="44" cy="62" r="4" fill={RED} />
      <path d="M70 20c-4-4 4-8 0-12M82 26c-4-4 4-8 0-12" {...L} stroke={YEL} />
    </>;
    case "fatigue": return <>
      {/* batterie presque vide + Zz */}
      <rect x="8" y="34" width="68" height="36" rx="8" fill={WHITE} {...s} />
      <rect x="76" y="44" width="8" height="16" rx="2" fill={INK} />
      <rect x="15" y="41" width="14" height="22" rx="3" fill={RED} />
      <path d="M56 10h12L56 24h12M76 2h8l-8 9h8" {...L} stroke={BLUE} />
      <path d="M20 84h44" {...L} stroke={TINT} strokeWidth={6} />
    </>;
    case "dos": return <>
      {/* colonne vertébrale, vertèbre douloureuse en bas */}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <rect key={i} x={36 + (i % 2 ? 3 : 0)} y={8 + i * 14} width="24" height="10" rx="4" fill={i === 4 ? RED : TINT} {...s} strokeWidth={2.5} />
      ))}
      <path d="M48 4v90" {...L} strokeWidth={2} opacity=".3" />
      <path d="M72 62l10-4M74 72h12M72 82l10 4M22 62l-10-4M20 72H8M22 82l-10 4" {...L} stroke={RED} />
    </>;
    case "sommeil": return <>
      {/* lune + réveil à 3 h */}
      <path d="M46 12a30 30 0 1 0 34 40a24 24 0 0 1-34-40z" fill={TINT} {...s} />
      <circle cx="70" cy="70" r="18" fill={WHITE} {...s} />
      <path d="M70 60v10h8" {...L} />
      <path d="M58 52l-4-4M82 52l4-4" {...L} stroke={RED} />
      <circle cx="78" cy="16" r="2.5" fill={YEL} /><circle cx="88" cy="30" r="2" fill={YEL} />
    </>;
    case "allergie": return <>
      {/* fleur et pollen + éternuement */}
      <path d="M34 54v38" {...L} />
      <path d="M34 78c-10 0-16-6-16-14c10 0 16 6 16 14z" fill={TINT} {...s} strokeWidth={2.5} />
      {[0, 72, 144, 216, 288].map((a) => <ellipse key={a} cx="34" cy="24" rx="8" ry="12" fill={WHITE} {...s} strokeWidth={2.5} transform={`rotate(${a} 34 38)`} />)}
      <circle cx="34" cy="38" r="8" fill={YEL} {...s} strokeWidth={2.5} />
      <circle cx="62" cy="30" r="3" fill={YEL} /><circle cx="72" cy="44" r="2.5" fill={YEL} /><circle cx="66" cy="56" r="2" fill={YEL} />
      <path d="M76 66c8-4 14 2 20-2M76 80c8-4 14 2 20-2" {...L} stroke={BLUE} />
    </>;
    default: return <>
      {/* bilan : tube de prise de sang + feuille cochée */}
      <rect x="10" y="14" width="50" height="72" rx="6" fill={WHITE} {...s} />
      <rect x="24" y="8" width="22" height="12" rx="4" fill={BLUE} {...s} strokeWidth={2.5} />
      {[0, 1, 2].map((i) => <g key={i}>
        <rect x="18" y={32 + i * 16} width="10" height="10" rx="3" fill={i < 2 ? BLUE : WHITE} {...s} strokeWidth={2} />
        <path d={`M34 ${37 + i * 16}h18`} {...L} strokeWidth={2.5} stroke={TINT} />
      </g>)}
      <rect x="68" y="20" width="16" height="66" rx="8" fill={WHITE} {...s} transform="rotate(12 76 53)" />
      <rect x="71" y="52" width="10" height="30" rx="5" fill={RED} transform="rotate(12 76 53)" />
    </>;
  }
}

export function TopicScene({ id }: { id: string }) {
  return (
    <svg viewBox="-4 -4 108 108" role="img" aria-hidden="true" className="topic-icon">
      <Icon id={id} />
    </svg>
  );
}
