Encuestame Widget Testing with Intern
================
Encuestame UI is based in Dojo Widgets, we use [Intern](http://theintern.io/) to manage the Unit and Functional testing, this is a prototype project in beta phase.

[![Build Status](https://travis-ci.org/encuestame/enme-intern-test.svg?branch=grunt-enme-intern)](https://travis-ci.org/encuestame/enme-intern-test)


[![Selenium Test Status](https://saucelabs.com/buildstatus/jotadeveloper)](https://saucelabs.com/u/jotadeveloper)

[![Selenium Test Status](https://saucelabs.com/browser-matrix/jotadeveloper.svg)](https://saucelabs.com/u/jotadeveloper)

### Setup

1. The repository should accessible via a local HTTP server (optional).
	* Via Apache HTTP Server
	* I would recommend use [serve](https://www.npmjs.org/package/serve)
	* Create your own serve with Node.js with [Express](http://expressjs.com/)

2. Install node modules

    ```
    npm install
    ```
    
The application should be accessible via `http://somePath/tests/` after the url is adjusted to match your local web server.

### Running tests

##### Local node tests

    node node_modules/intern/client.js config=tests/intern        
    
Previously we need to start PhatomJS in your terminal
    
    phantomjs --webdriver=4444

##### Local browser tests

Navigate to `http://somePath/tests/node_modules/intern/client.html?config=tests/intern`, making sure to adjust the url to match your local web server.


##### Runing with Selenium
Run Intern locally is quite straightforward, follow the next steps:

````
$ java -jar webdrivers/selenium-grid/selenium-server-standalone-2.41.0.jar -p 4444 &
$ node node_modules/intern/runner.js config=tests/intern_local.js
````
### 

##### Remote node / browser tests

[Sauce Labs](https://saucelabs.com/) is enabled in the [**intern_full**](https://github.com/encuestame/enme-intern-test/blob/grunt-enme-intern/tests/intern_full.js) config file by default.

    node node_modules/intern/runner.js config=tests/intern_full

### Continous Integration
   
#### Travis-ci

Encuestame is currently connected with Travis continous integration, every push trigger a remote build.