//Mudar o traço do olho e fazendo a senha aparecer/esconder

const togglepassword = document.getElementById('togglepassword');
const passwordinput = document.getElementById('password');

togglepassword.addEventListener('click', function(){
    const isPassword = passwordinput.getAttribute('type') === 'password';
    passwordinput.setAttribute('type', isPassword ? 'text' : 'password');
    togglepassword.classList.toggle('active');
    });

//botão de login

document.getElementById(`loginForm`).addEventListener(`submit`, function(e){
    e.preventDefault();
    window.location.href = "Paginaprincipal.html";
});