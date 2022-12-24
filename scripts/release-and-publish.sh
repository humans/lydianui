VERSION=$1
sh ./scripts/release.sh $VERSION
npm publish --workspaces --access public