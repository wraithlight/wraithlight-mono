#!/bin/bash
for d in $(find . -not -path ./.build -mindepth 1 -maxdepth 1 -type d); do (
    echo "============="
    echo $d;
    cd "$d" &&
    source ./build.sh &&
    cd ..
); done
