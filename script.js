let passwordInput = document.querySelector('.password');
let passwordError = document.querySelector('#passworderror');
let emailInput = document.querySelector('.email');
let emailError = document.querySelector("#mailerror");
let allgood = document.querySelector("#allgood");

function FormSubmit() {
    let password = passwordInput.value;
    let email = emailInput.value;

    if (password.length <= 8 || password.length === 0) {
        alert("Password should be more than 8 characters!");
    } else if
         (confirm("Are you sure you want to sign up?")) {
            alert("Successful signup!");
        }
     else{
      passwordError.innerText ="";
      emailError.innerText = "";
    }
}

function checkPasswordLength() {
    let password = passwordInput.value;
    
    if (password.length <= 8) {
        passwordError.innerText = "Make sure password is more than 8 characters";
    } else {
        passwordError.innerText ="";
        allgood.innerText = "All good to go!"
    }
}

function checkemail() {
    let email = emailInput.value;
    
    if (!email.includes("@") || !email.includes(".")) {
        emailError.innerText = "Make sure email is more than 3 characters and has @ and a .";
    } else {
      emailError.innerText = "";  
    }
}

