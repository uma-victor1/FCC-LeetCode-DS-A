#!/usr/bin/env bash

# check if number even or odd


(( num = $1 % 2 ))

if [[ "$num" -eq 0 ]]; then
    echo "$1 is an even number"
else
    echo "$1 is an odd number"
fi
