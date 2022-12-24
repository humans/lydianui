VERSION=$1
sh ./scripts/bump-version.sh $VERSION
npm run compile -ws
npm publish --workspaces --access public