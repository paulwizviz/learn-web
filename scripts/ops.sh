#!/bin/bash

export UI_IMAGE_NAME=paulwizviz/react-dashboard-ui
export SERVER_IMAGE_NAME=paulwizviz/react-dashboard-server
export IMAGE_TAG=current

COMMAND="$1"

function build() {
    docker build -f ./build/server.dockerfile -t ${SERVER_IMAGE_NAME}:${IMAGE_TAG} .
    docker build -f ./build/ui.dockerfile -t ${UI_IMAGE_NAME}:${IMAGE_TAG} .
}

function run() {
    docker-compose -f ./deployments/docker-compose.yaml up -d
}

function stop(){
    docker-compose -f ./deployments/docker-compose.yaml down
}

function status(){
    docker ps -a
}

function clean(){
    docker-compose -f ./deployments/docker-compose.yaml down
    docker rmi -f ${UI_IMAGE_NAME}:${IMAGE_TAG}
    docker rmi -f ${SERVER_IMAGE_NAME}:${IMAGE_TAG}
    docker rmi -f $(docker images --filter "dangling=true" -q)
}

case $COMMAND in
    "build")
        build
        ;;
    "clean")
        clean
        ;;
    "run")
        run
        ;;
    "status")
        status
        ;;
    "stop")
        stop
        ;;
    *)
        echo "$0 [build | clean | run | status | stop]"
        ;;
esac