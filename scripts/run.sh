#!/bin/bash

# Run the Next.js app locally for development. Frees port 3000 first
# (orphaned `next dev` processes survive closed terminals), then starts
# a fresh dev server and opens the app in the default browser.
# Usage: ./scripts/run.sh [path]
#   ./scripts/run.sh              # opens http://localhost:3000/
#   ./scripts/run.sh cover-letter # opens http://localhost:3000/cover-letter

set -e

cd "$(dirname "$0")/.."

PORT=3000
URL="http://localhost:$PORT/${1#/}"

# === Free the port ===
# Kill anything still bound to $PORT (typically a previous `next dev`
# left running). Skipping this would let `next dev` auto-pick a
# different port — and the browser-open below would then point at the
# wrong URL.
existing=$(lsof -ti tcp:$PORT 2>/dev/null || true)
if [ -n "$existing" ]; then
  echo "Port $PORT in use (pid $existing) — terminating…"
  # SIGTERM first so the process can flush; SIGKILL if still alive.
  kill $existing 2>/dev/null || true
  for _ in $(seq 1 10); do
    lsof -ti tcp:$PORT >/dev/null 2>&1 || break
    sleep 0.2
  done
  if lsof -ti tcp:$PORT >/dev/null 2>&1; then
    kill -9 $existing 2>/dev/null || true
    sleep 0.3
  fi
fi

echo "Installing dependencies..."
npm install

# Pick the platform's "open URL" command; bail gracefully if neither
# exists (e.g. CI) — the dev server still starts.
opener=""
if command -v open >/dev/null 2>&1; then
  opener="open"        # macOS
elif command -v xdg-open >/dev/null 2>&1; then
  opener="xdg-open"    # Linux
fi

# Wait for the dev server to start serving HTTP, then open the browser.
# Runs in a background subshell so the foreground npm process stays
# attached to the terminal for logs / Ctrl+C.
if [ -n "$opener" ]; then
  (
    for _ in $(seq 1 60); do
      if curl -s -o /dev/null -w "%{http_code}" "$URL" 2>/dev/null | grep -q '^[23]'; then
        "$opener" "$URL"
        exit 0
      fi
      sleep 0.5
    done
  ) &
fi

echo ""
echo "Starting dev server at $URL"
echo "Press Ctrl+C to stop."
echo ""

# LOCAL_DEV=true removes the /me basePath so the app works at localhost:3000
LOCAL_DEV=true npm run dev
