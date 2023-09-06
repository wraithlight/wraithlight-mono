#!/bin/bash

CONTAINER_NAME=wraithlight-swadit

docker stop $CONTAINER_NAME >/dev/null 2>&1 || true
docker rm $CONTAINER_NAME >/dev/null 2>&1 || true
docker build -t $CONTAINER_NAME -f swadit/Dockerfile .
docker run -d \
    --name $CONTAINER_NAME \
    -p 8998:80 \
    $CONTAINER_NAME

