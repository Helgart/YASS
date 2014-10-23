#!/bin/sh

docker build -t yass .
docker run -ti -p 8080:80 -v `pwd`:/data yass
