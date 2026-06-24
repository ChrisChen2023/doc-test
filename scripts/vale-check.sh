#!/bin/bash

# Vale linting script for bilingual documentation
# Usage: ./scripts/vale-check.sh [--fix] [docs-2.0-en|docs-2.0-zh|all]

set -e

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Default options
FIX_MODE=false
TARGET="all"

# Parse arguments
while [[ $# -gt 0 ]]; do
  case $1 in
    --fix)
      FIX_MODE=true
      shift
      ;;
    all|docs-2.0-en|docs-2.0-zh)
      TARGET="$1"
      shift
      ;;
    --help)
      echo "Usage: ./scripts/vale-check.sh [OPTIONS] [TARGET]"
      echo ""
      echo "Options:"
      echo "  --fix         Automatically fix issues where possible"
      echo "  --help        Show this help message"
      echo ""
      echo "Targets:"
      echo "  all           Check both English and Chinese docs (default)"
      echo "  docs-2.0-en   Check English documentation only"
      echo "  docs-2.0-zh   Check Chinese documentation only"
      exit 0
      ;;
    *)
      echo "Unknown option: $1"
      exit 1
      ;;
  esac
done

# Check if Vale is installed
if ! command -v vale &> /dev/null; then
  echo -e "${RED}✗ Vale is not installed${NC}"
  echo "Install Vale with: brew install vale"
  echo "Or visit: https://vale.sh/docs/getting-started/installation/"
  exit 1
fi

echo -e "${GREEN}Vale $(vale --version)${NC}"
echo ""

# Determine which paths to check
PATHS=()
if [ "$TARGET" = "all" ]; then
  PATHS=("docs-2.0-en" "docs-2.0-zh")
elif [ "$TARGET" = "docs-2.0-en" ] || [ "$TARGET" = "docs-2.0-zh" ]; then
  PATHS=("$TARGET")
fi

# Run Vale checks
TOTAL_ERRORS=0

for PATH in "${PATHS[@]}"; do
  echo -e "${YELLOW}Checking: $PATH${NC}"
  
  if [ "$FIX_MODE" = true ]; then
    echo "  Running with --fix"
    vale --fix "$PATH" || TOTAL_ERRORS=$((TOTAL_ERRORS + $?))
  else
    vale "$PATH" || TOTAL_ERRORS=$((TOTAL_ERRORS + $?))
  fi
  
  echo ""
done

if [ $TOTAL_ERRORS -eq 0 ]; then
  echo -e "${GREEN}✓ All checks passed!${NC}"
  exit 0
else
  echo -e "${RED}✗ Found issues (exit code: $TOTAL_ERRORS)${NC}"
  echo ""
  echo "To automatically fix issues, run:"
  echo "  ./scripts/vale-check.sh --fix $TARGET"
  exit 1
fi
