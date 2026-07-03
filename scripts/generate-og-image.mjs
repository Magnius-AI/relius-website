import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const outputPaths = [
  path.join(root, "public", "og-relius-2026.png"),
  path.join(root, "public", "og-image.png"),
];

const svg = String.raw`
<svg width="1200" height="630" viewBox="0 0 1200 630" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1200" y2="630" gradientUnits="userSpaceOnUse">
      <stop stop-color="#F8FBFF"/>
      <stop offset="0.58" stop-color="#FFFFFF"/>
      <stop offset="1" stop-color="#EEF6FF"/>
    </linearGradient>
    <linearGradient id="logoCircle" x1="72" y1="64" x2="202" y2="202" gradientUnits="userSpaceOnUse">
      <stop stop-color="#0B3C63"/>
      <stop offset="1" stop-color="#061C34"/>
    </linearGradient>
    <linearGradient id="gold" x1="84" y1="88" x2="190" y2="88" gradientUnits="userSpaceOnUse">
      <stop stop-color="#F9C74F"/>
      <stop offset="1" stop-color="#EAA51F"/>
    </linearGradient>
    <linearGradient id="blue" x1="86" y1="471" x2="374" y2="471" gradientUnits="userSpaceOnUse">
      <stop stop-color="#2563EB"/>
      <stop offset="1" stop-color="#0EA5E9"/>
    </linearGradient>
    <linearGradient id="screen" x1="728" y1="113" x2="1075" y2="509" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FFFFFF"/>
      <stop offset="1" stop-color="#F4F8FC"/>
    </linearGradient>
    <filter id="softShadow" x="-20%" y="-20%" width="140%" height="150%" color-interpolation-filters="sRGB">
      <feDropShadow dx="0" dy="18" stdDeviation="24" flood-color="#0F172A" flood-opacity="0.12"/>
    </filter>
    <filter id="logoShadow" x="-30%" y="-30%" width="160%" height="160%" color-interpolation-filters="sRGB">
      <feDropShadow dx="0" dy="10" stdDeviation="12" flood-color="#0F172A" flood-opacity="0.16"/>
    </filter>
  </defs>

  <rect width="1200" height="630" fill="url(#bg)"/>
  <path d="M0 520H1200V630H0V520Z" fill="#EAF2FF"/>
  <path d="M0 572H1200V630H0V572Z" fill="#D9E9FF"/>

  <g filter="url(#logoShadow)">
    <circle cx="137" cy="136" r="72" fill="url(#logoCircle)"/>
    <path d="M87 106C96 80 178 80 187 106C190 116 181 119 176 112C166 98 108 98 98 112C93 119 84 116 87 106Z" fill="url(#gold)"/>
    <path d="M122 93H152V139H190V168H152V205H122V168H84V139H122V93Z" fill="white"/>
    <path d="M122 93H152V139H190V168H152V205H122V168H84V139H122V93Z" stroke="#D9E5F1" stroke-width="2"/>
  </g>

  <text x="232" y="131" font-family="Inter, Arial, sans-serif" font-size="56" font-weight="800" fill="#0F172A">Relius</text>
  <text x="235" y="169" font-family="Inter, Arial, sans-serif" font-size="24" font-weight="650" fill="#2563EB">Free church management with AI</text>

  <text x="86" y="292" font-family="Inter, Arial, sans-serif" font-size="60" font-weight="850" letter-spacing="-1" fill="#0F172A">One calm system</text>
  <text x="86" y="359" font-family="Inter, Arial, sans-serif" font-size="60" font-weight="850" letter-spacing="-1" fill="#0F172A">for ministry work.</text>
  <text x="88" y="408" font-family="Inter, Arial, sans-serif" font-size="25" font-weight="500" fill="#475569">People, giving, groups, check-in, events,</text>
  <text x="88" y="443" font-family="Inter, Arial, sans-serif" font-size="25" font-weight="500" fill="#475569">and pastoral care in one connected platform.</text>

  <rect x="86" y="489" width="288" height="56" rx="28" fill="url(#blue)"/>
  <text x="122" y="525" font-family="Inter, Arial, sans-serif" font-size="22" font-weight="760" fill="white">Start free at relius.ai</text>
  <circle cx="419" cy="516" r="11" fill="#10B981"/>
  <text x="442" y="525" font-family="Inter, Arial, sans-serif" font-size="22" font-weight="700" fill="#047857">No card required</text>

  <g filter="url(#softShadow)">
    <rect x="690" y="78" width="418" height="476" rx="34" fill="#FFFFFF"/>
    <rect x="720" y="108" width="358" height="416" rx="26" fill="url(#screen)" stroke="#D8E3EF" stroke-width="2"/>
    <rect x="720" y="108" width="358" height="70" rx="26" fill="#F8FBFF"/>
    <path d="M720 152H1078V178H720V152Z" fill="#F8FBFF"/>
    <text x="748" y="150" font-family="Inter, Arial, sans-serif" font-size="18" font-weight="800" fill="#334155">Sunday Readiness</text>
    <rect x="999" y="127" width="49" height="26" rx="13" fill="#D1FAE5"/>
    <text x="1011" y="145" font-family="Inter, Arial, sans-serif" font-size="13" font-weight="800" fill="#047857">Live</text>

    <rect x="748" y="208" width="134" height="114" rx="18" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="2"/>
    <text x="770" y="249" font-family="Inter, Arial, sans-serif" font-size="18" font-weight="800" fill="#2563EB">People</text>
    <text x="770" y="288" font-family="Inter, Arial, sans-serif" font-size="34" font-weight="850" fill="#0F172A">1,248</text>

    <rect x="904" y="208" width="144" height="114" rx="18" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="2"/>
    <text x="926" y="249" font-family="Inter, Arial, sans-serif" font-size="18" font-weight="800" fill="#2563EB">Giving</text>
    <text x="926" y="288" font-family="Inter, Arial, sans-serif" font-size="34" font-weight="850" fill="#0F172A">$42.8k</text>

    <rect x="748" y="346" width="300" height="118" rx="20" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="2"/>
    <text x="770" y="383" font-family="Inter, Arial, sans-serif" font-size="18" font-weight="850" fill="#0F172A">Care queue</text>
    <rect x="770" y="402" width="254" height="24" rx="12" fill="#FFFFFF"/>
    <text x="786" y="419" font-family="Inter, Arial, sans-serif" font-size="14" font-weight="700" fill="#334155">New guest follow-up</text>
    <text x="960" y="419" font-family="Inter, Arial, sans-serif" font-size="14" font-weight="800" fill="#2563EB">4</text>
    <rect x="770" y="434" width="214" height="24" rx="12" fill="#FFFFFF"/>
    <text x="786" y="451" font-family="Inter, Arial, sans-serif" font-size="14" font-weight="700" fill="#334155">Prayer requests</text>
    <text x="944" y="451" font-family="Inter, Arial, sans-serif" font-size="14" font-weight="800" fill="#2563EB">12</text>
  </g>

  <text x="88" y="594" font-family="Inter, Arial, sans-serif" font-size="18" font-weight="750" fill="#33506E">AI-assisted ministry workflows</text>
  <text x="397" y="594" font-family="Inter, Arial, sans-serif" font-size="18" font-weight="750" fill="#33506E">Transparent giving fees</text>
  <text x="666" y="594" font-family="Inter, Arial, sans-serif" font-size="18" font-weight="750" fill="#33506E">Built for churches of every size</text>
</svg>
`;

const png = await sharp(Buffer.from(svg)).png({ compressionLevel: 9, quality: 92 }).toBuffer();

await Promise.all(outputPaths.map((outputPath) => fs.writeFile(outputPath, png)));

console.log(`Wrote ${outputPaths.map((outputPath) => path.relative(root, outputPath)).join(", ")}`);
