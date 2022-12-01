import Circulo from './circulo';
import Retangulo from './retangulo';
const circle = new Circulo(20);
const ret = new Retangulo(4, 5);

circle.desenhar();
circle.redimensionar(30);
circle.desenhar();
ret.desenhar();
ret.redimensionar({ comprimento: 30 });
ret.desenhar();
ret.redimensionar({ altura: 100 });
ret.desenhar();
