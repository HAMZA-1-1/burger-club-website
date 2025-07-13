function togglePassword() {
    const pass = document.getElementById("password");

    const type = pass.type === "password" ? "text" : "password";
    pass.type = type;
}


let email = document.getElementById("email");
let password = document.getElementById("password");

function login() {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const foundUser = users.find(user => user.email === email.value && user.password === password.value);
   
    
    if (foundUser) {
        
        localStorage.setItem('currentuser',JSON.stringify(foundUser))
        window.location.href = "./index.html";
    } else {
        alert("Invalid email or password.");
    }

    email.value = "";
    password.value = "";
}
