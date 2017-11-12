FROM node
MAINTAINER Christian Dobert <christian.dobert@clear-it.de>

USER node


ENV HOME=/home/node
ENV APP_NAME=project-clara

# use "user-global" installing for angular/cli
RUN mkdir $HOME/.npm-packages
RUN echo "prefix=$HOME/.npm-packages" >> ~/.npmrc
ENV PATH=$HOME/.npm-packages/bin:${PATH}

RUN npm install -g @angular/cli@latest

WORKDIR $HOME

USER root
COPY . $HOME/$APP_NAME/
RUN chown -R node:node $HOME/*
RUN chmod 770 $HOME/$APP_NAME
USER node

# before switching to user we need to set permission properly
# copy all files, except the ignored files from .dockerignore
WORKDIR $HOME/$APP_NAME

RUN npm install