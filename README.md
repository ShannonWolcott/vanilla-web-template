# Vanilla Web Template

* No build system required!
* Support ESModules (`import`/`export`)
* Developer is only expected to have `eslint` installed globally and `live server` extension installed in VSCode.
* Site is served at root (for example [localhost:5500](https://alchemycodelab.github.io/vanilla-web-template/)).
* QUnit is used for testing
* Tests are serve at `/test` (for example [localhost:5500/test](https://alchemycodelab.github.io/vanilla-web-template/test)).
* GHPages can be enabled to run the project from GitHub

TravisCI is enabled via `.travis.yml` which installs `eslint` and `esm` (and optionally `jsdom` for DOM APIs). 
It runs `qunit` via `/test/index.js`
