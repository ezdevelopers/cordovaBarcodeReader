 document.addEventListener("deviceready", onDeviceReady, false);

 function onDeviceReady() {
     var options = new ContactFindOptions();
     options.filter = "";
     options.multiple = true;
     //options.desiredFields = [navigator.contacts.fieldType.id];
     options.hasPhoneNumber = true;
     var fields = ["*"];
     navigator.contacts.find(fields, onSuccess, onError, options);
 };

 function onSuccess(contacts) {
     var ul = document.createElement("ul");
     for (var i = 0; i < contacts.length; i++) {
         var newLi = document.createElement("li");
         var contactItem = contacts[i].name.formatted;
         newLi.innerHTML = contactItem ;
         ul.appendChild(newLi);
     }
     localStorage.setItem("contacts", JSON.stringify(ul));
     alert("Contacts are ready!");
 };

 function onError() {
     alert("Failed to get contacts");
 };