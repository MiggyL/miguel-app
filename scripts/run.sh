#!/bin/bash

# Run the Next.js app locally for development
# Usage: ./scripts/run.sh

set -e

cd "$(dirname "$0")/.."

echo "Installing dependencies..."
npm install

echo ""
echo "Starting dev server at http://localhost:3000"
echo "Press Ctrl+C to stop."
echo ""

# LOCAL_DEV=true removes the /me basePath so the app works at localhost:3000
LOCAL_DEV=true npm run dev
