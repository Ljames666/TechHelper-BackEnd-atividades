abstract class Imovel {
    endereco: string;
    valor: number;

    constructor(endereco: string, valor: number) {
        this.endereco = endereco;
        this.valor = valor;
    }
}

class Novo extends Imovel {
    adicional: number;

    constructor(endereco: string, valor: number, adicional: number) {
        super(endereco, valor);
        this.adicional = adicional;
    }

    imprimeValorAdicional() {
        console.log(`Valor adicional de um imovel novo: ${this.adicional}`);
    }
}

class Velho extends Imovel {
    desconto: number;

    constructor(endereco: string, valor: number, desconto: number) {
        super(endereco, valor);
        this.desconto = desconto;
    }

    imprimeValorDesconto() {
        console.log(`Valor de desconto do imovel: ${this.desconto}`);
    }
}

const novo = new Novo('a', 20, 10);
const velho = new Velho('b', 20, 5);

novo.imprimeValorAdicional();
velho.imprimeValorDesconto();
