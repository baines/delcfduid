var self = require('sdk/self');
var events = require('sdk/system/events');

let {Cc, Ci} = require('chrome');
var cookieManager = Cc["@mozilla.org/cookiemanager;1"].getService(Ci.nsICookieManager);

function check_cookies(event){
	if(event.data == "added" || event.data == "changed"){
		let en = cookieManager.enumerator;	
		while(en.hasMoreElements()){
			var cookie = en.getNext().QueryInterface(Ci.nsICookie2);
								
			if(cookie.name == "__cfduid"){
				console.debug("Removed __cfduid from " + cookie.host);
				cookieManager.remove(cookie.host, cookie.name, cookie.path, false);			
			}
		}
	}
}

events.on("cookie-changed", check_cookies);

