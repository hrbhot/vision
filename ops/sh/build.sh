#!/bin/bash
set -e
if [ ! "$(docker ps -q -f name=flask)" ]; then
    if [ "$(docker ps -aq -f status=exited -f name=flask)" ]; then
        # cleanup
        docker rm flask
    fi
    # run your container
    docker run -d --name=flask -p 5000:5000 flask:0.0.2 bash -c 'tail -f /dev/null'
fi
