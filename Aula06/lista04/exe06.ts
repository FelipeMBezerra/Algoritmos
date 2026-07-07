let a:number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let b: number[] = []

for (let i = 0;i < a.length; i++) {
    b[i] = a[a.length - 1 - i];
}

console.log(`Vetor A: ${a}`);
console.log(`Vetor B: ${b}`);
