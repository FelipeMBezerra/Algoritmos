import promptSync from "prompt-sync";
const prompt = promptSync();

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