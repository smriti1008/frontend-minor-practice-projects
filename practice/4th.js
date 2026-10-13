const Password = document.getElementById("pass");
const confirmPassword = document.getElementById("confirm-pass");
const feedback = document.getElementById("feedback-msg");

function validatePassword(){
    const pass = Password.value;
    const confirmPass = confirmPassword.value;

    if(pass.length>=8 && pass===confirmPass)
    {
        feedback.textContent = "Passwords matched";
        feedback.style.color = "green";
    }
    else{
        feedback.textContent = "Passwords do not match";
        feedback.style.color = "red";
    }
}


