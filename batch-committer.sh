#!/bin/sh

files=$(git status --porcelain | cut -b4-)
for file in $files; do
    echo $file
    git add $file
    git commit -m "chore(*): ignore spec files during build

Ref: #537"
done
