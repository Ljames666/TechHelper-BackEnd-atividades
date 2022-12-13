import ITransaction from './ITransactions';

export default interface IClients {
    uid: string;
    name: string;
    cpf: string;
    email: string;
    age: number;
    transactions: Array<ITransaction>;
}
