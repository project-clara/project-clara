![project-clara](docs/assets/project-clara.png)

# Project-Clara

[![Angular Style Guide](https://mgechev.github.io/angular2-style-guide/images/badge.svg)](https://angular.io/styleguide) [![Build Status](https://travis-ci.org/project-clara/project-clara.svg?branch=develop)](https://travis-ci.org/project-clara/project-clara)

## Introduction

Project-Clara is a simple appointment, feedback and survey application.

## Commit Message Format

This project follows the [angular commit-message convention](https://github.com/conventional-changelog/conventional-changelog-angular/blob/master/convention.md).

## Versioning

This project follows the [Semantic Versioning 2.0.0](http://semver.org/) specification.

## How to start the client

```bash
git clone https://github.com/project-clara/project-clara.git
cd project-clara/project-clara-client
# install the project's dependencies
npm install
# watches your files and uses livereload by default
ng serve

# dev build
ng build
# prod build
ng build --prod
```

## Table of Contents

- [Introduction](#introduction)
- [Commit Message Format](#commit-message-format)
- [Versioning](#versioning)
- [How to start the client](#how-to-start)
- [Table of Content](#table-of-content)
- [Dockerization](#dockerization)
  + [How to build and start the dockerized version of the application](#how-to-build-and-start-the-dockerized-version-of-the-application)
  + [Development build and deployment](#development-build-and-deployment)
  + [Production build and deployment](#production-build-and-deployment)

## Dockerization

The application provides full Docker support. You can use it for both development as well as production builds and deployments.

### How to build and start the dockerized version of the client application 

The Dockerization infrastructure is described in the `docker-compose.yml` (respectively `docker-compose.production.yml`.
The application consists of two containers:
* `project-clara-angular` - In development mode, this container serves the angular app. In production mode it builds the angular app, with the build artifacts being served by the Nginx container
* `project-clara-nginx` - This container is used only production mode. It serves the built angular app with Nginx.

### Development build and deployment

Run the following:

```bash
$ docker-compose build
$ docker-compose up -d
```

Now open your browser at [http://localhost:9080](http://localhost:9080)

### Production build and deployment

Run the following:

```bash
$ docker-compose -f docker-compose.production.yml build
$ docker-compose -f docker-compose.production.yml up project-clara-angular   # Wait until this container has finished building, as the nginx container is dependent on the production build artifacts
$ docker-compose -f docker-compose.production.yml up -d project-clara-nginx  # Start the nginx container in detached mode
```

Now open your browser at [http://localhost:8080](http://localhost:8080)
