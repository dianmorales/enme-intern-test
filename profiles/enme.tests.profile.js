// This is a build profile for Dojo version of TodoMVC.
dependencies = {
	stripConsole: "normal",

	selectorEngine:"acme",

	layers: [
		{
			name: "dojo.js",
			dependencies: [
				"dojo.domReady",
				"dojo.parser"
				//"todo.app18"
			]
		}
	],

	prefixes: [
		[ "dijit", "../js/dijit" ],
		[ "dojox", "../js/dojox" ],
		[ "doh", "../js/util/doh" ],
		[ "me", "../js/me" ],
		[ "mobile", "../js/mobile" ]
	]
}
