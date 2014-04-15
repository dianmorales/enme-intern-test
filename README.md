## Outdated branch

Currently I'm working in a new branch  **grunt-enme-intern**, the new branch has a better structure of modules.

https://github.com/encuestame/enme-intern-test/tree/grunt-enme-intern

This branch is still linked to Encuestame **1.147**

[![Build Status](https://travis-ci.org/encuestame/enme-intern-test.svg?branch=grunt-enme-intern)](https://travis-ci.org/encuestame/enme-intern-test)


[![Selenium Test Status](https://saucelabs.com/buildstatus/jotadeveloper)](https://saucelabs.com/u/jotadeveloper)

[![Selenium Test Status](https://saucelabs.com/browser-matrix/jotadeveloper.svg)](https://saucelabs.com/u/jotadeveloper)


## Setup

1. The repository should accessible via a local HTTP server.

2. Install node modules

    ```
    npm install
    ```

The application should be accessible via `http://somePath/tests/` after the url is adjusted to match your local web server.

## Running tests

* **Local node tests**

    ```
    node node_modules/intern/client.js config=tests/intern
    ```

* **Local browser tests**

    Navigate to `http://somePath/tests/node_modules/intern/client.html?config=tests/intern`, making sure to adjust the url to match your local web server.

* **Remote node / browser tests**

    ```
    node node_modules/intern/runner.js config=tests/intern
    ```
