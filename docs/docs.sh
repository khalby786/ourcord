rm -rf src/classes/ src/interfaces/ src/modules src/globals.md src/index.md
rm -rf src/.vuepress/dist
npx typedoc ../src --out documentation --json src/.vuepress/public/docs.json --plugin typedoc-plugin-markdown --hideProjectName true --hideBreadcrumbs true --namedAnchors true --readme ../README.md --theme default
mv documentation/* src
rm -rf src/modules/_export_.md
cp ../README.md src/index.md
sed -i '1i---\nsidebar: auto\n---' src/index.md
rm -rf documentation
