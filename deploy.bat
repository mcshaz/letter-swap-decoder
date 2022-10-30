:: run with .\deploy.bat
:: for linux, see https://vitejs.dev/guide/static-deploy.html#github-pages
echo on
npm "run" "build"
cd "dist"
git "init"
git "checkout" "-B" "main"
git "add" "-A"
git "commit" "-m" "deploy"
git "push" "-f" "git@github.com:mcshaz/letter-swap-decoder.git" "main:gh-pages"
cd ..