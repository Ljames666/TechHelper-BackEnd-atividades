/*Crie as seguintes classes:
 a- Crie uma classe chamada Universidade, que terá como atributos: nome e local.
  Além disso, deve possuir um método construtor e métodos para encapsulamento dos
   seus atributos.

 b- Uma classe chamada Pessoa, com os atributos: nome e data de nascimento
  (que pode ser String). Assim como na outra classe, crie um método construtor 
  e métodos para encapsulamento de seus atributos.

 c- Cada pessoa poderá estar associada a uma universidade.

 d- A classe pessoa deve possuir um método que informe seus atributos 
 e a universidade em que trabalha.*/

class Universidade {
    private nome: string;
    private local: string;

    get recuperarNome(): string {
        return this.nome;
    }

    get recuperarLocal(): string {
        return this.local;
    }

    constructor(nome: string, local: string) {
        this.nome = nome;
        this.local = local;
    }
}

class Pessoa {
    private nome: string;
    private dataNascimento: string;
    private universidade: Universidade;

    get recuperarNome(): string {
        return this.nome;
    }

    get recuperarDataNascimento(): string {
        return this.dataNascimento;
    }

    constructor(nome: string, dataNascimento: string, universidade: Universidade) {
        this.nome = nome;
        this.dataNascimento = dataNascimento;
        this.universidade = universidade;
    }

    imprimeInformacoes() {
        console.log(`
          Nome: ${this.nome},
          Data de Nascimento: ${this.dataNascimento}
          Universidade: ${this.universidade.recuperarNome}
        `);
    }
}

const universidade = new Universidade('Feevale', 'NH');

const pessoa = new Pessoa('Edson', '31/10/1997', universidade);
pessoa.imprimeInformacoes();
