#!/bin/bash

export REACTJS_IMAGE=learn-js/reactjs:current
export EXPRESS_IMAGE=learn-js/express:current

export NETWORK_NAME=lean-web_trg-network

COMMAND="$1"

function build() {
    docker-compose -f ./build/docker-compose.yaml build
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

    docker rmi -f binocarlos/noxy:latest
    docker rmi -f ${REACTJS_IMAGE}
    docker rmi -f ${EXPRESS_IMAGE}
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