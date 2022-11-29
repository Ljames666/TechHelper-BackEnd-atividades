/*Identifique os atributos e comportamentos que são comuns entre os 3 animais
 e encapsule-os na superclasse Animal. Crie pelo menos 1 comportamento diferente
  para cada animal.*/

abstract class Animal {
    private nome: string;
    private peso: number;
    private qtdPatas: number;

    get recuperarNome(): string {
        return this.nome;
    }

    get recuperarPeso(): number {
        return this.peso;
    }

    get recuperarQtdPatas(): number {
        return this.qtdPatas;
    }

    constructor(nome: string, peso: number, qtdPatas: number) {
        this.nome = nome;
        this.peso = peso;
        this.qtdPatas = qtdPatas;
    }

    public emitirSom() {
        console.log('Animal emitindo som...');
    }
}

class Cachorro extends Animal {
    raca: string;

    constructor(nome: string, peso: number, qtdPatas: number, raca: string) {
        super(nome, peso, qtdPatas);
        this.raca = raca;
    }

    public emitirSom() {
        console.log('au au...');
    }

    public ficarFeliz() {
        console.log('Abanar rabo ...');
    }
}

class Cavalo extends Animal {
    velocidade: number;

    constructor(nome: string, peso: number, qtdPatas: number, velocidade: number) {
        super(nome, peso, qtdPatas);
        this.velocidade = velocidade;
    }

    public emitirSom() {
        console.log('prurr prurr...');
    }

    public cavalgar() {
        console.log('cavalgando...');
    }
}

class Gato extends Animal {
    constructor(nome: string, peso: number, qtdPatas: number) {
        super(nome, peso, qtdPatas);
    }

    public emitirSom() {
        console.log('miauu...');
    }

    public escalar() {
        console.log('escalando uma arvore...');
    }
}

const dog = new Cachorro('Spike', 12, 4, 'golden');
dog.emitirSom();
dog.ficarFeliz();

const pokoto = new Cavalo('El corredor', 40, 4, 45);
pokoto.emitirSom();
pokoto.cavalgar();

const gatinho = new Gato('Preto', 15, 4);
gatinho.emitirSom();
gatinho.escalar();
