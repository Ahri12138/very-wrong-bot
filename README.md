# Very Wrong Bot

A free, open-source daily logic game about a very overconfident robot.

Read a rule, inspect six labelled tiles, and find the **one** label that breaks the rule. Play five rounds, collect an excuse, and share a spoiler-free challenge with a friend.

Features: English/Chinese interface, daily UTC puzzle, unlimited random practice, reproducible challenge links, explanatory feedback, score cards, and local first-attempt records.

The character is fictional. Rules and jokes are scripted; this does not run a live AI model. There are no accounts, wallets, token sales, payments, prizes, or global leaderboard. Scores can be edited locally and are not proof of skill.

## Play and run

The published game is a self-contained index.html. It has no remote assets, API keys, runtime dependencies or model inference costs. Serve it with any ordinary static HTTP server.

The full source is contained in that HTML. The development source and test files are also included in this repository. After editing, run node build.mjs; run tests with node --test engine.test.mjs (Node.js 22+). Tests cover 1,000 generated games, logical boundaries, UTC dates and share-link reproducibility.

## Privacy

Only the chosen language and first daily score are kept in browser local storage. Clearing site data removes them. The app sends no gameplay analytics. The hosting provider may log request information, including IP addresses. Sharing a result is optional.

## Limits

The puzzle generator runs entirely on the client, so someone can inspect answers. This is a casual game, not an anti-cheating system or intelligence assessment. No claim is made that the brand is trademark registered or that this game is affiliated with an AI vendor.

MIT licensed. Created with AI-assisted development.
