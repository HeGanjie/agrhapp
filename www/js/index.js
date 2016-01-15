document.addEventListener('deviceready', function () {
    if (navigator.connection.type != Connection.NONE) {
        location.replace("https://www.agrhp2p.com/mobile/cordova-wrapper.html");
	} else {
    	document.body.removeAttribute('class');
        document.getElementById('network-not-working-hint').style.display = "block";
    }
}, false);

