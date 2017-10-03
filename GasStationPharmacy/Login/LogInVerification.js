function check(form) {
    if (form.userid.value == "fabri" && form.pswrd.value == "123") {
        window.open('EmployeeLogIn.html', '_self')

    }
    else {
        form.userid.value = ""
        form.pswrd.value = ""
        alert("the username and password you entered don't match")
    }
}
function EnterRegister() {
    window.open('UserRegister.html', '_self')
}