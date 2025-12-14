#!/bin/bash
CONTAINER_NAME=wraithlight-app-gw
SQL_ROOT_PASSWORD=wraithlight-gw-app-pw
SQL_USERNAME=wraithlight-gw-app-user-1
SQL_PASSWORD=wraithlight-gw-app-user-1-pw
OUT_PORT=5505
IN_PORT=4505
NETWORK_NAME=WL_Internal

docker stop $CONTAINER_NAME >/dev/null 2>&1 || true
docker rm $CONTAINER_NAME >/dev/null 2>&1 || true
docker build -t $CONTAINER_NAME -f ./Dockerfile ../../..
docker run \
  -d \
  -e WLTYPE=DEV \
  -p $OUT_PORT:$IN_PORT \
  --name $CONTAINER_NAME \
  --network $NETWORK_NAME \
  $CONTAINER_NAME
