/*Baseando-se na Atividade 1, crie uma classe Departamento,
 que possui o atributo nome. A classe deve possuir um construtor
  e métodos de encapsulamento. A Universidade deve estar composta
   por vários departamentos. Adapte também a classe Pessoa para que
    ela tenha uma referência ao Departamento onde trabalha, ou seja,
     deve possuir uma associação com a classe Departamento.*/

class University {
    private nome: string;
    private local: string;
    private departamentos: Departamento[];

    get recuperarNome(): string {
        return this.nome;
    }

    get recuperarLocal(): string {
        return this.local;
    }

    get recuperarDepartamentos(): Departamento[] {
        return this.departamentos;
    }

    constructor(nome: string, local: string, departamentos: Departamento[]) {
        this.nome = nome;
        this.local = local;
        this.departamentos = departamentos;
    }
}

class Departamento {
    private nome: string;

    get recuperarNome(): string {
        return this.nome;
    }

    constructor(nome: string) {
        this.nome = nome;
    }
}

class Person {
    private nome: string;
    private dataNascimento: string;
    private university: University;
    private departamento: Departamento;

    get recuperarNome(): string {
        return this.nome;
    }

    get recuperarDataNascimento(): string {
        return this.dataNascimento;
    }

    get recuperarDepartamento(): Departamento {
        return this.departamento;
    }

    constructor(
        nome: string,
        dataNascimento: string,
        university: University,
        departamento: Departamento
    ) {
        this.nome = nome;
        this.dataNascimento = dataNascimento;
        this.university = university;
        this.departamento = departamento;
    }

    imprimeInformacoes() {
        console.log(`
            Nome: ${this.nome},
            Data de Nascimento: ${this.dataNascimento},
            Universidade: ${this.university.recuperarNome},
            Departamento: ${this.departamento.recuperarNome}
          `);
    }
}

const departamento1 = new Departamento('Dep. 1');
const departamento2 = new Departamento('Dep. 2');
const university = new University('Feevale', 'NH', [departamento1, departamento2]);

const person = new Person('Edson', '31/10/1997', university, departamento1);
person.imprimeInformacoes();
