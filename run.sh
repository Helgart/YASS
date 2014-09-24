#!/bin/sh

docker build -t yass ./docker
docker run -ti -v `pwd`:/data yass
