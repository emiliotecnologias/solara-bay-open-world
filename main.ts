// SOLARA BAY — make.fun "Make GTA 6" (gta6-01) entry runner.
// Node 22, standard library only. Copies game/ and screenshots/ into
// $MAKEFUN_OUTPUT_DIR (default /output) and writes dossier.json there,
// using buildDossier from ./vendor/makefun-game.ts (the kit library).
//
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { cpSync, existsSync, mkdirSync, readdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildDossier } from './vendor/makefun-game.ts';

const here = fileURLToPath(new URL('.', import.meta.url));
const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(out, { recursive: true });
cpSync(join(here, 'game'), join(out, 'game'), { recursive: true });
mkdirSync(join(out, 'screenshots'), { recursive: true });
if (existsSync(join(here, 'screenshots'))) {
  cpSync(join(here, 'screenshots'), join(out, 'screenshots'), { recursive: true });
}

writeFileSync(
  join(out, 'dossier.json'),
  buildDossier(out, {
    text_max_bytes: 163840,
    screenshots: { max: 4, max_bytes: 262144 },
    game_max_files: 993,
    game_max_bytes: 50331648,
    game_path_max_bytes: 1000,
  }),
);

const shots = readdirSync(join(out, 'screenshots')).filter((f) => /\.(png|jpe?g|webp)$/i.test(f));
console.log(`SOLARA BAY bundle written to ${out} (screenshots: ${shots.length})`);
