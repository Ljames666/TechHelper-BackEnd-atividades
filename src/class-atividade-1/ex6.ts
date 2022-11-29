// 6. Implemente uma classe chamada Carro com as seguintes
// propriedades:
// a. Um veículo tem um certo consumo de combustível (medidos
// em km / litro) e uma certa quantidade de combustível no
// tanque.
// b. O consumo é especificado no construtor e o nível de
// combustível inicial é 0.
// c. Forneça um método andar() que simula o ato de dirigir o
// veículo por uma certa distância, reduzindo o nível de
// combustível no tanque de gasolina.

// d. Forneça um método obterGasolina(), que retorna o nível atual
// de combustível e forneça um método adicionarGasolina(),
// para abastecer o tanque.

class Carro {
    consumoCombustivel: number;
    qtdCombustivel: number;
    constructor(consumoCombustivel: number) {
        this.consumoCombustivel = consumoCombustivel;
        this.qtdCombustivel = 0;
    }

    anda(km: number) {
        const consumo = km / this.consumoCombustivel;
        console.log(consumo);

        if (consumo < 0) {
            console.log('sem combustivel');
            return;
        }
        this.qtdCombustivel -= consumo;
    }
    obterGasolina(): number {
        return this.qtdCombustivel;
    }
    adicionarGasolina(qtd: number) {
        this.qtdCombustivel = qtd;
    }
}

const myFuquinha1600 = new Carro(10);
myFuquinha1600.adicionarGasolina(50);
console.log('1__', myFuquinha1600.obterGasolina());
myFuquinha1600.anda(100);
console.log(myFuquinha1600.obterGasolina());
