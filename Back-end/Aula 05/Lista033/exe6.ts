//Desafio 6

let base = 2;
let exp = 3;
let res = 1;

for (let i = 1;i <= exp; i++) {
    res *= base;
}

console.log(`${base} elevado a ${exp} = ${res}`);