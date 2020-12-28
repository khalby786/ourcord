rm -rf docs/src/classes/ docs/src/interfaces/ docs/src/modules docs/src/globals.md docs/src/index.md
rm -rf docs/src/.vuepress/dist
npx typedoc --out documentation src --json docs/src/.vuepress/public/docs.json --plugin typedoc-plugin-markdown --hideProjectName true --hideBreadcrumbs true --namedAnchors true --readme README.md --theme default
mv documentation/* docs/src
rm -rf docs/src/modules/_export_.md
cp README.md docs/src/index.md
sed -i '1i---\nsidebar: auto\n---' docs/src/index.md
rm -rf documentation
