#!/bin/bash

NETWORK_NAME=WL_Internal

docker network inspect $NETWORK_NAME >/dev/null 2>&1 || \
    docker network create --driver bridge $NETWORK_NAME
