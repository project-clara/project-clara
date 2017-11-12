![project-clara](../docs/assets/project-clara.png)

# Project-Clara Client

[![Angular Style Guide](https://mgechev.github.io/angular2-style-guide/images/badge.svg)](https://angular.io/styleguide)

## Introduction

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.0.

Project-Clara is a simple appointment, feedback and survey application.

## Commit Message Format

This project follows the [angular commit-message convention](https://github.com/conventional-changelog/conventional-changelog-angular/blob/master/convention.md).

## Versioning

This project follows the [Semantic Versioning 2.0.0](http://semver.org/) specification.

## How to start

```bash
git clone git@github.com:project-clara/project-clara.git
cd project-clara/project-clara-client

# to install the Angular CLI:
npm install -g @angular/cli

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
- [How to start](#how-to-start)
- [Table of Content](#table-of-content)
- [Dockerization](#dockerization)
  + [How to build and start the dockerized version of the application](#how-to-build-and-start-the-dockerized-version-of-the-application)
  + [Development build and deployment](#development-build-and-deployment)
  + [Production build and deployment](#production-build-and-deployment)
- [Development server](#development-server)
- [Code scaffolding](#code-scaffolding)
- [Build](#build)
- [Running unit tests](#running-unit-tests)
- [Running end-to-end tests](#running-end-to-end-tests)
- [Further help](#further-help)
- [Bumping Version Number](#bumping-version-number)
- [Releasing](#releasing)
- [Contributing](#contributing)
- [Change Log](#change-log)
- [License](#license)
- [Useful links and resources](#useful-links-and-resources)
  + [Documentation for the technolgies and frameworks used](#documentation-for-the-technologies-and-frameworks-used)
  + [Articles and Code Examples](#articles-and-code-examples)
  + [Github Repositories](#github-repositories)
  + [Books](#books)

## Dockerization

The application provides full Docker support. You can use it for both development as well as production builds and deployments.

### How to build and start the dockerized version of the application

The Dockerization infrastructure is described in the `../docker-compose.yml` (respectively `../docker-compose.production.yml`.
The application consists of two containers:
* `project-clara-angular` - In development mode, this container serves the angular app. In production mode it builds the angular app, with the build artifacts being served by the Nginx container
* `project-clara-nginx` - This container is used only production mode. It serves the built angular app with Nginx.

### Development build and deployment

Run the following:

```bash
$ cd ..
$ docker-compose build
$ docker-compose up -d
```

Now open your browser at [http://localhost:4200](http://localhost:4200)

### Production build and deployment

Run the following:

```bash
$ cd ..
$ docker-compose -f docker-compose.production.yml build
$ docker-compose -f docker-compose.production.yml up project-clara-angular   # Wait until this container has finished building, as the nginx container is dependent on the production build artifacts
$ docker-compose -f docker-compose.production.yml up -d project-clara-nginx  # Start the nginx container in detached mode
```

Now open your browser at [http://localhost:8080](http://localhost:8080)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Bumping Version Number

If you follow semantic versioning and use the [angular commit-message convention](https://github.com/conventional-changelog/conventional-changelog-angular/blob/master/convention.md), you can use the following npm task to get the appropiate next version number

```bash
$ npm run bump-version
```

## Releasing

You can use the following workflow to ease your release process:

*Note: The following scripts use the npm-packages [conventional-github-releaser](https://github.com/conventional-changelog/conventional-github-releaser), [conventional-recommended-bump](https://github.com/conventional-changelog/conventional-recommended-bump) and [standard-changelog](https://github.com/conventional-changelog/standard-changelog). Make sure you install them first by running: `npm install -g conventional-github-releaser conventional-recommended-bump standard-changelog`. Furthermore, [gitflow](https://github.com/nvie/gitflow) is partially used for the following commands*

0. Given your project was initialized with `$ git flow init` and your current branch being `develop` is ready to be released, do the following
1. Get your next-version number:`$ npm run bump-version`
2. Start your next-release: `$ git flow release start <next-version-from-step-1>`
3. Bump the version number in your `package.json` with the version from step 1
4. Generate your `CHANGELOG.md`: `$ npm run changelog`
5. Make your release commit: `$ git add --all && git commit -m 'chore(release): <next-version-from-step-1>'`
6. Finish your release: `$ git flow release finish <next-version-from-step-1>`
7. Push your branches and tags to GitHub: `$ git push origin master && git push origin develop && git push origin --tags`
8. Draft and publish your GitHub Relase: `$ npm run github-release`

## Contributing

Please see the [CONTRIBUTING](https://github.com/project-clara/project-clara/blob/develop/.github/CONTRIBUTING.md) file for guidelines.

## Change Log

You can follow the [Angular change log here](https://github.com/project-clara/project-clara/blob/develop/CHANGELOG.md).

## License

The Unlicense

## Useful resources and links

This section contains a collection of links to useful resources to help with the development.

### Documentation for the technolgies and frameworks used

- Angular 2 Official API Docs [API 2.0 Preview - ts](https://angular.io/docs/ts/latest/api/)
- Typescript Language Reference [Welcome to Typescript](http://www.typescriptlang.org/)
- Bootstrap 4 Documentation [Introduction Bootstrap](http://v4-alpha.getbootstrap.com/getting-started/introduction/)
- Fontawesome Documentation [Font Awesome Cheatsheet](https://fortawesome.github.io/Font-Awesome/cheatsheet/)
- Node Package Manager [npm](https://www.npmjs.com/)
- Gulp [gulp.js - the streaming build system](http://gulpjs.com/)
- Jasmine [Jasmine: Behaviour-Driven JavaScript](http://jasmine.github.io/)
- Karma [Karma - Spectacular Test Runner for JavaScript](https://karma-runner.github.io/)
- Protractor [Protractor - end to end testing for AngularJS](http://www.protractortest.org/)

### Articles and Code Examples

- Angular 2 Forms Guide [The Ultimate Guide to Forms in Angular 2](http://blog.ng-book.com/the-ultimate-guide-to-forms-in-angular-2/)
- Angular 2 CRUD Example [A deep dive into Angular 2.0](https://www.opencredo.com/de/2015/07/08/a-deep-dive-into-angular-2-0/)
- Auth0 - Angular 2 Introduction [Creating your first Angular 2 app: From authentication to calling an API and everything in between](https://auth0.com/blog/2015/05/14/creating-your-first-real-world-angular-2-app-from-authentication-to-calling-an-api-and-everything-in-between/)
- Auth0 - Angular 2 JSON Web Token (JWT) Introduction [Introducing angular2-jwt: A Library for Angular 2 Authentication](https://auth0.com/blog/2015/11/10/introducing-angular2-jwt-a-library-for-angular2-authentication/)
- Auth0 - Angular 2 Series:
  + Part 1: Pipes [Angular 2 Series - Part 1: Working with Pipes](https://auth0.com/blog/2015/09/03/angular2-series-working-with-pipes/)
  + Part 2: Domain Models & Dependency Injection [Angular 2 Series - Part 2: Domain Models and Dependency Injection](https://auth0.com/blog/2015/09/17/angular-2-series-part-2-domain-models-and-dependency-injection/)
  + Part 3: Http [Angular 2 Series - Part 3: Using Http](https://auth0.com/blog/2015/10/15/angular-2-series-part-3-using-http/)
  + Part 4: Component Router [Angular 2 Series - Part 4: Component Router In-Depth](https://auth0.com/blog/2016/01/25/angular-2-series-part-4-component-router-in-depth/)
- Angular 2 Unit Testing [Angular 2 - Unit Testing recipes](https://medium.com/google-developer-experts/angular-2-unit-testing-with-jasmine-defe20421584#.3brgjham7)
- Angular 2 HTTP Service Testing [Testing Http Services in Angular 2 with Jasmine](http://chariotsolutions.com/blog/post/testing-http-services-angular-2-jasmine/)
- Angular 2 Functional Reactive Programming [Functional Reactive Programming in Angular 2](http://lukajcb.github.io/blog/angular2/2016/04/02/frp-in-angular-2.html)
- Angular 2 i18n Example [i18n on Angular2](https://www.reddit.com/r/Angular2/comments/4ascwj/i18n_on_angular2/)

### Github Repositories

- [auth0/angular2-authentication-sample](https://github.com/auth0/angular2-authentication-sample) - This is a sample that shows how to add authentication to an Angular 2 (ng2) app
- [auth0/angular2-jwt](https://github.com/auth0/angular2-jwt) - Helper library for handling JWTs in Angular 2 apps
- [mgechev/angular2-seed](https://github.com/mgechev/angular2-seed) - Seed project for Angular 2 apps with statically typed build
- [mgechev/angular2-style-guide](https://github.com/mgechev/angular2-style-guide) - Community-driven set of best practices and style guidelines for Angular 2 application development
- [auth0/auth0-angular2](https://github.com/auth0/auth0-angular2) - Auth0 + Angular 2 with angular2-jwt
- [AngularShowcase/ng2-bootstrap-sbadmin](https://github.com/AngularShowcase/ng2-bootstrap-sbadmin) - SB Admin 2.0 project with Angular 2 and ng2-bootstrap
- [typicode/json-server](https://github.com/typicode/json-server) - Get a full fake REST API with zero coding in less than 30 seconds (seriously)
- [Marak/faker.js](https://github.com/Marak/faker.js) - Generate massive amounts of fake data in Node.js and the browser
- [krimple/angular2-webpack-demo-routing-and-http
](https://github.com/krimple/angular2-webpack-demo-routing-and-http) - A small sample app for a blog entry (upcoming) on using Angular 2 routing and Http together - built on angular2-class-webpack - includes database using json-server, which emulates a backend with zero friction and stores data in db.json - began as a cloned copy of angular2-class-webpack
- [staltz/introrx.md](https://gist.github.com/staltz/868e7e9bc2a7b8c1f754) - The introduction to Reactive Programming you've been missing

### Books

- ng-book 2 [ng-book 2: The Complete Book on Angular 2](https://www.ng-book.com/2/)
