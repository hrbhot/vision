#!/bin/bash
set -e
VER=0.0.2
if [ ! "$(docker ps -q -f name=flask)" ]; then
    if [ "$(docker ps -aq -f status=exited -f name=flask)" ]; then
        # cleanup
        docker rm flask
    fi
    # run your container
    docker run -d --name=flask -p 5000:5000 hrbhot/flask:$VER bash -c 'tail -f /dev/null'
fi
