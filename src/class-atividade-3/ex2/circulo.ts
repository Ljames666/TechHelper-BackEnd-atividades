import FormatoElemento from './interface';
class Circulo implements FormatoElemento {
    constructor(public raio: number) {
        this.raio = raio;
    }

    desenhar(): void {
        console.log(`desenhando um circulo de raio ${this.raio}.....`);
    }

    redimensionar(newRaio: number): void {
        this.raio = newRaio;
    }
}

export default Circulo;
