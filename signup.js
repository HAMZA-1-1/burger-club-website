let fullname = document.getElementById('fullname')
let email = document.getElementById('email')
let password = document.getElementById('password')
let confirmpassword = document.getElementById('confirm')

function togglePassword() {
    const pass = document.getElementById("password");
    const confirm = document.getElementById("confirm");

    const type = pass.type === "password" ? "text" : "password";
    pass.type = type;
    confirm.type = type;
}


function signup() {



    let obj = {
        fullName: fullname.value,
        email: email.value,
        password: password.value,
        confirmpassword: confirmpassword.value
    };
    if (fullname.value == '' || email.value == '' || password.value == '' || confirmpassword.value == '') {
        alert('please fill all the feild ')
    } else if (password.value !== confirmpassword.value) {
        alert('Both passwords do not match');
        return;
    }
    else {
        let existingData = JSON.parse(localStorage.getItem("users")) || [];

        const isEmailExists = existingData.some(user => user.email === email.value);

        if (isEmailExists) {
            alert("This email is already registered!");
            return;
        }

        existingData.push(obj);

        localStorage.setItem("users", JSON.stringify(existingData));
        fullname.value = "";
        email.value = "";
        password.value = "";
        confirmpassword.value = "";

        window.location.href = './login.html';
    }



}
