/**
 * Copyright 2014 encuestame
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

define({

	proxyPort: 9000,
	proxyUrl: 'http://localhost:9000/',

	capabilities: {
		'selenium-version': '2.40.0'
	},

	environments: [
		{
			browserName: 'chrome', version: '33', platform: [ 'OS X 10.6', 'OS X 10.8', 'OS X 10.9', 'Linux', 'Windows XP', 'Windows 7', 'Windows 8', 'Windows 8.1' ]
		}
	],

	maxConcurrency: 3,
	useSauceConnect: true,

	// Connection information for the remote WebDriver service. If using Sauce Labs, keep your username and password
	// in the SAUCE_USERNAME and SAUCE_ACCESS_KEY environment variables unless you are sure you will NEVER be
	// publishing this configuration file somewhere
	webdriver: {
		host: 'localhost',
		port: 4445,
		SAUCE_USERNAME: 'jotadeveloper',
		SAUCE_ACCESS_KEY: 'a7a381a1-06d0-4416-8e89-fe449e663c0f'
	},

	loader: {
		// Packages that should be registered with the loader in each testing environment
		packages: [
			{ name: 'me', location: 'js/me' },
			{ name: 'dojo', location: 'js/dojo' },
			{ name: 'dojox', location: 'js/dojox' },
			{ name: 'dijit', location: 'js/dijit' },
			{ name: 'chart', location: 'js/chart' },
			{ name: 'Modernizr', location: 'js/lib/Modernizr', main: 'Modernizr' }
		]
	},

	// Non-functional test suite(s) to run in each browser
	suites: [ 'tests/all' ],
	//
	//	// Functional test suite(s) to run in each browser once non-functional tests are completed
	functionalSuites: [],
	//

	// A regular expression matching URLs to files that should not be included in code coverage analysis
	excludeInstrumentation: /^tests\//
});
