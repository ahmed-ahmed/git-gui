#!/bin/bash

FILES=`git ls-tree --name-only HEAD`
MAXLEN=0
for f in $FILES; do
    if [ ${#f} -gt $MAXLEN ]; then
        MAXLEN=${#f}
    fi
done
for f in $FILES; do
    str=$(git log -1 --format="%cr|%cn|%s" $f)
    printf "%-${MAXLEN}s|%s\n" "$f" "$str"
done
