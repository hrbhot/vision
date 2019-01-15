#!/bin/bash
set -e
VER=0.0.2
if [ ! "$(docker ps -q -f name=flask-ut)" ]; then
    if [ "$(docker ps -aq -f name=flask-ut)" ]; then
        # cleanup
        docker rm flask-ut
    fi
    # run your container
    docker run -d --name=flask-ut -p 5001:5000 hrbhot/flask:$VER bash -c 'tail -f /dev/null'
fi
