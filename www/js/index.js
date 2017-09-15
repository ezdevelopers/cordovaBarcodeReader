function barcodescanner() {
    cordova.plugins.barcodeScanner.scan(
        function (result) {
            if (result.text == 9780684852867) {
                localStorage.setItem('img', 'http://covers.openlibrary.org/b/isbn/9780684852867-L.jpg');
                localStorage.setItem('Title', 'FIRST, BREAK ALL THE RULES');
                location.href = "result.html";
            } else {

                alert("We got a barcode\n" +
                    "Result: " + result.text + "\n" +
                    "Format: " + result.format + "\n" +
                    "Cancelled: " + result.cancelled);
            }
        },
        function (error) {
            alert("Scanning failed: " + error);
        }, {
            preferFrontCamera: false, // iOS and Android
            showFlipCameraButton: false, // iOS and Android
            showTorchButton: true, // iOS and Android
            torchOn: false, // Android, launch with the torch switched on (if available)
            saveHistory: true, // Android, save scan history (default false)
            prompt: "Place a barcode inside the scan area", // Android
            resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
            //formats : "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
            //orientation : "landscape", // Android only (portrait|landscape), default unset so it rotates with the device
            disableAnimations: true, // iOS
            disableSuccessBeep: false // iOS
        }
    );
}
var app = {
    // Application Constructor
    initialize: function () {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function () {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function (id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
        listContacts();
    }
};

function listContacts() {
    var options = new ContactFindOptions();
    options.filter = "Bob";
    options.multiple = true;
    options.desiredFields = [navigator.contacts.fieldType.id];
    options.hasPhoneNumber = true;
    var fields = [navigator.contacts.fieldType.displayName, navigator.contacts.fieldType.name];
    navigator.contacts.find(fields, onSuccess, onError, options);
}

function onSuccess(contacts) {
    var ul = document.querySelector("#contact-list");
    for (var i = 0; i < contacts.length; i++) {
        var newLi = document.createElement("li");
        newLi.innerHTML = contacts[i].name.formatted;
        ul.appendChild(newLi);
    }
    alert("We succeded!");
}

function onError() {
    alert("Failed to get contacts");
}

app.initialize();