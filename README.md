# SOLARA BAY — Open-World Crime Sandbox

[![make.fun · gta6-01](https://make.fun/badge/gta6-01.svg)](https://make.fun/bounty/gta6-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-01)
[![rank](https://make.fun/badge/gta6-01/emiliotecnologias/solara-bay-open-world/rank.svg)](https://make.fun/bounty/gta6-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-01)
[![reward](https://make.fun/badge/gta6-01/emiliotecnologias/solara-bay-open-world/reward.svg)](https://make.fun/bounty/gta6-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-01)

An original open-world crime game that runs in a desktop browser from static files.
Built for make.fun's **"Make GTA 6"** bounty (`gta6-01`).

You are Milo, a fixer-for-hire in **Solara Bay**, a sunny coastal city of palm-lined
avenues, glass towers, a marina and a beach. Walk it, steal any car on it, work five
jobs for cash, and stay ahead of the S.B.P.D. — or don't, and watch the stars climb.

Everything is original: the city, characters, vehicles, names, story, art and sound
were created for this entry. No assets from any commercial game. Every sprite is drawn
with Canvas code and every sound is synthesized with WebAudio. **Zero network requests
at runtime.**

## Run it

Open `game/index.html` in a desktop browser (Chrome recommended) and press **Enter**.
The whole game is that one file — it also works from `file://`.

If your browser blocks anything from `file://`, serve the folder instead:

```sh
cd game && python3 -m http.server 8080   # then open http://localhost:8080
```

## What you do

Five jobs, in order, each a marker in the world with a HUD objective and a cash reward:

1. **First Run** ($250) — reach Milo's contact by the marina.
2. **Hot Wheels** ($500) — steal the pink Solara GT and deliver it to the lock-up.
3. **Heat Check** ($750) — reach 3 wanted stars, then lose the S.B.P.D. completely.
4. **Courier Rush** ($1,000) — hit 3 checkpoints against the clock.
5. **Last Ferry** ($1,500) — get to the end of the pier.

After the story: free roam. Cash, mission progress and position auto-save to
`localStorage` (press **N** on the title screen for a fresh game).

## Controls

| Key | On foot | In a car |
|---|---|---|
| **W A S D** / arrows | Move | Throttle, brake/reverse, steer |
| **Shift** | Sprint | — |
| **E** | Enter vehicle | Exit vehicle |
| **Space** | — | Handbrake / drift |
| **Mouse** | Aim | — |
| **Click** | Shoot | — |
| **R** | Reload | — |
| **P / Esc** | Pause | Pause |
| **M** | Mute | Mute |

## The world

- 10×10-block city on a street grid: intersections with crosswalks, sidewalks,
  parks with trees, a beach with palms, a marina pier and animated water.
- Six named districts (Downtown Solara, Palm Heights, Old Town, University District,
  Marina District, Harbor Flats) with on-screen toasts as you cross into them.
- Live traffic that brakes for obstacles, pedestrians who stroll and flee gunfire
  and speeding cars, parked cars you can steal anywhere.
- A 5-star wanted system: crimes raise the heat, S.B.P.D. cruisers chase and ram,
  get stopped at low speed and you're **BUSTED**; lose their sight and the stars fade.
- HUD with cash, clock, wanted stars, health, ammo, objective line with distance,
  and a circular minimap.

## License

MIT — see `LICENSE`.
