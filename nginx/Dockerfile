FROM debian:wheezy
MAINTAINER Michael FORASTE <michael.foraste@gmail.com>

RUN apt-get update && apt-get install -y nginx

## Shutting down daemon mode
RUN echo "daemon off;" >> /etc/nginx/nginx.conf

EXPOSE 80 22
ENTRYPOINT /usr/sbin/nginx -c /etc/nginx/nginx.conf