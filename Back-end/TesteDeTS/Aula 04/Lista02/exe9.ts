import promptSync from "prompt-sync";
const prompt = promptSync();

//Desafio 9

let numi5 = Number(prompt(`Coloque um número:`));

if (isNaN(numi5)) {
   console.log (`Digite um valor de válido:`);
} else if (numi5 > 0) {
   console.log (`Valor positivo:${numi5}`);
} else if (numi5 < 0) {
   console.log (`Valor Negativo:${numi5}`);
} else {
   console.log (`Valor Neutro:${numi5}`);
}
//se um dos 5 números forem maior que 0 vai ser positivos, agora se for menor vai ser negativo, se for exatamente 0 ele vira neutro.