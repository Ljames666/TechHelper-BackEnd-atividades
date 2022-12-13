import IClients from '../interfaces/IClients';
import ITransaction from '../interfaces/ITransactions';
import { v4 } from 'uuid';

class Client implements IClients {
    uid: string;
    transactions: Array<ITransaction>;

    constructor(public name: string, public cpf: string, public email: string, public age: number) {
        this.uid = v4();
        this.name = name;
        this.cpf = cpf;
        this.email = email;
        this.age = age;
        this.transactions = [];
    }
}

export default Client;
