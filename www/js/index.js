document.addEventListener('deviceready', function () {
    var ref = cordova.InAppBrowser.open('https://www.agrhp2p.com/', '_self', 'location=no');
    ref.addEventListener('exit', function () {
        navigator.app.exitApp();
    });
}, false);
