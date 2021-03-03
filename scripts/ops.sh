#!/bin/bash

export UI_IMAGE=paulwizviz/trg-ui-dev
export SERVER_IMAGE=paulwizviz/trg-server
export IMAGE_TAG=current

COMMAND="$1"

function build() {
    #docker build -f ./build/ui.dockerfile -t ${UI_IMAGE}:${IMAGE_TAG} .
    docker-compose -f ./deployments/docker-compose.yaml build server
    # docker build -f ./build/server.dockerfile -t ${SERVER_IMAGE}:${IMAGE_TAG} .
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

    docker rmi -f ${UI_IMAGE}:${IMAGE_TAG}
    docker rmi -f ${SERVER_IMAGE}:${IMAGE_TAG}
    docker rmi -f $(docker images --filter "dangling=true" -q)
}

message="$0 build | clean | run | status | stop"

if [ "$#" != 1 ]; then
    echo $message 
    exit 1
fi

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
        echo $message
        ;;
esac