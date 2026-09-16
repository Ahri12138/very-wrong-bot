# 废星回收局 / ERR ORBIT

A playable incremental asteroid factory in the Very Wrong Bot universe.

[Play](https://ahri12138.github.io/very-wrong-bot/orbit.html) · [Late-game showroom](https://ahri12138.github.io/very-wrong-bot/orbit.html?demo=1) · [Design and economy notes](orbit-design.md)

Build six facility types, manage power and heat, upgrade five research paths, complete expeditions, restore three relics and prestige into a new cycle. Every memory core grants +8% permanent production. Facilities visibly appear on the asteroid.

Daily energy is earned from tasks and expeditions, capped at 100 shared points. Spend 20 for a non-stacking 10-minute +10% production pulse. Prestige preserves the daily quota. Offline production is capped at four hours at 50% efficiency. Saves remain in the browser and can be exported/imported; showroom progress is isolated.

## Files and running

orbit.html is the complete current game, including inline SVG art, styles, engine, UI and tests. Serve this file with any static HTTP server. index.html routes the public root to it. No build or package installation is required. A Google Fonts stylesheet is optional; the game uses system fonts if unavailable.

The older app.mjs, engine.mjs, engine.test.mjs, style.css, index.template.html and build.mjs belong to the original five-round puzzle. They are retained as legacy source. Do not run the legacy build script to deploy ERR ORBIT: it would overwrite the new entry point with the old game. The original page is also available in Git history.

## Verification

Open Settings (存档 · 设置), then Run economy checks (运行经济自检). Fourteen pure-state checks pass, covering resource conservation, power throttling, heat, offline caps, prestige, save validation, conversion caps and split transactions, daily energy quota persistence, pulse expiry, and 500 generated factory configurations. These tests do not mutate the active save or call a network.

Browser gameplay verified: purchases, task rewards, research, relic repair, prestige, expedition rewards, energy pulse, save export, invalid save rejection, refresh recovery, and conversion simulator cap. Desktop reviewed. Responsive styles exist, but the browser viewport tool did not apply the requested mobile size in this session; mobile device verification remains outstanding.

## Token-related boundary

The VWB conversion laboratory is an isolated simulator. It does not read a wallet, spend, burn, mint, redeem, or alter gameplay from a simulated balance. Alloy, data and memory cores are local game scores, not financial assets. Real token integration would require a server-authoritative ledger, verified and idempotent transaction processing, shared daily limits and abuse controls. No token was issued by this game update.

No real player retention or commercial demand has been validated. No anti-cheating or return guarantees. Client saves and clock can be edited. No global prize leaderboard.

## Privacy and license

Progress is stored only in the current browser. The hosting and font providers may log requests. No gameplay analytics are sent. Optional generated audio is off by default. MIT licensed, AI-assisted development.
