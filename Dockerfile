FROM dockerfile/nodejs
MAINTAINER Michael FORASTE <michael.foraste@gmail.com>

RUN npm install supervisor -g
RUN npm install

EXPOSE 80

ENTRYPOINT supervisor Application/Server.js
