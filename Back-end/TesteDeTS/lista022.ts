import promptSync from "prompt-sync";
const prompt = promptSync();

//Desafio 1
let tabela = Number(prompt(`
    Código| Opção
      1   | Incluir
      2   | Alterar
      3   | Excluir
      4   | Pesquisa
      5   | Sair

    Escolha um opção:`));

switch(tabela) {
    case 1:
        console.log(`Entrou em "Incluir"`);
        break;
    case 2:
        console.log(`Entrou em "Alterar"`);
        break;
    case 3:
        console.log(`Entrou em "Excluir"`);
        break;
    case 4:
        console.log(`Entrou em "Pesquisa"`);
        break;
    case 5:
        console.log(`Entrou em "Sair"`);
        break;
    default: (tabela >= 6);
    console.log(`Não é uma opção válida!`);
}

//Desafio 2
let sexo = (prompt(`Informe seu sexo:`));

switch (sexo) {
    case `masculino`:
        console.log(`Banheiro masculino à direita`);
        break;
    case `feminino`:
        console.log(`Banheiro feminino à esquerda`);
}

//Desafio 3

let n1 = Number(prompt(`Informe um número:`));
const resto: Number = n1 % 2;

switch (resto) {
    case 0:
        console.log(`Número par!`);
        break;
    case 1:
        console.log(`Número impar!`); 
}

//Desafio 4

let sigla = (prompt(`Informe a sigla do seu estado:`));

switch(sigla) {
    case `rj`:
        console.log(`Carioca!`);
        break;
    case `sp`:
        console.log(`Paulista!`);
        break;
    case `mg`:
        console.log(`Mineiro!`);
        break;
    default:
        console.log(`Outro estado!`);
}

//Desafio 5

let dia = Number(prompt(`digite um número de 1 a 12:`));

switch(dia) {
    case 1:
        console.log(`Janeiro`);
        break;
    case 2:
        console.log(`Fevereiro`);
        break;
     case 3:
        console.log(`Março`);
        break;
    case 4:
        console.log(`Abril`);
        break;
    case 5:
        console.log(`Maio`);
        break;
    case 6:
        console.log(`Junho`);
        break;
    case 7:
        console.log(`Julho`);
        break;
    case 8:
        console.log(`Agosto`);
        break;
    case 9:
        console.log(`Setembro`);
        break;
    case 10:
        console.log(`Outubro`);
        break;
    case 11:
        console.log(`Novembro`);
        break;
    case 12:
        console.log(`Dezembro`);
        break;
    default:
    console.log(`Não se encontra!`);
}

//Desafio 6

let pesot = Number(prompt(`Informe seu peso:`));
let planeta = Number(prompt(`
    Código | Planeta
       1   | Mercúrio
       2   | Vênus
       3   | Marte
       4   | Júpeter
       5   | Saturno
       6   | Urano

    Diga qual planeta você gostaria de ver o resultado:
    `))

switch (planeta) {
    case 1:
       let pesoM = (pesot / 10) * 0.37;
       console.log(`Seu peso em mercúrio: ${pesoM}`);
       break;
    case 2:
        let pesoV = (pesot / 10) * 0.88;
        console.log(`Seu peso em vênus: ${pesoV}`);
        break;
    case 3:
       let pesoMT = (pesot / 10) * 0.38;
       console.log(`Seu peso em mercúrio: ${pesoMT}`);
       break;
    case 4:
        let pesoJ = (pesot / 10) * 2.64;
        console.log(`Seu peso em vênus: ${pesoJ}`);
        break;
    case 5:
       let pesoS = (pesot / 10) * 1.15;
       console.log(`Seu peso em mercúrio: ${pesoS}`);
       break;
    case 6:
        let pesoU = (pesot / 10) * 1.17;
        console.log(`Seu peso em vênus: ${pesoU}`);
        break;
    default:
        console.log(`Não é um resposta válida!`);
        
}

//Desafio 7

let ni1 = Number(prompt(`Informe um número inteiro:`));
let ni2 = Number(prompt(`Informe outro número inteiro:`));
let fc = prompt(`
    Código  |  Operação
       a    | Média aritmética entre os números digitados
       b    | Diferença do maior pelo menor
       c    | Produto entre os números digitados
       d    | Divisão do primeiro pelo segundo
    `);

switch(fc){
    case `a`:
        let media = (ni1 + ni2) / 2;
        console.log(`A média de ${ni1} por ${ni2} é: ${media}!`);
        break;
    case `b`:
        switch (ni1 > ni2 ? 1:2) {
            case 1:
            console.log(`Diferença é de ${ni1 - ni2}`);
            break;
            case 2:
            console.log(`Diferença é de ${ni2 - ni1}`);
            break;
        }
        break;
    case `c`:
        let prod = (ni1*ni2);
        console.log(`Produto é de: ${prod}`);
        break;
    case `d`:
        let div = (ni1 / ni2);
        console.log(`A divisão de ${ni1} por ${ni2} é de: ${div}`);
}