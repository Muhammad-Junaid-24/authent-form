var userName, password;

function signUp() {
    // e.preventDefault();
    userName = document.getElementById("name_register").value;
    password = document.getElementById("password_register").value;
    var email = document.getElementById("email_register").value;



    document.getElementById("greeting").innerHTML = `${userName} ${password} ${email}`;
}

function signIn() {
    var userNameSignIn = document.getElementById("name_signIn").value;
    var passwordSignIn = document.getElementById("password_signIn").value;

    document.getElementById("greeting").innerHTML = userNameSignIn;

    if (userNameSignIn == userName && passwordSignIn == password) {
        console.log("Successfully Logged In")
        alert("Successfully Logged In");
    }
    else {
        console.log("Invalid username or password")
        alert("Invalid username or password");
    }
}