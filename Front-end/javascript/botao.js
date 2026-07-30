//Guarda e validar as informações do formulário

function salvarFormulario(event) {
  event.preventDefault();
  console.log(event);
  const { target } = event;
  console.log(target);
  const nome = target.querySelector("#nome").value;
  const email = target.querySelector("#email").value;
  const senha = target.querySelector("#senha").value;
  console.log(nome, email, senha);
}

const fomulario = document.querySelector("#form");
fomulario.addEventListener("submit", salvarFormulario);

const usuarioValido = {
  nome: "",
  email: "",
  senha: "",
};

if (usuarioValido.nome === nome && usuarioValido.email === email) {
    sucesso("usaio autenticado");
} else {
    console.error("usuario não valido")
}

//cores do fundo e confirmação do clique do botão

const corpo = document.getElementById("corpo");

const cores = ["white", "red", "blue", "green"];
let indice = 0;

function mostraNoConsole(event) {
  console.log(event);

  indice = (indice + 1) % cores.length;
  corpo.style.backgroundColor = cores[indice];
  
  corpo.style.color = indice === 0 ? "black" : "white";

  console.count("Fui cliclado");
}

corpo.addEventListener("color", mostraNoConsole);

const botao = document.querySelector("#clique-em");
botao.addEventListener("click", mostraNoConsole);
