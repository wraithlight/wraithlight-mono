#!/bin/bash

TARGET_CONTAINER=wraithlight-db-logs
CONTAINER_NAME=wraithlight-db-phpmyadmin
NETWORK_NAME=WL_Internal

docker stop $CONTAINER_NAME >/dev/null 2>&1 || true
docker rm $CONTAINER_NAME >/dev/null 2>&1 || true
docker run -d \
    --name $CONTAINER_NAME \
    --network $NETWORK_NAME \
    -e PMA_HOST=$TARGET_CONTAINER \
    -p 8999:80 \
    phpmyadmin/phpmyadmin:latest
