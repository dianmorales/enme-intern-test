var soda = require('soda')
,   assert = require('assert');

var browser = soda.createSauceClient({
  'url': 'http://saucelabs.com/'
, 'username': 'jotadeveloper'
, 'access-key': 'a7a381a1-06d0-4416-8e89-fe449e663c0f'
, 'os': 'Windows 2003'
, 'browser': 'firefox'
, 'browser-version': '7'
, 'name': 'This is an example test'
});

browser.on('command', function(cmd, args){
  console.log(' \x1b[33m%s\x1b[0m: %s', cmd, args.join(', '));
});

browser
  .chain
  .session()
  .open('/test/guinea-pig')
  .getTitle(function(title){
    assert.ok(~title.indexOf('I am a page title - Sauce Labs'), 'Title did not include the query');
  })
  .end(function(err){
    this.queue = null;
    this.setContext('sauce:job-info={"passed": ' + (err === null) + '}', function(){
      browser.testComplete(function(){
        if (err) throw err;
      });
    });
  });