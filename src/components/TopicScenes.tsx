// Les 12 scènes des sujets (accueil). Style maison : traits épais couleur ardoise, aplats de la palette,
// une grande forme douce en fond, un personnage récurrent (tête ronde, cheveux en casque, joues rosées).
import { C } from "@/components/Illustrations";

const INK = C.navy, SW = 3;
const BG = { mint: "#EAF5F2", sand: "#F8F3E8", lilac: "#EFECFA", sky: "#E6F0FA", rose: "#FCEDE8", night: "#1B3A3A" };
const SPOT = { mint: "#CFE9E1", sand: "#F0E4CC", lilac: "#DED8F4", sky: "#CFE1F4", rose: "#F8D5CA", night: "#24504E" };

const stroke = { stroke: INK, strokeWidth: SW, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, fill: "none" };

// Tête : expression "ok" (sourire), "mal" (bouche tombante), "dodo" (yeux fermés), "surpris" (yeux ronds)
function Head({ x, y, r = 22, mood = "ok", blush = true }: { x: number; y: number; r?: number; mood?: "ok" | "mal" | "dodo" | "surpris"; blush?: boolean }) {
  const e = r * 0.36, ey = y - r * 0.1;
  return (
    <g>
      <circle cx={x} cy={y} r={r} fill={C.skin} stroke={INK} strokeWidth={SW} />
      <path d={`M${x - r} ${y - r * 0.15}a${r} ${r} 0 0 1 ${2 * r} 0c-${r * 0.3}-${r * 0.5}-${r * 1.1}-${r * 0.75}-${2 * r} 0z`} fill={INK} />
      {mood === "dodo" ? (
        <path d={`M${x - e - 4} ${ey}q4 4 8 0M${x + e - 4} ${ey}q4 4 8 0`} {...stroke} strokeWidth={2.5} />
      ) : mood === "surpris" ? (
        <><circle cx={x - e} cy={ey} r={3} fill={INK} /><circle cx={x + e} cy={ey} r={3} fill={INK} /></>
      ) : (
        <><circle cx={x - e} cy={ey} r={2.4} fill={INK} /><circle cx={x + e} cy={ey} r={2.4} fill={INK} /></>
      )}
      {blush && <><circle cx={x - e - 3} cy={y + r * 0.25} r={3.5} fill={C.coral} opacity=".35" /><circle cx={x + e + 3} cy={y + r * 0.25} r={3.5} fill={C.coral} opacity=".35" /></>}
      {mood === "ok" && <path d={`M${x - 5} ${y + r * 0.4}q5 5 10 0`} {...stroke} strokeWidth={2.5} />}
      {mood === "mal" && <path d={`M${x - 5} ${y + r * 0.5}q5-4 10 0`} {...stroke} strokeWidth={2.5} />}
      {mood === "surpris" && <ellipse cx={x} cy={y + r * 0.45} rx={3.5} ry={4.5} fill={INK} />}
      {mood === "dodo" && <path d={`M${x - 4} ${y + r * 0.45}h8`} {...stroke} strokeWidth={2.5} />}
    </g>
  );
}

const Spark = ({ x, y, s = 6, c = C.coral }: { x: number; y: number; s?: number; c?: string }) => (
  <path d={`M${x} ${y - s}q0 ${s} ${s} ${s}q-${s} 0-${s} ${s}q0-${s}-${s}-${s}q${s} 0 ${s}-${s}z`} fill={c} />
);
const Zz = ({ x, y, c = C.purple }: { x: number; y: number; c?: string }) => (
  <path d={`M${x} ${y}h10l-10 12h10M${x + 16} ${y - 12}h8l-8 9h8`} stroke={c} strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" fill="none" />
);

export function TopicScene({ id }: { id: string }) {
  const W = 200, H = 150;
  const wrap = (bg: string, spot: string, children: React.ReactNode, spotXY: [number, number, number] = [100, 86, 58]) => (
    <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-hidden="true" className="topic-scene">
      <rect width={W} height={H} rx="18" fill={bg} />
      <circle cx={spotXY[0]} cy={spotXY[1]} r={spotXY[2]} fill={spot} />
      {children}
    </svg>
  );
  switch (id) {
    case "fievre": return wrap(BG.rose, SPOT.rose, <>
      {/* au lit, linge frais sur le front, thermomètre et vagues de chaleur */}
      <path d="M26 120h148" {...stroke} />
      <rect x="34" y="88" width="132" height="34" rx="9" fill={C.white} stroke={INK} strokeWidth={SW} />
      <path d="M92 96h64v14H92z" fill={C.tint} />
      <rect x="40" y="74" width="46" height="18" rx="9" fill={C.white} stroke={INK} strokeWidth={SW} />
      <Head x={66} y={64} r={20} mood="mal" />
      <rect x="44" y="50" width="44" height="10" rx="5" fill={C.teal} stroke={INK} strokeWidth={2.5} />
      <g transform="translate(146 30)">
        <rect x="-7" y="0" width="14" height="48" rx="7" fill={C.white} stroke={INK} strokeWidth={SW} />
        <rect x="-3" y="18" width="6" height="26" rx="3" fill={C.red} /><circle cx="0" cy="48" r="8" fill={C.red} stroke={INK} strokeWidth={2.5} />
      </g>
      <path d="M104 34c0-8 8-8 8-16M120 40c0-8 8-8 8-16" stroke={C.coral} strokeWidth={3} strokeLinecap="round" fill="none" />
      <Spark x={30} y={40} s={5} />
    </>, [100, 80, 60]);
    case "rhume": return wrap(BG.sky, SPOT.sky, <>
      {/* écharpe, nez rouge, mouchoir qui s'envole, tasse qui fume */}
      <Head x={84} y={66} r={30} mood="mal" blush={false} />
      <circle cx="84" cy="70" r="6" fill={C.coral} stroke={INK} strokeWidth={2.5} />
      <path d="M44 100c10-12 70-12 80 0v20H44z" fill={C.red} stroke={INK} strokeWidth={SW} />
      <path d="M60 104l-12 26M74 106l-6 26" {...stroke} />
      <path d="M126 58c10-6 18 2 26-2M128 74c10-6 18 2 26-2" stroke={C.teal} strokeWidth={3.5} strokeLinecap="round" fill="none" />
      <g transform="translate(150 96) rotate(-12)"><rect x="-16" y="-10" width="32" height="22" rx="4" fill={C.white} stroke={INK} strokeWidth={2.5} /><path d="M-8 2h16" stroke={C.line} strokeWidth={3} strokeLinecap="round" /></g>
      <g transform="translate(26 92)"><rect x="0" y="12" width="26" height="22" rx="5" fill={C.yellow} stroke={INK} strokeWidth={2.5} /><path d="M26 18h6a5 5 0 0 1 0 10h-6" {...stroke} strokeWidth={2.5} /><path d="M8 6c0-4 3-4 3-8M16 6c0-4 3-4 3-8" {...stroke} strokeWidth={2.5} /></g>
    </>, [96, 78, 60]);
    case "gorge": return wrap(BG.lilac, SPOT.lilac, <>
      {/* bouche ouverte, gorge rouge, pastille, éclairs */}
      <Head x={92} y={62} r={34} mood="surpris" />
      <ellipse cx="92" cy="78" rx="10" ry="12" fill="#8B2E24" />
      <ellipse cx="92" cy="84" rx="6" ry="4" fill={C.coral} />
      <path d="M50 104c10-10 74-10 84 0v26H50z" fill={C.purple} stroke={INK} strokeWidth={SW} />
      <path d="M138 44l12-10M142 60h16M138 76l12 10" stroke={C.red} strokeWidth={3.5} strokeLinecap="round" />
      <g transform="translate(34 46)"><circle r="12" fill={C.yellow} stroke={INK} strokeWidth={2.5} /><circle r="4" fill={C.white} opacity=".7" /></g>
      <Spark x={166} y={116} s={5} c={C.purple} />
    </>, [92, 76, 60]);
    case "tete": return wrap(BG.mint, SPOT.mint, <>
      {/* mains sur les tempes, étoiles de douleur, sourcils froncés */}
      <Head x={100} y={70} r={34} mood="mal" blush={false} />
      <path d="M80 54l10 4M120 54l-10 4" {...stroke} />
      <path d="M58 70c-4 8-4 22 2 30c6 6 16 2 14-8l-4-26c-2-8-10-6-12 4z" fill={C.skin} stroke={INK} strokeWidth={SW} />
      <path d="M142 70c4 8 4 22-2 30c-6 6-16 2-14-8l4-26c2-8 10-6 12 4z" fill={C.skin} stroke={INK} strokeWidth={SW} />
      <path d="M46 42l-10-6M44 56h-14M154 42l10-6M156 56h14" stroke={C.red} strokeWidth={3.5} strokeLinecap="round" />
      <path d="M62 110c10-8 66-8 76 0v22H62z" fill={C.teal} stroke={INK} strokeWidth={SW} />
      <Spark x={30} y={110} s={6} c={C.red} /><Spark x={170} y={106} s={5} c={C.red} />
    </>, [100, 80, 62]);
    case "tension": return wrap(BG.sand, SPOT.sand, <>
      {/* bras avec brassard, écran de tensiomètre, cœur */}
      <path d="M20 104c20-18 56-20 86-10v34H20z" fill={C.skin} stroke={INK} strokeWidth={SW} />
      <rect x="54" y="80" width="40" height="46" rx="8" fill={C.teal} stroke={INK} strokeWidth={SW} />
      <path d="M94 100c12 0 16-10 30-10" {...stroke} />
      <rect x="116" y="42" width="64" height="62" rx="10" fill={C.white} stroke={INK} strokeWidth={SW} />
      <rect x="126" y="52" width="44" height="22" rx="4" fill={INK} />
      <path d="M130 63h6l4-7 5 12 4-5h11" stroke={C.green} strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <circle cx="136" cy="90" r="5" fill={C.red} /><circle cx="152" cy="90" r="5" fill={C.line} /><circle cx="168" cy="90" r="5" fill={C.line} />
      <path d="M40 40c0-10 14-14 20-4c6-10 20-6 20 4c0 12-20 24-20 24S40 52 40 40z" fill={C.coral} stroke={INK} strokeWidth={2.5} />
    </>, [100, 82, 62]);
    case "diabete": return wrap(BG.sky, SPOT.sky, <>
      {/* goutte, lecteur de glycémie, morceau de sucre et pomme */}
      <path d="M88 22c22 32 36 48 36 68a36 36 0 0 1-72 0c0-20 14-36 36-68z" fill={C.teal} stroke={INK} strokeWidth={SW} />
      <path d="M68 96a22 22 0 0 0 16 20" stroke={C.white} strokeWidth={4} strokeLinecap="round" fill="none" />
      <rect x="132" y="56" width="48" height="76" rx="10" fill={C.white} stroke={INK} strokeWidth={SW} />
      <rect x="140" y="66" width="32" height="26" rx="4" fill={C.tint} stroke={INK} strokeWidth={2} />
      <path d="M146 80h20" stroke={INK} strokeWidth={3} strokeLinecap="round" /><circle cx="156" cy="110" r="7" fill={C.green} stroke={INK} strokeWidth={2.5} />
      <g transform="translate(26 92)"><rect width="26" height="26" rx="6" fill={C.white} stroke={INK} strokeWidth={2.5} /><rect x="6" y="6" width="14" height="14" rx="3" fill={C.line} /></g>
      <g transform="translate(34 46)"><circle r="14" fill={C.red} stroke={INK} strokeWidth={2.5} /><path d="M0-12c2-6 6-8 10-8" {...stroke} strokeWidth={2.5} /><path d="M-6-6c2-3 6-3 8 0" stroke={C.white} strokeWidth={2.5} strokeLinecap="round" fill="none" opacity=".8" /></g>
    </>, [92, 84, 60]);
    case "digestion": return wrap(BG.sand, SPOT.sand, <>
      {/* ventre tenu à deux mains, estomac avec bulles */}
      <Head x={100} y={38} r={22} mood="mal" />
      <path d="M58 132c0-40 14-66 42-66s42 26 42 66z" fill={C.yellow} stroke={INK} strokeWidth={SW} />
      <path d="M78 96c2-14 42-14 44 0c-2 14-42 14-44 0z" fill={C.white} stroke={INK} strokeWidth={2.5} />
      <circle cx="90" cy="92" r="3" fill={C.coral} /><circle cx="104" cy="98" r="4" fill={C.coral} /><circle cx="112" cy="90" r="2.5" fill={C.coral} />
      <path d="M58 100c-12 4-18 16-10 26c8 6 18 0 22-8" fill={C.skin} stroke={INK} strokeWidth={SW} />
      <path d="M142 100c12 4 18 16 10 26c-8 6-18 0-22-8" fill={C.skin} stroke={INK} strokeWidth={SW} />
      <path d="M150 52c0-8 8-8 8-16M164 60c0-8 8-8 8-16" stroke={C.yellow} strokeWidth={3} strokeLinecap="round" fill="none" />
      <Spark x={34} y={54} s={5} />
    </>, [100, 86, 60]);
    case "fatigue": return wrap(BG.lilac, SPOT.lilac, <>
      {/* affalé sur la table, tasse, batterie faible */}
      <path d="M20 112h160" {...stroke} />
      <path d="M44 112c0-16 16-30 40-30s40 14 40 30z" fill={C.purple} stroke={INK} strokeWidth={SW} />
      <Head x={84} y={74} r={24} mood="dodo" />
      <rect x="50" y="96" width="68" height="16" rx="8" fill={C.skin} stroke={INK} strokeWidth={2.5} />
      <g transform="translate(140 84)"><rect width="26" height="24" rx="5" fill={C.white} stroke={INK} strokeWidth={2.5} /><path d="M26 6h5a5 5 0 0 1 0 10h-5" {...stroke} strokeWidth={2.5} /><path d="M8 -4c0-4 3-4 3-8M16-4c0-4 3-4 3-8" {...stroke} strokeWidth={2.5} /></g>
      <g transform="translate(26 30)"><rect width="40" height="20" rx="5" fill={C.white} stroke={INK} strokeWidth={2.5} /><rect x="40" y="6" width="4" height="8" rx="1" fill={INK} /><rect x="4" y="4" width="9" height="12" rx="2" fill={C.red} /></g>
      <Zz x={128} y={44} />
    </>, [96, 80, 60]);
    case "dos": return wrap(BG.mint, SPOT.mint, <>
      {/* de profil, penché en avant, main sur le bas du dos, point douloureux */}
      <path d="M20 130h160" {...stroke} />
      <Head x={62} y={44} r={20} mood="mal" />
      <path d="M78 58c26 6 40 26 38 54" stroke={INK} strokeWidth={24} strokeLinecap="round" fill="none" />
      <path d="M78 58c26 6 40 26 38 54" stroke={C.teal} strokeWidth={18} strokeLinecap="round" fill="none" />
      <path d="M84 62c20 6 30 22 28 46" stroke={C.white} strokeWidth={3} strokeLinecap="round" strokeDasharray="3 6" fill="none" opacity=".8" />
      <path d="M104 112v18M124 112v18" stroke={INK} strokeWidth={10} strokeLinecap="round" />
      <path d="M104 112v18M124 112v18" stroke={C.purple} strokeWidth={6} strokeLinecap="round" />
      <circle cx="116" cy="100" r="14" fill={C.red} opacity=".3" /><circle cx="116" cy="100" r="6" fill={C.red} stroke={INK} strokeWidth={2} />
      <path d="M98 84c12-2 20 6 20 14c-2 8-12 10-16 4" fill={C.skin} stroke={INK} strokeWidth={SW} />
      <path d="M138 80l12-6M142 96h14M138 112l12 6" stroke={C.red} strokeWidth={3.5} strokeLinecap="round" />
      <path d="M62 66c-12 10-18 26-18 48" {...stroke} strokeWidth={10} stroke={C.skin} />
    </>, [100, 84, 62]);
    case "sommeil": return wrap(BG.night, SPOT.night, <>
      {/* nuit : réveil à 3 h, yeux ouverts, lune */}
      <path d="M140 28a30 30 0 1 0 26 44a24 24 0 0 1-26-44z" fill={C.yellow} stroke={INK} strokeWidth={2.5} />
      <circle cx="36" cy="30" r="3" fill={C.white} /><circle cx="60" cy="18" r="2" fill={C.white} /><circle cx="176" cy="96" r="2.5" fill={C.white} />
      <rect x="28" y="96" width="120" height="30" rx="9" fill={C.white} stroke={INK} strokeWidth={SW} />
      <path d="M84 104h56v14H84z" fill={C.purple} />
      <rect x="36" y="82" width="42" height="18" rx="9" fill={C.white} stroke={INK} strokeWidth={SW} />
      <Head x={60} y={74} r={18} mood="surpris" />
      <g transform="translate(160 118)"><circle r="14" fill={C.white} stroke={INK} strokeWidth={2.5} /><path d="M0-9v9h7" {...stroke} strokeWidth={2.5} /><path d="M-10-13l-4-4M10-13l4-4" {...stroke} strokeWidth={2.5} stroke={C.coral} /></g>
    </>, [90, 86, 60]);
    case "allergie": return wrap(BG.mint, SPOT.mint, <>
      {/* fleurs et pollen, bras qui gratte, éternuement */}
      <Head x={70} y={70} r={28} mood="mal" blush={false} />
      <circle cx="70" cy="74" r="5" fill={C.coral} stroke={INK} strokeWidth={2.5} />
      <path d="M100 56c8-6 14 2 22-2M102 72c8-6 14 2 22-2" stroke={C.teal} strokeWidth={3.5} strokeLinecap="round" fill="none" />
      <g transform="translate(150 50)"><path d="M0 24v40" {...stroke} /><circle r="8" fill={C.yellow} stroke={INK} strokeWidth={2.5} />
        {[0, 60, 120, 180, 240, 300].map((a) => <ellipse key={a} cx="0" cy="-16" rx="6" ry="9" fill={C.coral} stroke={INK} strokeWidth={2} transform={`rotate(${a})`} />)}</g>
      <circle cx="124" cy="36" r="3" fill={C.yellow} /><circle cx="136" cy="24" r="2.5" fill={C.yellow} /><circle cx="118" cy="22" r="2" fill={C.yellow} />
      <path d="M26 112c14-10 40-10 54 0v20H26z" fill={C.green} stroke={INK} strokeWidth={SW} />
      <g transform="translate(112 112)"><rect x="-8" y="-6" width="60" height="22" rx="11" fill={C.skin} stroke={INK} strokeWidth={2.5} /><circle cx="10" cy="4" r="2.5" fill={C.red} /><circle cx="22" cy="2" r="2.5" fill={C.red} /><circle cx="32" cy="6" r="2.5" fill={C.red} /></g>
    </>, [92, 82, 62]);
    default: return wrap(BG.sand, SPOT.sand, <>
      {/* bilan : dossier coché, tube, stéthoscope */}
      <rect x="44" y="26" width="92" height="108" rx="10" fill={C.white} stroke={INK} strokeWidth={SW} />
      <rect x="72" y="18" width="36" height="16" rx="6" fill={C.blue} stroke={INK} strokeWidth={2.5} />
      {[0, 1, 2].map((i) => <g key={i} transform={`translate(58 ${50 + i * 26})`}>
        <rect width="16" height="16" rx="5" fill={i < 2 ? C.green : C.white} stroke={INK} strokeWidth={2.5} />
        {i < 2 && <path d="M4 8l3 3 6-6" stroke={C.white} strokeWidth={2.5} fill="none" strokeLinecap="round" />}
        <rect x="24" y="5" width={i === 1 ? 30 : 44} height="6" rx="3" fill={C.line} />
      </g>)}
      <g transform="translate(160 100)"><rect x="-9" y="-36" width="18" height="60" rx="9" fill={C.white} stroke={INK} strokeWidth={SW} /><rect x="-5" y="-6" width="10" height="26" rx="5" fill={C.coral} /></g>
      <path d="M26 60v30a16 16 0 0 0 32 0V60" {...stroke} /><circle cx="42" cy="118" r="8" fill={C.teal} stroke={INK} strokeWidth={2.5} /><path d="M42 106v4" {...stroke} />
    </>, [96, 84, 62]);
  }
}
