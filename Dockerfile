FROM dockerfile/nodejs
MAINTAINER Michael FORASTE <michael.foraste@gmail.com>

RUN npm install supervisor -g

EXPOSE 80

ENTRYPOINT supervisor Application/Server.js
