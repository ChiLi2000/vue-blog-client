yarn build &&
git checkout gh-pages &&
rm -rf static *.html &&
mv dist/* ./ &&
rm -rf dist;
git add . &&
git commit -m 'update' &&
git push &&
git checkout -
