let x: number = 10; //Global

function teste(): void {
    let x2: number = 5; //Local
    let resultado: number = x + x2;
    console.log(`Resultado: ${resultado}`);
}

function outroTeste() : number {
    let x3 = 20;
    let resultado: number = x + x3;
    return resultado;
}

let resOutroTeste : number = outroTeste();

function teste3(y: number): void {
    console.log(`Argumento: ${y}`);
}

teste();
outroTeste();
teste3(resOutroTeste);