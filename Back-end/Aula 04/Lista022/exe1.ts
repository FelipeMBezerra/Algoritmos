import promptSync from "prompt-sync";
const prompt = promptSync();

//Desafio 1
//Desenvolver um programa que mostre o menu de opções da tabela abaixo e peça o código desejado. Mostre
//como resposta uma mensagem confirmando a escolha do usuário, ou que o número digitado não existe no
//menu de opções.

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
