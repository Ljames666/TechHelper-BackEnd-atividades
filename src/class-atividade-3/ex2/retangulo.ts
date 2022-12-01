import FormatoElemento from './interface';
class Retangulo implements FormatoElemento {
    constructor(public comprimento: number, public altura: number) {
        this.comprimento = comprimento;
        this.altura = altura;
    }

    desenhar(): void {
        console.log(`desenhando retangulo de ${this.comprimento} X ${this.altura} cm`);
    }
    redimensionar(data: { comprimento?: number; altura?: number }): void {
        this.comprimento = data.comprimento ?? this.comprimento;
        this.altura = data.altura ?? this.altura;
    }
}

export default Retangulo;
