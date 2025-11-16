#!/bin/bash
CONTAINER_NAME=wraithlight-app-editor
SQL_ROOT_PASSWORD=wraithlight-editor-app-pw
SQL_USERNAME=wraithlight-editor-app-user-1
SQL_PASSWORD=wraithlight-editor-app-user-1-pw
OUT_PORT=5502
IN_PORT=4502
NETWORK_NAME=WL_Internal

docker stop $CONTAINER_NAME >/dev/null 2>&1 || true
docker rm $CONTAINER_NAME >/dev/null 2>&1 || true
docker build -t $CONTAINER_NAME -f ./Dockerfile ../../..
docker run \
  -d \
  -e WLTYPE=DEV \
  --p $OUT_PORT:$IN_PORT \
  --name $CONTAINER_NAME \
  --network $NETWORK_NAME \
  $CONTAINER_NAME
