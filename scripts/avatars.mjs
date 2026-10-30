// Génère le stock de 50 avatars illustrés (25 femmes, 25 hommes) dans public/avatars/NN.svg.
// Déterministe : relancer le script redonne exactement les mêmes fichiers.  node scripts/avatars.mjs
import { writeFileSync, mkdirSync } from "node:fs";

const INK = "#091E42";
const SKINS = ["#F8D9C0", "#F3C9A6", "#E5B08A", "#D39A6E", "#B57B52", "#8D5A3B"];
const HAIRS = ["#091E42", "#2B1D14", "#5A3A22", "#8A5A2B", "#C98B4B", "#6B6B6B"];
const BGS = ["#DEEBFF", "#EAE6FF", "#E6FCFF", "#E3FCEF", "#FFFAE6", "#FFEBE6", "#B3D4FF", "#C0B6F2", "#79E2F2", "#ABF5D1"];
const SHIRTS = ["#0065FF", "#6554C0", "#00A3BF", "#36B37E", "#FFAB00", "#DE354C", "#0747A6", "#172B4D", "#FF7452"];
const HIJABS = ["#6554C0", "#0747A6", "#36B37E", "#DE354C", "#C1C7D0", "#172B4D", "#00A3BF"];

// petit générateur pseudo-aléatoire stable
let seed = 20261030;
const rnd = () => ((seed = (seed * 1103515245 + 12345) & 0x7fffffff) / 0x7fffffff);
const pick = (a) => a[Math.floor(rnd() * a.length)];

const sw = `stroke="${INK}" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"`;

function face(skin, mood, extra = "", ears = true) {
  const mouth = mood === 0 ? `<path d="M52 72q8 7 16 0" fill="none" ${sw}/>`
    : mood === 1 ? `<path d="M53 72h14" fill="none" ${sw}/>`
    : `<path d="M51 70q9 10 18 0z" fill="${INK}"/>`;
  return `
  <ellipse cx="60" cy="60" rx="26" ry="29" fill="${skin}" ${sw}/>
  ${ears ? `<ellipse cx="33" cy="62" rx="5" ry="7" fill="${skin}" ${sw}/><ellipse cx="87" cy="62" rx="5" ry="7" fill="${skin}" ${sw}/>` : ""}
  <circle cx="50" cy="58" r="3" fill="${INK}"/><circle cx="70" cy="58" r="3" fill="${INK}"/>
  <circle cx="45" cy="67" r="4" fill="#FF7452" opacity=".3"/><circle cx="75" cy="67" r="4" fill="#FF7452" opacity=".3"/>
  ${mouth}${extra}`;
}
const body = (shirt) => `<path d="M18 120c2-22 18-32 42-32s40 10 42 32z" fill="${shirt}" ${sw}/><path d="M50 89q10 10 20 0" fill="none" ${sw}/>`;
const glasses = `<g fill="none" stroke="${INK}" stroke-width="2.5"><circle cx="50" cy="58" r="8"/><circle cx="70" cy="58" r="8"/><path d="M58 58h4"/></g>`;

const WOMEN = [
  // cheveux longs
  (h) => ({ back: `<path d="M30 60c-6 30 0 50 8 56h44c8-6 14-26 8-56z" fill="${h}" ${sw}/>`, front: `<path d="M34 54c0-20 12-28 26-28s28 8 28 28c-10-2-22-8-28-18c-4 10-14 16-26 18z" fill="${h}" ${sw}/>` }),
  // chignon
  (h) => ({ back: `<circle cx="60" cy="24" r="12" fill="${h}" ${sw}/>`, front: `<path d="M34 56c-2-20 10-30 26-30s28 10 26 30c-6-10-16-14-26-14s-20 4-26 14z" fill="${h}" ${sw}/>` }),
  // carré
  (h) => ({ back: `<path d="M30 52c0 20 0 34 6 40h48c6-6 6-20 6-40z" fill="${h}" ${sw}/>`, front: `<path d="M32 58c0-22 12-32 28-32s28 10 28 32c-12 0-22-6-26-16c-6 10-16 16-30 16z" fill="${h}" ${sw}/>` }),
  // bouclés
  (h) => ({ back: `<g fill="${h}" ${sw}>${[[30,50],[28,68],[32,86],[90,50],[92,68],[88,86],[40,32],[60,26],[80,32]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="12"/>`).join("")}</g>`, front: `<path d="M36 50c4-14 14-20 24-20s20 6 24 20c-8-4-16-6-24-6s-16 2-24 6z" fill="${h}" ${sw}/>` }),
  // hijab
  (h, c) => ({ back: `<path d="M24 64c0-26 16-42 36-42s36 16 36 42c0 20-8 34-14 40H38c-6-6-14-20-14-40z" fill="${c}" ${sw}/>`, front: `<path d="M34 60c0-18 12-28 26-28s26 10 26 28c0-4-2-8-4-10c-6-6-14-8-22-8s-16 2-22 8c-2 2-4 6-4 10z" fill="${c}" ${sw}/>`, hijab: true }),
  // queue de cheval
  (h) => ({ back: `<path d="M84 40c14 4 18 24 12 44c-4-10-8-16-14-20z" fill="${h}" ${sw}/>`, front: `<path d="M34 54c0-18 12-28 26-28s26 10 26 28c-14-2-26-8-32-18c-4 8-10 14-20 18z" fill="${h}" ${sw}/>` }),
];
const MEN = [
  // court
  (h) => ({ front: `<path d="M34 54c-2-18 10-28 26-28s28 10 26 28c-4-6-8-10-14-12c-8 4-20 6-38 12z" fill="${h}" ${sw}/>` }),
  // crépu court
  (h) => ({ front: `<path d="M34 52c-2-16 10-26 26-26s28 10 26 26c-6-6-16-8-26-8s-20 2-26 8z" fill="${h}" ${sw}/><g fill="${INK}" opacity=".25"><circle cx="46" cy="36" r="2"/><circle cx="58" cy="32" r="2"/><circle cx="70" cy="36" r="2"/><circle cx="52" cy="42" r="2"/><circle cx="66" cy="42" r="2"/></g>` }),
  // raie sur le côté
  (h) => ({ front: `<path d="M34 56c-4-20 8-32 26-32c16 0 28 10 26 30c-10-8-24-12-36-10c-6 2-12 6-16 12z" fill="${h}" ${sw}/>` }),
  // crâne rasé + barbe
  (h) => ({ front: `<path d="M36 46c4-12 14-18 24-18s20 6 24 18c-8-4-16-6-24-6s-16 2-24 6z" fill="${h}" opacity=".35"/>`, beard: true }),
  // houppe
  (h) => ({ front: `<path d="M34 54c-2-14 6-24 18-26c4-6 14-8 22-4c8 4 12 14 12 30c-6-6-14-10-24-10s-20 4-28 10z" fill="${h}" ${sw}/>` }),
  // calotte / taqiya
  (h) => ({ front: `<path d="M36 46c4-16 14-22 24-22s20 6 24 22z" fill="#FFFFFF" ${sw}/><path d="M42 36h36M38 42h44" fill="none" stroke="${INK}" stroke-width="1.5" opacity=".4"/>`, beard: rnd() < 0.6 }),
];

mkdirSync("public/avatars", { recursive: true });
const manifest = [];
for (let i = 1; i <= 50; i++) {
  const woman = i % 2 === 1;
  const skin = pick(SKINS), hair = pick(HAIRS), bg = pick(BGS), shirt = pick(SHIRTS), mood = Math.floor(rnd() * 3);
  const style = woman ? WOMEN[(i >> 1) % WOMEN.length] : MEN[((i >> 1) - 1 + MEN.length) % MEN.length];
  const s = style(hair, pick(HIJABS));
  const beard = s.beard ? `<path d="M36 66c2 18 12 24 24 24s22-6 24-24c-4 6-10 8-14 6c-4-4-16-4-20 0c-4 2-10 0-14-6z" fill="${hair}" ${sw}/>` : (!woman && rnd() < 0.3 ? `<path d="M50 78q10 -6 20 0" fill="none" stroke="${hair}" stroke-width="4" stroke-linecap="round"/>` : "");
  const wearGlasses = rnd() < 0.22;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="120" height="120">
  <clipPath id="c"><circle cx="60" cy="60" r="60"/></clipPath>
  <g clip-path="url(#c)">
  <rect width="120" height="120" fill="${bg}"/>
  ${s.back ?? ""}
  ${body(shirt)}
  ${face(skin, mood, beard + (wearGlasses ? glasses : ""), !s.hijab)}
  ${s.front}
  </g>
</svg>
`;
  const name = String(i).padStart(2, "0");
  writeFileSync(`public/avatars/${name}.svg`, svg);
  manifest.push({ n: i, sex: woman ? "f" : "m" });
}
writeFileSync("public/avatars/stock.json", JSON.stringify(manifest));
console.log("50 avatars écrits dans public/avatars");
