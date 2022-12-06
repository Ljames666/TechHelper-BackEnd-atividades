class Pessoaaa {
    constructor(public name: string, public age: number, public salario: number) {
        this.name = name;
        this.age = age;
        this.salario = salario;
    }
}

const pes1 = new Pessoaaa('Luigi', 26, 2000);
const pes2 = new Pessoaaa('Little Jonh', 19, 1020);
const pes3 = new Pessoaaa('Natasha', 22, 1800);
const pes4 = new Pessoaaa('Kate', 33, 950);
const pes5 = new Pessoaaa('Mark', 40, 2540);
const pes6 = new Pessoaaa('Big Joe', 36, 1870);
const pes7 = new Pessoaaa('Carl Jr', 18, 870);
const pes8 = new Pessoaaa('Shoffie', 27, 1250);
const pes9 = new Pessoaaa('Bob', 20, 900);
const pes10 = new Pessoaaa('Richad', 16, 600);

let array = [pes1, pes2, pes3, pes4, pes5, pes6, pes7, pes8, pes9, pes10];

const newArray23 = array.filter((value) => value.age < 23);
const newArray30 = array.filter((value) => value.age < 30);
const newArraySal = array.filter((value) => value.salario < 1027);

console.log('Ex 3');
console.log('Lista de pessoas');
console.table(array);
console.log('Lista de pessoas < 23');
console.table(newArray23);
console.log('-----------------------------------------------------------------------------------');
console.log('Ex 4');

console.log('Lista de pessoas < 30');
console.table(newArray30);
console.log(
    'Média de idades',
    Math.floor(newArray30.reduce((x, y) => x + y.age, 0) / newArray30.length)
);

console.log('-----------------------------------------------------------------------------------');
console.log('Ex 5');

console.log('Lista de pessoas < 30');
console.table(newArraySal);
console.log(
    'Lista de nomes: \n',
    newArraySal.map((value) => `nome: ${value.name} id: ${value.age}`)
);

console.log('-----------------------------------------------------------------------------------');
