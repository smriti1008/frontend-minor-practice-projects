// const password = document.getElementById("pass");
// const confirmPassword = document.getElementById("confirm-pass");
// const feedback = document.getElementById("feedback-msg");

// function validatePassword() {
//     const pass = password.value;
//     const confirmPass = confirmPassword.value;

//     if (pass.length >= 8 && pass === confirmPass) {
//         feedback.textContent = "Passwords matched";
//         feedback.style.color = "green";
//     } else {
//         feedback.textContent = "Passwords do not match";
//         feedback.style.color = "red";
//     }
// }

// password.addEventListener("input", validatePassword);
// confirmPassword.addEventListener("input", validatePassword);



const password = document.createElement("input");
password.type = "password";
password.placeholder = "Enter password";



const confirmPassword = document.createElement("input");
confirmPassword.type = "password";
confirmPassword.placeholder = "Confirm password";

const feedback = document.createElement("p");

document.body.appendChild(password);
document.body.appendChild(confirmPassword);
document.body.appendChild(feedback);

function validatePassword() {
    const pass = password.value;
    const confirmPass = confirmPassword.value;

    if (pass.length >= 8 && pass === confirmPass) {
        feedback.innerText = "Passwords matched";
        feedback.style.color = "green";
    } else {
        feedback.innerText = "Passwords do not match";
        feedback.style.color = "red";
    }
}

password.addEventListener("input", validatePassword);
confirmPassword.addEventListener("input", validatePassword);
