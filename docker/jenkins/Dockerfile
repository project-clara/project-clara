FROM jenkins
MAINTAINER Edgar König <edgar.koenig@clear-it.de>

RUN whoami

# if we want to install via apt
USER root

RUN apt-get update && apt-get install -y sudo apt-transport-https ca-certificates curl software-properties-common

# install Docker
RUN curl -fsSL https://download.docker.com/linux/debian/gpg | apt-key add -

RUN add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/debian $(lsb_release -cs) stable"

RUN apt-get update \
&& apt-get install -y docker-ce \
&& rm -rf /var/lib/apt/lists/*

# install docker-compose
RUN curl -L https://github.com/docker/compose/releases/download/1.14.0/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose
RUN chmod +x /usr/local/bin/docker-compose

RUN usermod -aG docker jenkins
