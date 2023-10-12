#!/bin/bash

CONTAINER_NAME=wraithlight-mailhog

docker stop $CONTAINER_NAME >/dev/null 2>&1 || true
docker rm $CONTAINER_NAME >/dev/null 2>&1 || true
docker build -t $CONTAINER_NAME -f mailhog/Dockerfile .
docker run -d \
    --name $CONTAINER_NAME \
    -p 8997:1025 \
    -p 8996:8025 \
    $CONTAINER_NAME

