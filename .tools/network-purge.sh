#!/bin/bash

NETWORK_NAME=WL_Internal

docker network rm $NETWORK_NAME >/dev/null 2>&1
