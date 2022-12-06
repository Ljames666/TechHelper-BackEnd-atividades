interface IDesconto {
    aplicarDescontoEmPorcentagem(desconto: number): void;
    aplicarDescontoEmReais(desconto: number): void;
    recuperarValorTotal(): number;
}

interface IValorPedido {
    addItems(item: ItemPedido): void;
    removeItem(item: string): void;
    recuperarValorTotal(): number;
}

class Pedido implements IValorPedido {
    itens: ItemPedido[] = [];

    addItems(item: ItemPedido): void {
        this.itens.push(item);
    }

    recuperarValorTotal(): number {
        const total = this.itens.reduce((sum, v) => sum + v.valor, 0);
        return total;
    }
    removeItem(item: string): void {
        const filtered = this.itens.filter((v) => v.nome !== item);
        this.itens = filtered;
    }
}

class ItemPedido implements IDesconto {
    valor: number;
    nome: string;
    quantidade: number;

    constructor(valor: number, nome: string, quantidade: number) {
        this.valor = valor;
        this.nome = nome;
        this.quantidade = quantidade;
    }

    recuperarValorTotal(): number {
        return this.valor * this.quantidade;
    }

    aplicarDescontoEmReais(desconto: number): void {
        this.valor -= desconto;
    }

    aplicarDescontoEmPorcentagem(desconto: number): void {
        const porcentagem = desconto / 100;
        const descontoEmReais = this.valor * porcentagem;
        this.valor -= descontoEmReais;
    }
}

const pedidoOne = new ItemPedido(200, 'radio', 50);
const pedido2 = new ItemPedido(1000, 'tv', 120);
const pedido3 = new ItemPedido(2500, 'cell', 9);
const pedido4 = new ItemPedido(500, 'r4', 3);

pedido3.aplicarDescontoEmReais(500);
pedidoOne.aplicarDescontoEmPorcentagem(10);

console.log(pedidoOne);

const carrinho = new Pedido();

carrinho.addItems(pedidoOne);
carrinho.addItems(pedido2);
carrinho.addItems(pedido3);
carrinho.addItems(pedido4);
console.log(carrinho);
console.log(carrinho.recuperarValorTotal());
carrinho.removeItem('cell');
console.log(carrinho);
console.log(carrinho.recuperarValorTotal());
