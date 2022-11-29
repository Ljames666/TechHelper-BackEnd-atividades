// 3. Crie uma classe para implementar uma conta corrente. A classe
// deve possuir os seguintes atributos:
// a. Número da conta
// b. Nome do correntista
// c. Saldo
// Os métodos são os seguintes:
// a) Alterar nome
// b) Deposito
// c) Saque
// No construtor, o saldo é opcional, com valor padrão zero e os
// demais atributos são obrigatórios. A conta não pode ficar com saldo
// negativo.

class ContaCorrente {
    conta: string;
    correntista: string | undefined;
    saldo!: number;

    constructor(conta: string, correntista: string, saldo?: number) {
        this.conta = conta;
        this.correntista = correntista;
        this.saldo = saldo ?? 0;
    }

    alterarNome(nome: string) {
        this.correntista = nome;
        console.log('Bem vindo ao James Bank:', this.correntista);
        console.log('seu saldo atual é:', this.saldo);
    }

    depositar(valor: number) {
        this.saldo += valor;
        console.log('seu saldo atual é:', this.saldo);
    }

    sacar(valor: number) {
        const newSaldo = this.saldo - valor;
        if (newSaldo > 0) {
            this.saldo = newSaldo;
            console.log('seu saldo atual é:', this.saldo);
        } else {
            console.log('saldo indisponivel');
        }
    }
}

const cc1290 = new ContaCorrente('cc1290', 'J. J. Jameson');
console.log('antigo', cc1290.correntista);

cc1290.alterarNome('Peter Park');

cc1290.depositar(1000);
cc1290.sacar(100);
