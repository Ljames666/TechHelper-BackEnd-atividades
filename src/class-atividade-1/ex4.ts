// 4. Crie uma classe para representar uma Calculadora. Esta classe
// deve conter um atributo que servirá para armazenar o histórico das
// operações e seus respectivos resultados.
// a. Esta classe deve conter as operações de somar, multiplicar,
// dividir e diminuir.
// b. Esta classe deve iniciar com o histórico vazio
// c. Esta classe deve conter uma ação para visualizar o histórico.

class Calculadora {
    private historico: string[];
    constructor() {
        this.historico = [];
    }

    visualizarHistorico() {
        for (const iterator of this.historico) {
            console.log(iterator, '\n');
        }
    }

    somar(num1: number, num2: number): number {
        const result = num1 + num2;
        this.historico.push(`${num1}+${num2}=${result}`);
        return result;
    }
    multiplicar(num1: number, num2: number): number {
        const result = num1 * num2;
        this.historico.push(`${num1}x${num2}=${result}`);
        return result;
    }
    subtrair(num1: number, num2: number): number {
        const result = num1 - num2;
        this.historico.push(`${num1}-${num2}=${result}`);
        return result;
    }
    dividir(num1: number, num2: number): number {
        const result = num1 / num2;
        this.historico.push(`${num1}/${num2}=${result}`);
        return result;
    }
}

const calc = new Calculadora();

calc.somar(2, 4);
calc.dividir(76, 8);
calc.multiplicar(65, 90);
calc.subtrair(12, 50);
calc.subtrair(50, 45);
calc.visualizarHistorico();
