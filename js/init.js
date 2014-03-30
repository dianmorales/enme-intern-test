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

var config = {
	contextPath :  "./"
}

var Offline = function() {
	this.state = true;
};

require([
	"dojo",
	"dojo/_base/declare",
	"dojo/ready",
	'me/support/Websocket',
	'me/support/Offline',
	"me/core/enme"
], function(dojo, declare, ready, Offline, _ENME) {
	ready(function(){
		_ENME.init({
			contextPath: '/',
			domain : 'localhost',
			suggest_limit : 10,
			delay : 1800000,
			isMobile: false,
			locale: 'en',
			debug : true,
	        message_delay : 5000,
	        activity : {
	            url : 'localhost',
	            logLevel : "1",
				maxConnections : 1,
	            maxNetworkDelay : 100,
	            delay : 3000,
	            limit : 2
	        },
	        tp_a : 2,
	        tp_hr : 1,
	        tp_minsoa : 1
	    });
        try {
	      var offline = new Offline();
		  _ENME.setOffline(offline);
		} catch(error) {
			console.log('error websocket', error);
		}
    });
});