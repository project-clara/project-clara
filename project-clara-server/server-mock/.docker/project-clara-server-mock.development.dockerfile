FROM gradle
MAINTAINER Jonas Spiegel <jonas.spiegel@clear-engineer.de>

USER root
# prepare a user which runs everything locally! - required in child images!
RUN useradd --user-group --create-home --shell /bin/false app

ENV HOME=/home/app
WORKDIR $HOME


ENV APP_NAME=project-clara

# before switching to user we need to set permission properly
# copy all files, except the ignored files from .dockerignore
COPY . $HOME/$APP_NAME/
RUN chown -R app:app $HOME/*

USER app
WORKDIR $HOME/$APP_NAME

RUN gradle build
