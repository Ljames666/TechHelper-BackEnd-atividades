// 1. Crie uma classe Contador, que encapsule um valor usado para
// contagem de itens ou eventos. A classe deve oferecer métodos que
// devem:
// a) Zerar;
// b) Incrementar;
// c) Retornar o valor do contador.

class Contador {
    contador: number;

    constructor() {
        this.contador = 0;
    }

    zerar() {
        this.contador = 0;
    }
    incrementar() {
        this.contador++;
    }

    recuperarContador(): number {
        return this.contador;
    }
}

const contador = new Contador();

contador.incrementar();
contador.incrementar();
contador.incrementar();
contador.incrementar();

console.log('contador--->', contador.recuperarContador());
