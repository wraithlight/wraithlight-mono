#!/bin/bash
for d in ./*/ ; do (
    cd "$d" &&
    source ./build.sh &&
    cd ..
); done
