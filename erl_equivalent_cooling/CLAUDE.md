# Paper project (专属层)

This folder is one paper. The reusable rules, agents and scripts live in `~/.claude/paper-kit/` (通用层).

@~/.claude/paper-kit/rules/style-rules.md
@~/.claude/paper-kit/rules/handoff-protocol.md

## Role of the main session
- The main session is the coordinator. It plans, calls agents, merges their reports and asks the author for decisions.
- Thinking about storyline and methods happens in the long conversation, not here. Its output is `storyline.md` and `outline.md`. Agents do not change these two files. Only the author does, or the main session with the author's approval.
- Pass agents file paths, never pasted file contents.
- Agents that are independent run in parallel (data-checker with consistency-checker, lit-scout with figure-maker).

## Pipeline
1. `/find-lit` → lit-scout → author screens Zotero inbox, exports `refs.bib` → evidence-curator
2. data-checker drafts `results/key-numbers.csv` if needed → author confirms rows
3. figure-maker builds main figures from `figures/specs.md`
4. `/draft <section>` in this order: Results → Methods → Discussion → Introduction → Conclusion/Policy → Abstract → Title/Highlights/Significance
5. `/check-all` → format-editor → `manuscript.md` → optional reviewer

## Project facts
- See `paper.yaml` for journal, Zotero collections, conda env and paths.
- Terminology lives in `glossary.md`.
