const password = document.getElementById('password');
const togglePassword = document.getElementById('toggle-password');

togglePassword.addEventListener('click', ()=>{
    if(password.type === 'password'){
        password.type = 'text';
        togglePassword.textContent = 'Hide';
        togglePassword.setAttribute('aria-pressed', 'true');
    } else {
        password.type = 'password';
        togglePassword.textContent = 'Show';
        togglePassword.setAttribute('aria-pressed', 'false');
    }
})