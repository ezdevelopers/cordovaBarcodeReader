function logout(){
    alert("logging out");
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
        localStorage.clear();
        alert("Logout Successful");
        location.href="index.html";
    };
    //if there is an error in the ajax request display the error
    function errorFn(xhr, status, strErr) {
        alert("Error in logout");
    };
}