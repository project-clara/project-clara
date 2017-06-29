FROM bankmonitor/spring-boot:latest

# prepare a user which runs everything locally! - required in child images!
RUN useradd --user-group --create-home --shell /bin/false app

ENV HOME=/home/app
WORKDIR $HOME

RUN git clone https://github.com/Bankmonitor/sample-app.git

ENV APP_NAME=sample-app

# before switching to user we need to set permission properly
# copy all files, except the ignored files from .dockerignore
RUN chown -R app:app $HOME/*

USER app
WORKDIR $HOME/$APP_NAME

RUN mvn -f pom.xml clean package
