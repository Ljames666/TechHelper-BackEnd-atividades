// 2. Crie uma classe que modele uma bola:
// a. Atributos
// i. Cor
// ii. Circunferência
// iii. Material
// b. Métodos
// i. Trocar Cor
// ii. Mostrar cor

class Bola {
    constructor(public cor: string, public circunferencia: number, public material: string) {
        this.cor = cor;
        this.circunferencia = circunferencia;
        this.material = material;
    }

    trocarCor(novaCor: string) {
        console.log('Cor antiga', this.cor);
        this.cor = novaCor;
    }

    mostrar() {
        console.log('Cor', this.cor);
    }
}

const bola = new Bola('red', 15, 'couro');

bola.mostrar();

bola.trocarCor('blue');
bola.mostrar();
