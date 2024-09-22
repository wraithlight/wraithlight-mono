#!/bin/sh

files=$(git status --porcelain | cut -b4-)
for file in $files; do
    echo $file
    git add $file
    git commit -m "chore(*): use named import in jest config

Ref: #933"
done
