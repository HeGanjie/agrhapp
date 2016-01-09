document.addEventListener('deviceready', function () {
    var ref = cordova.InAppBrowser.open('http://www.agrhp2p.com/mobile/cordova-wrapper.html', '_self', 'location=no');
    ref.addEventListener('exit', function () {
        navigator.app.exitApp();
    });
}, false);
