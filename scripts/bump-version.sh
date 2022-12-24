#!/bin/bash

VERSION=$1
NAMESPACES=(packages/core packages/svelte)

if ! command -v jq &> /dev/null
then
    echo "jq could not be found"
    exit
fi

jq ".version=\"$VERSION\"" package.json > .new.package.json
mv .new.package.json package.json

for namespace in ${NAMESPACES[@]}; do
  for directory in $namespace/*; do
    package=$directory/package.json

    if [ -f $package ]; then
      echo "Bumping version for $directory to $VERSION"
      jq ".version=\"$VERSION\"" $package > $directory/.new.package.json
      mv $directory/.new.package.json $directory/package.json
    fi
  done
done