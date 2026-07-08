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
