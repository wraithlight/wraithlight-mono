#!/bin/bash
for d in ./*/ ; do (
    cd "$d" &&
    source ./build.sh &&
    source ./run.sh &&
    cd ..
); done
