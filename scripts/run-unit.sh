#!/bin/zsh
set -euo pipefail
REPO="${ATLAS_REPO:-$HOME/application-atlas}"   # set ATLAS_REPO to your checkout
export PATH="$HOME/.local/node/bin:$PATH"
LOCK="$REPO/.run.lock"
LOG="$REPO/logs/$(date +%F_%H%M).log"
mkdir -p "$REPO/logs"
[ -e "$LOCK" ] && { echo "run already active" >> "$LOG"; exit 0; }
touch "$LOCK"; trap 'rm -f "$LOCK"' EXIT
cd "$REPO"
git fetch origin && git checkout main && git pull --ff-only
/usr/bin/caffeinate -i claude -p "$(cat prompts/run-unit.md)" \
  --permission-mode dontAsk \
  --settings '{"permissions":{"allow":["Read","Edit","Write","Glob","Grep","WebSearch","WebFetch","Bash(git *)","Bash(gh *)","Bash(node *)","Bash(npm *)"]}}' \
  --max-turns 120 \
  --max-budget-usd 8 \
  --output-format json >> "$LOG" 2>&1
