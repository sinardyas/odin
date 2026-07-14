# Conventions

The rules this repo runs on. Read this before starting a new topic — the tooling
won't enforce any of it, so discipline is the whole mechanism.

## Structure

```
odin/
├── README.md          # hand-maintained front door → each topic's MISSION.md
├── CONVENTIONS.md     # this file
└── topics/
    └── <topic>/       # one self-contained /teach workspace per topic
        ├── MISSION.md
        ├── RESOURCES.md
        ├── NOTES.md
        ├── lessons/
        ├── reference/
        ├── assets/
        └── learning-records/
```

## The rules

1. **One topic = one folder under `topics/`.** Each is an independent
   [`/teach`](https://github.com/mattpocock) workspace. One mission per folder — if a
   topic splits into two unrelated things, that's two folders.

2. **`cd` into the topic folder before running `/teach`.** The skill treats the
   *current directory* as the workspace and writes `MISSION.md`, `lessons/`, etc. into
   it. Run it from the repo root and it scatters those files at the root and collides
   topics. Always:
   ```
   cd topics/<topic>
   /teach
   ```
   For a brand-new topic, `mkdir topics/<topic>` first, then `cd` in.

3. **Duplication is accepted, not a bug.** Each topic carries its own
   `assets/course.css` and its own `NOTES.md` learner profile. There is deliberately no
   shared layer — topics are sealed boxes. Don't try to DRY them.

4. **Hand-maintain `README.md`.** Nothing updates it for you. Every new topic gets a row
   linking to its `MISSION.md`. When a mission is revised, check the index row still
   tells the truth. It *will* drift — the fix is ten seconds, so just fix it.

## What this repo is (and isn't)

This is N independent learning projects sharing one `git clone` and one README — not a
single integrated course. The payoff is one place, one clone, no per-topic repo
ceremony. If you ever need to publish or share a *single* topic on its own, it's welded
in here with everything else; that's the accepted trade.
