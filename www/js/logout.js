facebookConnectPlugin.getLoginStatus(function logout() {
        var data = {
            "token": localStorage.getItem("token")
        };
        $.ajax({
            type: "POST",
            contentType: 'application/json; charset=UTF-8',
            url: "http://enshelf.com/api/logout",
            processData: true,
            data: JSON.stringify(data),
            dataType: "json"
        }).done(successFn).fail(errorFn);
        //success function
        function successFn(result) {
            facebookConnectPlugin.logout(function success() {
                    localStorage.clear();
                    location.href = "index.html";
                },
                function failure() {
                    Materialize.toast('Sorry the app could not log out of your facebook account', 3000);
                });
        };
        //if there is an error in the ajax request display the error
        function errorFn(xhr, status, strErr) {
            Materialize.toast('There seems to be an Error in connection' + strErr, 4000);
        };
    },
    function () {
        var data = {
            "token": localStorage.getItem("token")
        };
        $.ajax({
            type: "POST",
            contentType: 'application/json; charset=UTF-8',
            url: "http://enshelf.com/api/logout",
            processData: true,
            data: JSON.stringify(data),
            dataType: "json"
        }).done(successFn).fail(errorFn);
        //success function
        function successFn() {
            localStorage.clear();
            location.href = "index.html";
        };
        //if there is an error in the ajax request display the error
        function errorFn(xhr, status, strErr) {
            Materialize.toast('There seems to be an Error in connection' + strErr, 4000);
        };
    }

);
