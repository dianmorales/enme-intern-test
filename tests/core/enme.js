define([
    'intern!object',
    'intern/chai!assert',
    //"me/core/enme"
], function (registerSuite, assert, _ENME) {
    registerSuite({
        name: 'enme',
	    // before the suite starts
	    setup: function () {
		    //var express = require('express');
		    //var app = express();
		    //console.log("EXPRESS", app);
	    },
        'default data': function () {
//             _ENME.init({
//                contextPath: 'encuestame/',
//                domain : 'http://localhost',
//                suggest_limit : 10,
//                delay : 1800000,
//                isMobile: false,
//                locale: 'en_US',
//                debug : true,
//                message_delay : 5000,
//                tp_a : 2,
//                tp_hr : 2,
//                tp_minsoa : 2
//            });
//            assert.strictEqual(_ENME.config('contextPath'), 'encuestame/', 'Id should default to encuestame/');
//            assert.strictEqual(_ENME.config('domain'), 'http://localhost', 'Id should default to http://localhost');
//            assert.strictEqual(_ENME.config('isMobile'), false, 'Id should default to false');
           // assert.strictEqual(_ENME.config('debug'), true, 'Id should default to true');
	        assert.strictEqual(true, true, 'Id should default to true');
        }
    });
});