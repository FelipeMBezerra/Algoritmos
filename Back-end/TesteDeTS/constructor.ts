class Pessoa {
    nome: string;
    idade: number;

    constructor(nome:string,idade: number) {
        this.nome = nome;
        this.idade = idade;
    }


apresentar(): void {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
}

}

// Instanciando um obejto da classe Pessoa
let pessoa1 = new Pessoa (`João`, 25);
pessoa1.apresentar();
//Saída: Olá, meu nome é João e tenho 25 anos.