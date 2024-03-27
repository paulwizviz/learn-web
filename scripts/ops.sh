#!/bin/bash

export REACTJS_IMAGE=learn-web/reactjs:current
export EXPRESS_IMAGE=learn-web/express:current
export HTMX_IMAGE=learn-web/htmx:current

export NETWORK_NAME=lean-web_trg-network

COMMAND="$1"

case $COMMAND in
    "build")
        docker-compose -f ./build/docker-compose.yaml build
        ;;
    "clean") 
        docker-compose -f ./deployments/docker-compose.yaml down
        docker network rm -f ${NETWORK_NAME}
        docker rmi -f binocarlos/noxy:latest
        docker rmi -f ${HTMX_IMAGE}
        docker rmi -f ${REACTJS_IMAGE}
        docker rmi -f ${EXPRESS_IMAGE}
        docker rmi -f $(docker images --filter "dangling=true" -q)
        ;;
    "run")
        docker-compose -f ./deployments/docker-compose.yaml up -d
        ;;
    "status")
        docker ps -a
        ;;
    "stop")
        docker-compose -f ./deployments/docker-compose.yaml down
        ;;
    *)
        echo "$0 build | clean | run | status | stop
Command:
   build    images
   clean    reset network
   run      start network
   status   of network
   stop     running network
"
        ;;
esac