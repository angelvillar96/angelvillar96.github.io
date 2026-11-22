#!/usr/bin/env bash
# Rebuilds public/cv.pdf from the LaTeX résumé, leaving out the home address and phone number.
# Usage: npm run cv [-- "/path/to/LaTEX Resume"]
set -euo pipefail

src="${1:-$HOME/Documents/Work/Bonn_and_others/LaTEX Resume}"
out="$(cd "$(dirname "$0")/.." && pwd)/public/cv.pdf"
tmp="$(mktemp -d)"
trap 'rm -rf "$tmp"' EXIT

cp -r "$src"/. "$tmp"
cd "$tmp"
# Comment out private contact lines; the original folder is not modified.
sed -i -E 's/^[[:space:]]*\\(address|phone)\b/%&/' resume.tex
latexmk -pdf -interaction=nonstopmode -halt-on-error resume.tex >/dev/null
cp resume.pdf "$out"
echo "Updated $out"
