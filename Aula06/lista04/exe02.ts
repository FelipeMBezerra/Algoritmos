let num: number[] = [1,2,3,4,5];
let somar: number = 0;

for (let num1 of num) {
    somar += num1;
}

console.log(`Soma total ${somar}`);