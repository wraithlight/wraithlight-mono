#!/bin/bash
CONTAINER_NAME=wraithlight-app-content
SQL_ROOT_PASSWORD=wraithlight-content-app-pw
SQL_USERNAME=wraithlight-content-app-user-1
SQL_PASSWORD=wraithlight-content-app-user-1-pw
OUT_PORT=5501
IN_PORT=4501
NETWORK_NAME=WL_Internal

docker stop $CONTAINER_NAME >/dev/null 2>&1 || true
docker rm $CONTAINER_NAME >/dev/null 2>&1 || true
docker build -t $CONTAINER_NAME -f ./Dockerfile ../../..
docker run \
    -d \
    -e wlType=LOCAL \
    -p $OUT_PORT:$IN_PORT \
    --name $CONTAINER_NAME \
    --network $NETWORK_NAME \
    $CONTAINER_NAME
