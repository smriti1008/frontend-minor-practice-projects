const form = document.getElementById("myForm");

form.addEventListener("submit", function(event){
    event.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const success = document.getElementById("success");

    nameError.innerText="";
    emailError.innerText="";
    passwordError.innerText="";
    success.innerText="";

    let isValid = true;

    if(name===""){
        nameError.innerText = "Name is required";
        isValid=false;
    }
    if(email==="" || !email.includes("@") || !email.includes(".")){
        emailError.innerText = "Enter a valid email";
        isValid=false;
    }
    if(password.length<6){
        passwordError.innerText = "password must have at least 6 characters";
        isValid=false;
    }
    if(isValid){
        success.innerText="Form submitted successfully";
        form.reset();
    }
})