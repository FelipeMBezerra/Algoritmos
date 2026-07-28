const togglepassword = document.getElementById('togglepassword');
const passwordinput = document.getElementById('password');

togglepassword.addEventListener('click', function(){
    const isPassword = passwordinput.getAttribute('type') === 'password';
    passwordinput.setAttribute('type', isPassword ? 'text' : 'password');
    togglepassword.classList.toggle('active');
    });