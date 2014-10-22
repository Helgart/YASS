FROM debian:wheezy
MAINTAINER Michael FORASTE <michael.foraste@gmail.com>

RUN apt-get update && apt-get install -y apache2

EXPOSE 80
ENTRYPOINT /bin/bash -c "/etc/apache2/envvars && /usr/sbin/apache2 -DFOREGROUND"