# Building and Testing Project-Clara

This document describes how to set up your development environment to build and test Project-Clara.
It also explains the basic mechanics of using `git`, `node`, and `npm`.

* [Prerequisite Software](#prerequisite-software)
* [Getting the Sources](#getting-the-sources)
* [Installing NPM Modules](#installing-npm-modules)
* [Building](#building)
* [Running Tests Locally](#running-tests-locally)

See the [contribution guidelines](https://github.com/project-clara/project-clara/blob/develop/.github/CONTRIBUTING.md)
if you'd like to contribute to Project-Clara.

## Prerequisite Software

Before you can build and test Project-Clara, you must install and configure the
following products on your development machine:

* [Git](http://git-scm.com) and/or the **GitHub app** (for [Mac](http://mac.github.com) or
  [Windows](http://windows.github.com)); [GitHub's Guide to Installing
  Git](https://help.github.com/articles/set-up-git) is a good source of information.

* [Node.js](http://nodejs.org), (version `>=5.4.1 <6`) which is used to run a development web server,
  run tests, and generate distributable files. We also use Node's Package Manager, `npm`
  (version `>=3.5.3 <4.0`), which comes with Node. Depending on your system, you can install Node either from
  source or as a pre-packaged bundle.

* [Java Development Kit](http://www.oracle.com/technetwork/es/java/javase/downloads/index.html) which is used
  to execute the selenium standalone server for e2e testing.

## Getting the Sources

Fork and clone the Project-Clara repository:

1. Login to your GitHub account or create one by following the instructions given
   [here](https://github.com/signup/free).
2. [Fork](http://help.github.com/forking) the [main Project-Clara
   repository](https://github.com/project-clara/project-clara).
3. Clone your fork of the Project-Clara repository and define an `upstream` remote pointing back to
   the Project-Clara repository that you forked in the first place.

```shell
# Clone your GitHub repository:
$ git clone git@github.com:<github username>/project-clara.git

# Go to the Project-Clara directory:
$ cd project-clara

# Add the main Project-Clara repository as an upstream remote to your repository:
$ git remote add upstream https://github.com/project-clara/project-clara.git
```
## Installing NPM Modules

Next, install the JavaScript modules needed to build and test Project-Clara client:

```shell
# Install Project-Clara client project dependencies (package.json)
$ cd project-clara-client
$ npm install
```

**Optional**: In this document, we make use of project local `npm` package scripts and binaries
(stored under `./node_modules/.bin`) by prefixing these command invocations with `$(npm bin)`; in
particular `gulp` and `protractor` commands. If you prefer, you can drop this path prefix by either:

*Option 1*: globally installing these two packages as follows:

* `npm install -g gulp` (you might need to prefix this command with `sudo`)
* `npm install -g protractor` (you might need to prefix this command with `sudo`)

Since global installs can become stale, and required versions can vary by project, we avoid their
use in these instructions.

*Option 2*: globally installing the package `npm-run` by running `npm install -g npm-run`
(you might need to prefix this command with `sudo`). You will then be able to run locally installed
package scripts by invoking: e.g., `npm-run gulp build`
(see [npm-run project page](https://github.com/timoxley/npm-run) for more details).


*Option 3*: defining a bash alias like `alias nbin='PATH=$(npm bin):$PATH'` as detailed in this
[Stack Overflow answer](http://stackoverflow.com/questions/9679932/how-to-use-package-installed-locally-in-node-modules/15157360#15157360) and used like this: e.g., `nbin gulp build`.


## Building

To build Project-Clara client run:

```shell
$ ng build
```

* Results are put in the dist folder.

## Running Tests Locally

To run tests:

```shell
$ cd project-clara-client
$ ng test               # Run all project-clara client tests
$ ng e2e                # Run all project-clara client end-to-end tests
```

You should execute the 2 test suites before submitting a PR to github.

All the tests are executed on our Continuous Integration infrastructure and a PR could only be merged once the tests pass.

- Travis CI fails if any of the test suites described above fails.

## <a name="clang-format"></a> Formatting your source code

Project-Clara uses [clang-format](http://clang.llvm.org/docs/ClangFormat.html) to format the source code. If the source code
is not properly formatted, the CI will fail and the PR can not be merged.

You can automatically format your code by running:

``` shell
$ gulp format
```

## Linting/verifying your source code

You can check that your code is properly formatted and adheres to coding style by running:

``` shell
$ cd project-clara-client
$ ng lint
```
