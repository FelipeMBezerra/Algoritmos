//Desafio 6
//Desenvolver um programa que pergunte o peso de uma pessoa e também pergunte o código do planeta no qual
//ela gostaria de obter como resposta o valor do seu peso neste referido planeta. As informações da tabela abaixo
//(somente as colunas Código e Planeta) devem aparecer como menu de escolha ao usuário:
//Código Planeta Gravidade Relativa
//1 Mercúrio 0,37
//2 Vênus 0,88
//3 Marte 0,38
//4 Júpiter 2,64
//5 Saturno 1,15
//6 Urano 1,17
//Para calcular o peso no planeta escolhido, utilize a fórmula pesoNoPlaneta = (pesoNaTerra/10) *
//gravidadeRelativa. Caso o usuário digite um código que não esteja na tabela, informar que o código inserido
//está errado.

import promptSync from "prompt-sync";
const prompt = promptSync();

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