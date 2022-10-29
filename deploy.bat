@echo off

npm "run" "build"
cd "dist"
git "init"
git "checkout" "-B" "main"
git "add" "-A"
git "commit" "-m" "deploy"
git "push" "-f" "git@github.com:mcshaz\mcshaz\letter-swap-decoder.git" "main:gh-pages"
cd ..
