import promptSync from "prompt-sync";
const prompt = promptSync();

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