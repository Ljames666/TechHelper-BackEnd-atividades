abstract class Ingresso {
    valor: number;

    constructor() {
        this.valor = 20;
    }

    imprimeValor() {
        console.log(`Valor do ingresso: R$${this.valor}`);
    }
}

class Normal extends Ingresso {}

class Vip extends Ingresso {
    adicional: number;
    constructor() {
        super();
        this.adicional = 25;
    }

    imprimeValor(): void {
        console.log(`Valor do ingresso: R$${this.valor + this.adicional}`);
    }
}

class Camarote extends Ingresso {
    adicional: number;

    constructor() {
        super();
        this.adicional = 50;
    }

    imprimeValor(): void {
        console.log(`Valor do ingresso: R$${this.valor + this.adicional}`);
    }
}

const normal = new Normal();
const vip = new Vip();
const camarote = new Camarote();

normal.imprimeValor();
vip.imprimeValor();
camarote.imprimeValor();
