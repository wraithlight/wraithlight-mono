#!/bin/sh

files=$(git status --porcelain | cut -b4-)
index=0
for file in $files; do
    if [[ "batch-committer.sh" == "$file" ]]; then
      continue
    fi
    index=$(expr $index + 1)
    pad_index=$(printf %04d $index)
    echo "* $pad_index | $file";

    git add "$file"
    git commit -m "$1"
done
