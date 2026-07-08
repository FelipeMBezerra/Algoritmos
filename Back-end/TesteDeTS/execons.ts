class Carro {
    marca: string;
    modelo: string;
    ano: number;

    constructor(marca:string,modelo:string,ano:number) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    exibirDetalhes(): void {
        console.log(`Marca: ${this.marca}`);
        console.log(`Modelo: ${this.modelo}`);
        console.log(`Ano: ${this.ano}`);
    }
}

let carro = new Carro (`Autobot`,`Bubblebee`,2007);
carro.exibirDetalhes();

let carro2 = new Carro (`Chevrolet`,`Opala SS`,1974);
carro2.exibirDetalhes();