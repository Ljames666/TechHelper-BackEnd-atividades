import Item from './item';

class Pedido {
    itens: Item[] = [];
    valorTotal: number = 0;

    addItems(item: Item): void {
        this.itens.push(item);
    }
    removeLastItem(): void {
        this.itens.pop();
    }

    somaTotal() {
        this.itens.forEach((i) => {
            this.valorTotal += i.valor;
        });
    }

    listPedido() {
        this.somaTotal();
        this.itens.forEach((item, index) => {
            console.log(`${index}:${JSON.stringify(item)}`);
        });
        console.log(`valor total: ${this.valorTotal}`);
    }
}

const coke = new Item(8.99, 'coca colar', 'refrigerante 2l');
const bread = new Item(
    3,
    'cacetinho',
    'pao frances pros estrangeiros mas pao frances que nem existe na França'
);

const meat = new Item(30, 'Carne', 'Agulha');

const superBueno = new Pedido();
superBueno.addItems(coke);
superBueno.addItems(bread);
superBueno.addItems(meat);
superBueno.listPedido();
