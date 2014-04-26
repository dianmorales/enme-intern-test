/* jshint node:true */

require('colors');

var wd = require('wd');
var browser = wd.promiseChainRemote();

// optional extra logging
browser.on('status', function(info) {
	console.log(info.cyan);
});
browser.on('command', function(eventType, command, response) {
	console.log(' > ' + eventType.cyan, command, (response || '').grey);
});
browser.on('http', function(meth, path, data) {
	console.log(' > ' + meth.magenta, path, (data || '').grey);
});

/* jshint evil: true */
browser
	.init({
		browserName:'chrome'
	})
	.get("http://admc.io/wd/test-pages/guinea-pig.html")
	.title().status()
	//.should.become('WD Tests')
	.elementById('i am a link')
	.click()
	.eval("window.location.href")
	//.should.eventually.include('guinea-pig2')
	.back()
	.elementByCss('#comments').type('Bonjour!')
	.getValue()
	//.should.become('Bonjour!')
	.fin(function() { return browser.quit(); })
	.done();
